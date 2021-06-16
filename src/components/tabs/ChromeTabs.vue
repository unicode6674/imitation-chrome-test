<template>
  <div class="vue-tabs-chrome">
    <div ref="content" class="tabs-content">
      <!-- tab 分割线 -->
      <template v-if="tabs.length > 0">
        <div
            v-for="indexDivider in tabs.length"
            :key="indexDivider"
            class="tabs-divider"
            :style="{ left: (tabWidth - gap * 2) * indexDivider + gap + 'px' }"
        ></div>
        <!-- tab -->
        <div
            v-for="(tab, index) in tabs"
            :key="`${tab.id}-${index}`"
            ref="item"
            class="tabs-item"
            :class="
            [{ active: tab.id === value }, `tab-${tab.id}`, tab.class].filter(
              (item) => item
            )
          "
            :style="{
            width: tabWidth + 'px',
            left: (tabWidth - gap * 2) * index + 'px',
          }"
            @click="handleClickTab(tab)"
        >
          <!-- 背景样式 -->
          <div class="tabs-background">
            <div class="tabs-background-content"></div>
            <svg
                class="tabs-background-before"
                :style="{ width: 7, height: 7 }"
            >
              <path d="M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z"></path>
            </svg>
            <svg class="tabs-background-after" :style="{ width: 7, height: 7 }">
              <path d="M 0 0 A 7 7 0 0 0 7 7 L 0 7 Z"></path>
            </svg>
          </div>
          <!-- 关闭 按钮 -->
          <div
              v-show="allowedDelete"
              class="tabs-close"
              @click.stop="handleDelete(tab, index, $event)"
          >
            <svg
                class="tabs-close-icon"
                :style="{ width: 16, height: 16, stroke: '#595959' }"
            >
              <path d="M 4 4 L 12 12 M 12 4 L 4 12"></path>
            </svg>
          </div>
          <!-- tab label  -->
          <div class="tabs-main">
            <!-- 正常显示状态 -->
            <div v-if="editPipelineId !== tab.id" class="tabs-label">
              <span
                  class="tabs-label-text"
                  @click="editPipelineName(tab.id, tab.name)"
              >{{ tab.name }}</span>

              <!-- 编辑 icon -->
              <a
                  v-if="tab.id === value && allowedEdit"
                  type="edit"
                  class="tab-name-edit-icon"
                  @click="editPipelineName(tab.id, tab.name)" >E</a>
            </div>
            <!-- 编辑状态 -->
            <div v-else class="tabs-label-edit">
              <input
                  v-model="activeEditPipelineName"
                  v-focus
                  type="text"
                  size="small"
                  @keyup.enter.native="$event.target.blur"
                  @blur="editPipelineEnter(tab.id, index)"
              />
            </div>
          </div>
        </div>
      </template>
      <!-- tabs 尾部 插槽 -->
      <div
          ref="after"
          class="tabs-after"
          :style="{ left: (tabWidth - gap * 2) * tabs.length + gap * 2 + 'px' }"
      >
        <slot name="after"></slot>
      </div>
    </div>
    <!--    <div class="tabs-footer"></div>-->
  </div>
</template>

<script>
export default {
  name: 'ChromeTabs',
  directives: {
    focus: {
      inserted: (element) => {
        element.focus();
      },
    },
  },
  props: {
    value: {type: Number, default: 1},
    tabs: {type: Array, default: () => [{id: 1, name: 'tab1'},{id: 2, name: 'tab2'}]},
    minWidth: {type: Number, default: 40}, // tab 最小宽度
    maxWidth: {type: Number, default: 245}, // tab 最大宽度
    gap: {type: Number, default: 7}, // tab 缝隙
    insertToAfter: {type: Boolean, default: false}, // 添加 tab 到当前 激活tab 后,
    allowedEdit: {type: Boolean, default: true}, // 可编辑
  },
  data(){
    return {
      allowedDelete: true, // 可删除
      tabWidth: 0, // tab 宽度 需要实时计算
      timer: null, // 定时器
      editPipelineId: null, // 添加编辑功能
      activeEditPipelineName: '', // 编辑的 tab name
    };
  },

  computed: {
    tabsLength() {
      return this.tabs.length;
    }
  },
  watch: {
    tabsLength: {
      handler() {
        this.doLayout();
        this.allowedDelete = this.tabsLength !== 1;
      },
      // deep: true  //true 深度监听
    },
  },

  mounted() {
    this.calcTabWidth();
    window.addEventListener('resize', this.handleResize);
  },


  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },





  methods: {
    /**
     * 计算 tab 的宽度
     */
    calcTabWidth() {
      const { tabs, maxWidth, minWidth, gap } = this;
      const $content = this.$refs.content;  // 整个 tabs 容器
      const { after } = this.$refs;  // 尾部插槽
      const afterWidth = after.getBoundingClientRect().width;  // 尾部插槽 div 的宽度
      if (!$content) {
        return Math.max(maxWidth, minWidth);
      } // 如果 tab 容器不存在， 返回一个最大值, 其实返回只是占位
      // tabs 容器的可用宽度 gap 是 圆角防止贴边的宽度 first tab 左侧， last tab 右侧 ， 最后 插槽右侧贴边  共3个
      const contentWidth = $content.clientWidth - gap * 3 - afterWidth;
      let width = contentWidth / tabs.length;  // 计算宽度, 根据 可用宽度和 tabs 长度
      width += gap * 2;  // 加两边优化圆角
      // 宽度边界限制
      if (width > maxWidth) {
        width = maxWidth;
      }
      if (width < minWidth) {
        width = minWidth;
      }
      this.tabWidth = width;
      return null;
    },

    /**
     * 重新 layout 排布
     */
    doLayout() {
      this.calcTabWidth();
    },

    /**
     * 点击切换 tab
     */
    handleClickTab(tab) {
      this.$emit('switch-tab', tab.id);
    },

    /**
     * 编辑 tab name
     * @param id
     * @param name
     */
    editPipelineName(id, name) {
      if (this.value === id && this.allowedEdit) {
        this.activeEditPipelineName = name;
        this.editPipelineId = id;
      }
    },

    /**
     * 确认编辑 tab name
     * @param id
     */
    editPipelineEnter(id) {
      if (this.activeEditPipelineName.length > 0) {
        if (this.activeEditPipelineName.match(/^ *$/)) {
          this.editPipelineId = id;
        } else {
          this.editPipelineId = null;
          this.activeEditPipelineName = '';
        }
      } else {
        this.editPipelineId = id;
      }
    },

    /**
     * 删除 tab
     * @param tab
     * @param index
     * @param $event
     */
    handleDelete(tab, index, $event) {
      $event.stopPropagation();
      const { tabs, value } = this;
      const activeIndex = tabs.findIndex((item) => item.id === value);  // 当前激活 tab 索引
      // 前后 tab
      let after = null;
      let before = null;

      let activeIdAfterDelete = null;
      // 删除的是当前激活的
      if (index === activeIndex) {
        after = tabs[index + 1];
        before = tabs[index - 1];
      } else {
        activeIdAfterDelete = this.value;
      }
      // 删除后激活的 tab id
      if (after) {
        activeIdAfterDelete = after.id;
      } else if (before) {
        activeIdAfterDelete = before.id;
      } else if (tabs.length <= 1) {
        activeIdAfterDelete = null;
      }
      // 通知父组件 删除
      this.$emit('remove', index, tab.id, activeIdAfterDelete);
    },

    /**
     * 改变窗口宽度 相应
     */
    handleResize() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.doLayout();
      }, 50);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/* tab 整体 */
.vue-tabs-chrome {
  background-color: #ededf4;
  height: 38px;
  padding-top: 4px;
  position: relative;
  width: 100%;

  /* tab 内容 */
  .tabs-content {
    height: 34px;
    overflow: hidden;
    position: relative;
  }

  /* divider tab 间的分割线 */
  .tabs-divider {
    border-right: 1px solid #a9adb0;
    height: 20px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
  }

  /* tab */
  .tabs-item {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    position: absolute;
    transition: width 0ms;
    user-select: none;

    /* hover */
    &:hover {
      .tabs-background-content {
        background-color: #f2f3f5;
      }

      .tabs-background-before,
      .tabs-background-after {
        fill: #f2f3f5;
      }
    }

    /* 激活 */
    &.active {
      z-index: 2;

      .tabs-background {
        opacity: 1;
      }

      .tabs-background-content {
        background-color: #fff;
      }

      .tabs-background-before,
      .tabs-background-after {
        fill: #fff;
      }
    }

    /* 第一个 tab  */
    &:first-of-type {
      .tabs-dividers::before {
        opacity: 0;
      }
    }

    /* 最后一个 tab */
    &:last-of-type {
      .tabs-dividers::after {
        opacity: 0;
      }
    }
  }

  /* tab 标签 */
  .tabs-main {
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    height: 100%;
    left: 0;
    margin: 0 14px;
    overflow: hidden;
    position: absolute;
    right: 0;
    transition: 150ms;
    width: calc(100% - 28px);
  }

  /* 关闭 插槽 */
  .tabs-close {
    cursor: pointer;
    height: 16px;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    z-index: 1;
  }

  /* 关闭 icon */
  .tabs-close-icon {
    border-radius: 50%;
    height: 100%;
    width: 100%;

    &:hover {
      background-color: #e8eaed;
      stroke: #000;
    }
  }

  /* tabs-main 中的 label */
  .tabs-label {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    justify-content: center;
    margin-left: 7px;
    margin-right: 16px;
    width: calc(100% - 23px);

    .tabs-label-text {
      display: inline-block;
      max-width: calc(100% - 20px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &.no-close {
      margin-right: 7px;
    }

    .tab-name-edit-icon {
      cursor: pointer;
      display: none;
      font-size: 16px;
      margin-left: 2px;
    }

    &:hover {
      .tab-name-edit-icon {
        display: inline-block;
      }
    }
  }

  /* 编辑 */
  .tabs-label-edit {
    width: calc(100% - 23px);
  }

  /* background 背景样式 */
  .tabs-background {
    box-sizing: border-box;
    height: 100%;
    padding: 0 7px - 1px;
    position: absolute;
    transition: opacity 300ms;
    width: 100%;
  }

  .tabs-background-content {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    height: 100%;
    transition: background 150ms;
  }

  .tabs-background-before,
  .tabs-background-after {
    bottom: -1px;
    fill: transparent;
    position: absolute;
    transition: background 150ms;
  }

  .tabs-background-before {
    left: -1px;
  }

  .tabs-background-after {
    right: -1px;
  }

  //.tabs-footer {
  //  background-color: #fff;
  //  height: 4px;
  //}

  .tabs-after {
    display: flex;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @keyframes tab-show {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }
}
</style>
