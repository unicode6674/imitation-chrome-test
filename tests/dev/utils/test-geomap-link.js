const cities = [
  {
    "name": "北京市-天津市",
    "line": [
      "116.407394,39.904211",
      "117.200983,39.084158"
    ]
  },
  {
    "name": "北京市-河北省",
    "line": [
      "116.407394,39.904211",
      "114.530235,38.037433"
    ]
  },
  {
    "name": "北京市-山西省",
    "line": [
      "116.407394,39.904211",
      "112.562678,37.873499"
    ]
  },
  {
    "name": "北京市-内蒙古自治区",
    "line": [
      "116.407394,39.904211",
      "111.76629,40.81739"
    ]
  },
  {
    "name": "北京市-辽宁省",
    "line": [
      "116.407394,39.904211",
      "123.431382,41.836175"
    ]
  },
  {
    "name": "北京市-吉林省",
    "line": [
      "116.407394,39.904211",
      "125.32568,43.897016"
    ]
  },
  {
    "name": "北京市-黑龙江省",
    "line": [
      "116.407394,39.904211",
      "126.661665,45.742366"
    ]
  },
  {
    "name": "北京市-上海市",
    "line": [
      "116.407394,39.904211",
      "121.473662,31.230372"
    ]
  },
  {
    "name": "北京市-江苏省",
    "line": [
      "116.407394,39.904211",
      "118.762765,32.060875"
    ]
  },
  {
    "name": "北京市-浙江省",
    "line": [
      "116.407394,39.904211",
      "120.152585,30.266597"
    ]
  },
  {
    "name": "北京市-安徽省",
    "line": [
      "116.407394,39.904211",
      "117.329949,31.733806"
    ]
  },
  {
    "name": "北京市-福建省",
    "line": [
      "116.407394,39.904211",
      "119.295143,26.100779"
    ]
  },
  {
    "name": "北京市-江西省",
    "line": [
      "116.407394,39.904211",
      "115.81635,28.63666"
    ]
  },
  {
    "name": "北京市-山东省",
    "line": [
      "116.407394,39.904211",
      "117.019915,36.671156"
    ]
  },
  {
    "name": "北京市-河南省",
    "line": [
      "116.407394,39.904211",
      "113.753394,34.765869"
    ]
  },
  {
    "name": "北京市-湖北省",
    "line": [
      "116.407394,39.904211",
      "114.341745,30.546557"
    ]
  },
  {
    "name": "北京市-湖南省",
    "line": [
      "116.407394,39.904211",
      "112.9836,28.112743"
    ]
  },
  {
    "name": "北京市-广东省",
    "line": [
      "116.407394,39.904211",
      "113.26641,23.132324"
    ]
  },
  {
    "name": "北京市-广西壮族自治区",
    "line": [
      "116.407394,39.904211",
      "108.327546,22.815478"
    ]
  },
  {
    "name": "北京市-海南省",
    "line": [
      "116.407394,39.904211",
      "110.349228,20.017377"
    ]
  },
  {
    "name": "北京市-重庆市",
    "line": [
      "116.407394,39.904211",
      "106.551643,29.562849"
    ]
  },
  {
    "name": "北京市-四川省",
    "line": [
      "116.407394,39.904211",
      "104.075809,30.651239"
    ]
  },
  {
    "name": "北京市-贵州省",
    "line": [
      "116.407394,39.904211",
      "106.70546,26.600055"
    ]
  },
  {
    "name": "北京市-云南省",
    "line": [
      "116.407394,39.904211",
      "102.710002,25.045806"
    ]
  },
  {
    "name": "北京市-西藏自治区",
    "line": [
      "116.407394,39.904211",
      "91.117525,29.647535"
    ]
  },
  {
    "name": "北京市-陕西省",
    "line": [
      "116.407394,39.904211",
      "108.954347,34.265502"
    ]
  },
  {
    "name": "北京市-甘肃省",
    "line": [
      "116.407394,39.904211",
      "103.826447,36.05956"
    ]
  },
  {
    "name": "北京市-青海省",
    "line": [
      "116.407394,39.904211",
      "101.780268,36.620939"
    ]
  },
  {
    "name": "北京市-宁夏回族自治区",
    "line": [
      "116.407394,39.904211",
      "106.259126,38.472641"
    ]
  },
  {
    "name": "北京市-新疆维吾尔自治区",
    "line": [
      "116.407394,39.904211",
      "87.627704,43.793026"
    ]
  },
  {
    "name": "北京市-台湾省",
    "line": [
      "116.407394,39.904211",
      "121.509062,25.044332"
    ]
  },
  {
    "name": "北京市-香港特别行政区",
    "line": [
      "116.407394,39.904211",
      "114.171203,22.277468"
    ]
  },
  {
    "name": "北京市-澳门特别行政区",
    "line": [
      "116.407394,39.904211",
      "113.543028,22.186835"
    ]
  },
  {
    "name": "上海市-北京市",
    "line": [
      "121.473662,31.230372",
      "116.407394,39.904211"
    ]
  },
  {
    "name": "上海市-天津市",
    "line": [
      "121.473662,31.230372",
      "117.200983,39.084158"
    ]
  },
  {
    "name": "上海市-河北省",
    "line": [
      "121.473662,31.230372",
      "114.530235,38.037433"
    ]
  },
  {
    "name": "上海市-山西省",
    "line": [
      "121.473662,31.230372",
      "112.562678,37.873499"
    ]
  },
  {
    "name": "上海市-内蒙古自治区",
    "line": [
      "121.473662,31.230372",
      "111.76629,40.81739"
    ]
  },
  {
    "name": "上海市-辽宁省",
    "line": [
      "121.473662,31.230372",
      "123.431382,41.836175"
    ]
  },
  {
    "name": "上海市-吉林省",
    "line": [
      "121.473662,31.230372",
      "125.32568,43.897016"
    ]
  },
  {
    "name": "上海市-黑龙江省",
    "line": [
      "121.473662,31.230372",
      "126.661665,45.742366"
    ]
  },
  {
    "name": "上海市-江苏省",
    "line": [
      "121.473662,31.230372",
      "118.762765,32.060875"
    ]
  },
  {
    "name": "上海市-浙江省",
    "line": [
      "121.473662,31.230372",
      "120.152585,30.266597"
    ]
  },
  {
    "name": "上海市-安徽省",
    "line": [
      "121.473662,31.230372",
      "117.329949,31.733806"
    ]
  },
  {
    "name": "上海市-福建省",
    "line": [
      "121.473662,31.230372",
      "119.295143,26.100779"
    ]
  },
  {
    "name": "上海市-江西省",
    "line": [
      "121.473662,31.230372",
      "115.81635,28.63666"
    ]
  },
  {
    "name": "上海市-山东省",
    "line": [
      "121.473662,31.230372",
      "117.019915,36.671156"
    ]
  },
  {
    "name": "上海市-河南省",
    "line": [
      "121.473662,31.230372",
      "113.753394,34.765869"
    ]
  },
  {
    "name": "上海市-湖北省",
    "line": [
      "121.473662,31.230372",
      "114.341745,30.546557"
    ]
  },
  {
    "name": "上海市-湖南省",
    "line": [
      "121.473662,31.230372",
      "112.9836,28.112743"
    ]
  },
  {
    "name": "上海市-广东省",
    "line": [
      "121.473662,31.230372",
      "113.26641,23.132324"
    ]
  },
  {
    "name": "上海市-广西壮族自治区",
    "line": [
      "121.473662,31.230372",
      "108.327546,22.815478"
    ]
  },
  {
    "name": "上海市-海南省",
    "line": [
      "121.473662,31.230372",
      "110.349228,20.017377"
    ]
  },
  {
    "name": "上海市-重庆市",
    "line": [
      "121.473662,31.230372",
      "106.551643,29.562849"
    ]
  },
  {
    "name": "上海市-四川省",
    "line": [
      "121.473662,31.230372",
      "104.075809,30.651239"
    ]
  },
  {
    "name": "上海市-贵州省",
    "line": [
      "121.473662,31.230372",
      "106.70546,26.600055"
    ]
  },
  {
    "name": "上海市-云南省",
    "line": [
      "121.473662,31.230372",
      "102.710002,25.045806"
    ]
  },
  {
    "name": "上海市-西藏自治区",
    "line": [
      "121.473662,31.230372",
      "91.117525,29.647535"
    ]
  },
  {
    "name": "上海市-陕西省",
    "line": [
      "121.473662,31.230372",
      "108.954347,34.265502"
    ]
  },
  {
    "name": "上海市-甘肃省",
    "line": [
      "121.473662,31.230372",
      "103.826447,36.05956"
    ]
  },
  {
    "name": "上海市-青海省",
    "line": [
      "121.473662,31.230372",
      "101.780268,36.620939"
    ]
  },
  {
    "name": "上海市-宁夏回族自治区",
    "line": [
      "121.473662,31.230372",
      "106.259126,38.472641"
    ]
  },
  {
    "name": "上海市-新疆维吾尔自治区",
    "line": [
      "121.473662,31.230372",
      "87.627704,43.793026"
    ]
  },
  {
    "name": "上海市-台湾省",
    "line": [
      "121.473662,31.230372",
      "121.509062,25.044332"
    ]
  },
  {
    "name": "上海市-香港特别行政区",
    "line": [
      "121.473662,31.230372",
      "114.171203,22.277468"
    ]
  },
  {
    "name": "上海市-澳门特别行政区",
    "line": [
      "121.473662,31.230372",
      "113.543028,22.186835"
    ]
  },
  {
    "name": "广东省-北京市",
    "line": [
      "113.26641,23.132324",
      "116.407394,39.904211"
    ]
  },
  {
    "name": "广东省-天津市",
    "line": [
      "113.26641,23.132324",
      "117.200983,39.084158"
    ]
  },
  {
    "name": "广东省-河北省",
    "line": [
      "113.26641,23.132324",
      "114.530235,38.037433"
    ]
  },
  {
    "name": "广东省-山西省",
    "line": [
      "113.26641,23.132324",
      "112.562678,37.873499"
    ]
  },
  {
    "name": "广东省-内蒙古自治区",
    "line": [
      "113.26641,23.132324",
      "111.76629,40.81739"
    ]
  },
  {
    "name": "广东省-辽宁省",
    "line": [
      "113.26641,23.132324",
      "123.431382,41.836175"
    ]
  },
  {
    "name": "广东省-吉林省",
    "line": [
      "113.26641,23.132324",
      "125.32568,43.897016"
    ]
  },
  {
    "name": "广东省-黑龙江省",
    "line": [
      "113.26641,23.132324",
      "126.661665,45.742366"
    ]
  },
  {
    "name": "广东省-上海市",
    "line": [
      "113.26641,23.132324",
      "121.473662,31.230372"
    ]
  },
  {
    "name": "广东省-江苏省",
    "line": [
      "113.26641,23.132324",
      "118.762765,32.060875"
    ]
  },
  {
    "name": "广东省-浙江省",
    "line": [
      "113.26641,23.132324",
      "120.152585,30.266597"
    ]
  },
  {
    "name": "广东省-安徽省",
    "line": [
      "113.26641,23.132324",
      "117.329949,31.733806"
    ]
  },
  {
    "name": "广东省-福建省",
    "line": [
      "113.26641,23.132324",
      "119.295143,26.100779"
    ]
  },
  {
    "name": "广东省-江西省",
    "line": [
      "113.26641,23.132324",
      "115.81635,28.63666"
    ]
  },
  {
    "name": "广东省-山东省",
    "line": [
      "113.26641,23.132324",
      "117.019915,36.671156"
    ]
  },
  {
    "name": "广东省-河南省",
    "line": [
      "113.26641,23.132324",
      "113.753394,34.765869"
    ]
  },
  {
    "name": "广东省-湖北省",
    "line": [
      "113.26641,23.132324",
      "114.341745,30.546557"
    ]
  },
  {
    "name": "广东省-湖南省",
    "line": [
      "113.26641,23.132324",
      "112.9836,28.112743"
    ]
  },
  {
    "name": "广东省-广西壮族自治区",
    "line": [
      "113.26641,23.132324",
      "108.327546,22.815478"
    ]
  },
  {
    "name": "广东省-海南省",
    "line": [
      "113.26641,23.132324",
      "110.349228,20.017377"
    ]
  },
  {
    "name": "广东省-重庆市",
    "line": [
      "113.26641,23.132324",
      "106.551643,29.562849"
    ]
  },
  {
    "name": "广东省-四川省",
    "line": [
      "113.26641,23.132324",
      "104.075809,30.651239"
    ]
  },
  {
    "name": "广东省-贵州省",
    "line": [
      "113.26641,23.132324",
      "106.70546,26.600055"
    ]
  },
  {
    "name": "广东省-云南省",
    "line": [
      "113.26641,23.132324",
      "102.710002,25.045806"
    ]
  },
  {
    "name": "广东省-西藏自治区",
    "line": [
      "113.26641,23.132324",
      "91.117525,29.647535"
    ]
  },
  {
    "name": "广东省-陕西省",
    "line": [
      "113.26641,23.132324",
      "108.954347,34.265502"
    ]
  },
  {
    "name": "广东省-甘肃省",
    "line": [
      "113.26641,23.132324",
      "103.826447,36.05956"
    ]
  },
  {
    "name": "广东省-青海省",
    "line": [
      "113.26641,23.132324",
      "101.780268,36.620939"
    ]
  },
  {
    "name": "广东省-宁夏回族自治区",
    "line": [
      "113.26641,23.132324",
      "106.259126,38.472641"
    ]
  },
  {
    "name": "广东省-新疆维吾尔自治区",
    "line": [
      "113.26641,23.132324",
      "87.627704,43.793026"
    ]
  },
  {
    "name": "广东省-台湾省",
    "line": [
      "113.26641,23.132324",
      "121.509062,25.044332"
    ]
  },
  {
    "name": "广东省-香港特别行政区",
    "line": [
      "113.26641,23.132324",
      "114.171203,22.277468"
    ]
  },
  {
    "name": "广东省-澳门特别行政区",
    "line": [
      "113.26641,23.132324",
      "113.543028,22.186835"
    ]
  },
  {
    "name": "四川省-北京市",
    "line": [
      "104.075809,30.651239",
      "116.407394,39.904211"
    ]
  },
  {
    "name": "四川省-天津市",
    "line": [
      "104.075809,30.651239",
      "117.200983,39.084158"
    ]
  },
  {
    "name": "四川省-河北省",
    "line": [
      "104.075809,30.651239",
      "114.530235,38.037433"
    ]
  },
  {
    "name": "四川省-山西省",
    "line": [
      "104.075809,30.651239",
      "112.562678,37.873499"
    ]
  },
  {
    "name": "四川省-内蒙古自治区",
    "line": [
      "104.075809,30.651239",
      "111.76629,40.81739"
    ]
  },
  {
    "name": "四川省-辽宁省",
    "line": [
      "104.075809,30.651239",
      "123.431382,41.836175"
    ]
  },
  {
    "name": "四川省-吉林省",
    "line": [
      "104.075809,30.651239",
      "125.32568,43.897016"
    ]
  },
  {
    "name": "四川省-黑龙江省",
    "line": [
      "104.075809,30.651239",
      "126.661665,45.742366"
    ]
  },
  {
    "name": "四川省-上海市",
    "line": [
      "104.075809,30.651239",
      "121.473662,31.230372"
    ]
  },
  {
    "name": "四川省-江苏省",
    "line": [
      "104.075809,30.651239",
      "118.762765,32.060875"
    ]
  },
  {
    "name": "四川省-浙江省",
    "line": [
      "104.075809,30.651239",
      "120.152585,30.266597"
    ]
  },
  {
    "name": "四川省-安徽省",
    "line": [
      "104.075809,30.651239",
      "117.329949,31.733806"
    ]
  },
  {
    "name": "四川省-福建省",
    "line": [
      "104.075809,30.651239",
      "119.295143,26.100779"
    ]
  },
  {
    "name": "四川省-江西省",
    "line": [
      "104.075809,30.651239",
      "115.81635,28.63666"
    ]
  },
  {
    "name": "四川省-山东省",
    "line": [
      "104.075809,30.651239",
      "117.019915,36.671156"
    ]
  },
  {
    "name": "四川省-河南省",
    "line": [
      "104.075809,30.651239",
      "113.753394,34.765869"
    ]
  },
  {
    "name": "四川省-湖北省",
    "line": [
      "104.075809,30.651239",
      "114.341745,30.546557"
    ]
  },
  {
    "name": "四川省-湖南省",
    "line": [
      "104.075809,30.651239",
      "112.9836,28.112743"
    ]
  },
  {
    "name": "四川省-广东省",
    "line": [
      "104.075809,30.651239",
      "113.26641,23.132324"
    ]
  },
  {
    "name": "四川省-广西壮族自治区",
    "line": [
      "104.075809,30.651239",
      "108.327546,22.815478"
    ]
  },
  {
    "name": "四川省-海南省",
    "line": [
      "104.075809,30.651239",
      "110.349228,20.017377"
    ]
  },
  {
    "name": "四川省-重庆市",
    "line": [
      "104.075809,30.651239",
      "106.551643,29.562849"
    ]
  },
  {
    "name": "四川省-贵州省",
    "line": [
      "104.075809,30.651239",
      "106.70546,26.600055"
    ]
  },
  {
    "name": "四川省-云南省",
    "line": [
      "104.075809,30.651239",
      "102.710002,25.045806"
    ]
  },
  {
    "name": "四川省-西藏自治区",
    "line": [
      "104.075809,30.651239",
      "91.117525,29.647535"
    ]
  },
  {
    "name": "四川省-陕西省",
    "line": [
      "104.075809,30.651239",
      "108.954347,34.265502"
    ]
  },
  {
    "name": "四川省-甘肃省",
    "line": [
      "104.075809,30.651239",
      "103.826447,36.05956"
    ]
  },
  {
    "name": "四川省-青海省",
    "line": [
      "104.075809,30.651239",
      "101.780268,36.620939"
    ]
  },
  {
    "name": "四川省-宁夏回族自治区",
    "line": [
      "104.075809,30.651239",
      "106.259126,38.472641"
    ]
  },
  {
    "name": "四川省-新疆维吾尔自治区",
    "line": [
      "104.075809,30.651239",
      "87.627704,43.793026"
    ]
  },
  {
    "name": "四川省-台湾省",
    "line": [
      "104.075809,30.651239",
      "121.509062,25.044332"
    ]
  },
  {
    "name": "四川省-香港特别行政区",
    "line": [
      "104.075809,30.651239",
      "114.171203,22.277468"
    ]
  },
  {
    "name": "四川省-澳门特别行政区",
    "line": [
      "104.075809,30.651239",
      "113.543028,22.186835"
    ]
  },
  {
    "name": "云南省-北京市",
    "line": [
      "102.710002,25.045806",
      "116.407394,39.904211"
    ]
  },
  {
    "name": "云南省-天津市",
    "line": [
      "102.710002,25.045806",
      "117.200983,39.084158"
    ]
  },
  {
    "name": "云南省-河北省",
    "line": [
      "102.710002,25.045806",
      "114.530235,38.037433"
    ]
  },
  {
    "name": "云南省-山西省",
    "line": [
      "102.710002,25.045806",
      "112.562678,37.873499"
    ]
  },
  {
    "name": "云南省-内蒙古自治区",
    "line": [
      "102.710002,25.045806",
      "111.76629,40.81739"
    ]
  },
  {
    "name": "云南省-辽宁省",
    "line": [
      "102.710002,25.045806",
      "123.431382,41.836175"
    ]
  },
  {
    "name": "云南省-吉林省",
    "line": [
      "102.710002,25.045806",
      "125.32568,43.897016"
    ]
  },
  {
    "name": "云南省-黑龙江省",
    "line": [
      "102.710002,25.045806",
      "126.661665,45.742366"
    ]
  },
  {
    "name": "云南省-上海市",
    "line": [
      "102.710002,25.045806",
      "121.473662,31.230372"
    ]
  },
  {
    "name": "云南省-江苏省",
    "line": [
      "102.710002,25.045806",
      "118.762765,32.060875"
    ]
  },
  {
    "name": "云南省-浙江省",
    "line": [
      "102.710002,25.045806",
      "120.152585,30.266597"
    ]
  },
  {
    "name": "云南省-安徽省",
    "line": [
      "102.710002,25.045806",
      "117.329949,31.733806"
    ]
  },
  {
    "name": "云南省-福建省",
    "line": [
      "102.710002,25.045806",
      "119.295143,26.100779"
    ]
  },
  {
    "name": "云南省-江西省",
    "line": [
      "102.710002,25.045806",
      "115.81635,28.63666"
    ]
  },
  {
    "name": "云南省-山东省",
    "line": [
      "102.710002,25.045806",
      "117.019915,36.671156"
    ]
  },
  {
    "name": "云南省-河南省",
    "line": [
      "102.710002,25.045806",
      "113.753394,34.765869"
    ]
  },
  {
    "name": "云南省-湖北省",
    "line": [
      "102.710002,25.045806",
      "114.341745,30.546557"
    ]
  },
  {
    "name": "云南省-湖南省",
    "line": [
      "102.710002,25.045806",
      "112.9836,28.112743"
    ]
  },
  {
    "name": "云南省-广东省",
    "line": [
      "102.710002,25.045806",
      "113.26641,23.132324"
    ]
  },
  {
    "name": "云南省-广西壮族自治区",
    "line": [
      "102.710002,25.045806",
      "108.327546,22.815478"
    ]
  },
  {
    "name": "云南省-海南省",
    "line": [
      "102.710002,25.045806",
      "110.349228,20.017377"
    ]
  },
  {
    "name": "云南省-重庆市",
    "line": [
      "102.710002,25.045806",
      "106.551643,29.562849"
    ]
  },
  {
    "name": "云南省-四川省",
    "line": [
      "102.710002,25.045806",
      "104.075809,30.651239"
    ]
  },
  {
    "name": "云南省-贵州省",
    "line": [
      "102.710002,25.045806",
      "106.70546,26.600055"
    ]
  },
  {
    "name": "云南省-西藏自治区",
    "line": [
      "102.710002,25.045806",
      "91.117525,29.647535"
    ]
  },
  {
    "name": "云南省-陕西省",
    "line": [
      "102.710002,25.045806",
      "108.954347,34.265502"
    ]
  },
  {
    "name": "云南省-甘肃省",
    "line": [
      "102.710002,25.045806",
      "103.826447,36.05956"
    ]
  },
  {
    "name": "云南省-青海省",
    "line": [
      "102.710002,25.045806",
      "101.780268,36.620939"
    ]
  },
  {
    "name": "云南省-宁夏回族自治区",
    "line": [
      "102.710002,25.045806",
      "106.259126,38.472641"
    ]
  },
  {
    "name": "云南省-新疆维吾尔自治区",
    "line": [
      "102.710002,25.045806",
      "87.627704,43.793026"
    ]
  },
  {
    "name": "云南省-台湾省",
    "line": [
      "102.710002,25.045806",
      "121.509062,25.044332"
    ]
  },
  {
    "name": "云南省-香港特别行政区",
    "line": [
      "102.710002,25.045806",
      "114.171203,22.277468"
    ]
  },
  {
    "name": "云南省-澳门特别行政区",
    "line": [
      "102.710002,25.045806",
      "113.543028,22.186835"
    ]
  },
  {
    "name": "重庆市-北京市",
    "line": [
      "106.551643,29.562849",
      "116.407394,39.904211"
    ]
  },
  {
    "name": "重庆市-天津市",
    "line": [
      "106.551643,29.562849",
      "117.200983,39.084158"
    ]
  },
  {
    "name": "重庆市-河北省",
    "line": [
      "106.551643,29.562849",
      "114.530235,38.037433"
    ]
  },
  {
    "name": "重庆市-山西省",
    "line": [
      "106.551643,29.562849",
      "112.562678,37.873499"
    ]
  },
  {
    "name": "重庆市-内蒙古自治区",
    "line": [
      "106.551643,29.562849",
      "111.76629,40.81739"
    ]
  },
  {
    "name": "重庆市-辽宁省",
    "line": [
      "106.551643,29.562849",
      "123.431382,41.836175"
    ]
  },
  {
    "name": "重庆市-吉林省",
    "line": [
      "106.551643,29.562849",
      "125.32568,43.897016"
    ]
  },
  {
    "name": "重庆市-黑龙江省",
    "line": [
      "106.551643,29.562849",
      "126.661665,45.742366"
    ]
  },
  {
    "name": "重庆市-上海市",
    "line": [
      "106.551643,29.562849",
      "121.473662,31.230372"
    ]
  },
  {
    "name": "重庆市-江苏省",
    "line": [
      "106.551643,29.562849",
      "118.762765,32.060875"
    ]
  },
  {
    "name": "重庆市-浙江省",
    "line": [
      "106.551643,29.562849",
      "120.152585,30.266597"
    ]
  },
  {
    "name": "重庆市-安徽省",
    "line": [
      "106.551643,29.562849",
      "117.329949,31.733806"
    ]
  },
  {
    "name": "重庆市-福建省",
    "line": [
      "106.551643,29.562849",
      "119.295143,26.100779"
    ]
  },
  {
    "name": "重庆市-江西省",
    "line": [
      "106.551643,29.562849",
      "115.81635,28.63666"
    ]
  },
  {
    "name": "重庆市-山东省",
    "line": [
      "106.551643,29.562849",
      "117.019915,36.671156"
    ]
  },
  {
    "name": "重庆市-河南省",
    "line": [
      "106.551643,29.562849",
      "113.753394,34.765869"
    ]
  },
  {
    "name": "重庆市-湖北省",
    "line": [
      "106.551643,29.562849",
      "114.341745,30.546557"
    ]
  },
  {
    "name": "重庆市-湖南省",
    "line": [
      "106.551643,29.562849",
      "112.9836,28.112743"
    ]
  },
  {
    "name": "重庆市-广东省",
    "line": [
      "106.551643,29.562849",
      "113.26641,23.132324"
    ]
  },
  {
    "name": "重庆市-广西壮族自治区",
    "line": [
      "106.551643,29.562849",
      "108.327546,22.815478"
    ]
  },
  {
    "name": "重庆市-海南省",
    "line": [
      "106.551643,29.562849",
      "110.349228,20.017377"
    ]
  },
  {
    "name": "重庆市-四川省",
    "line": [
      "106.551643,29.562849",
      "104.075809,30.651239"
    ]
  },
  {
    "name": "重庆市-贵州省",
    "line": [
      "106.551643,29.562849",
      "106.70546,26.600055"
    ]
  },
  {
    "name": "重庆市-云南省",
    "line": [
      "106.551643,29.562849",
      "102.710002,25.045806"
    ]
  },
  {
    "name": "重庆市-西藏自治区",
    "line": [
      "106.551643,29.562849",
      "91.117525,29.647535"
    ]
  },
  {
    "name": "重庆市-陕西省",
    "line": [
      "106.551643,29.562849",
      "108.954347,34.265502"
    ]
  },
  {
    "name": "重庆市-甘肃省",
    "line": [
      "106.551643,29.562849",
      "103.826447,36.05956"
    ]
  },
  {
    "name": "重庆市-青海省",
    "line": [
      "106.551643,29.562849",
      "101.780268,36.620939"
    ]
  },
  {
    "name": "重庆市-宁夏回族自治区",
    "line": [
      "106.551643,29.562849",
      "106.259126,38.472641"
    ]
  },
  {
    "name": "重庆市-新疆维吾尔自治区",
    "line": [
      "106.551643,29.562849",
      "87.627704,43.793026"
    ]
  },
  {
    "name": "重庆市-台湾省",
    "line": [
      "106.551643,29.562849",
      "121.509062,25.044332"
    ]
  },
  {
    "name": "重庆市-香港特别行政区",
    "line": [
      "106.551643,29.562849",
      "114.171203,22.277468"
    ]
  },
  {
    "name": "重庆市-澳门特别行政区",
    "line": [
      "106.551643,29.562849",
      "113.543028,22.186835"
    ]
  },
  {
    "name": "湖北省-北京市",
    "line": [
      "114.341745,30.546557",
      "116.407394,39.904211"
    ]
  },
  {
    "name": "湖北省-天津市",
    "line": [
      "114.341745,30.546557",
      "117.200983,39.084158"
    ]
  },
  {
    "name": "湖北省-河北省",
    "line": [
      "114.341745,30.546557",
      "114.530235,38.037433"
    ]
  },
  {
    "name": "湖北省-山西省",
    "line": [
      "114.341745,30.546557",
      "112.562678,37.873499"
    ]
  },
  {
    "name": "湖北省-内蒙古自治区",
    "line": [
      "114.341745,30.546557",
      "111.76629,40.81739"
    ]
  },
  {
    "name": "湖北省-辽宁省",
    "line": [
      "114.341745,30.546557",
      "123.431382,41.836175"
    ]
  },
  {
    "name": "湖北省-吉林省",
    "line": [
      "114.341745,30.546557",
      "125.32568,43.897016"
    ]
  },
  {
    "name": "湖北省-黑龙江省",
    "line": [
      "114.341745,30.546557",
      "126.661665,45.742366"
    ]
  },
  {
    "name": "湖北省-上海市",
    "line": [
      "114.341745,30.546557",
      "121.473662,31.230372"
    ]
  },
  {
    "name": "湖北省-江苏省",
    "line": [
      "114.341745,30.546557",
      "118.762765,32.060875"
    ]
  },
  {
    "name": "湖北省-浙江省",
    "line": [
      "114.341745,30.546557",
      "120.152585,30.266597"
    ]
  },
  {
    "name": "湖北省-安徽省",
    "line": [
      "114.341745,30.546557",
      "117.329949,31.733806"
    ]
  },
  {
    "name": "湖北省-福建省",
    "line": [
      "114.341745,30.546557",
      "119.295143,26.100779"
    ]
  },
  {
    "name": "湖北省-江西省",
    "line": [
      "114.341745,30.546557",
      "115.81635,28.63666"
    ]
  },
  {
    "name": "湖北省-山东省",
    "line": [
      "114.341745,30.546557",
      "117.019915,36.671156"
    ]
  },
  {
    "name": "湖北省-河南省",
    "line": [
      "114.341745,30.546557",
      "113.753394,34.765869"
    ]
  },
  {
    "name": "湖北省-湖南省",
    "line": [
      "114.341745,30.546557",
      "112.9836,28.112743"
    ]
  },
  {
    "name": "湖北省-广东省",
    "line": [
      "114.341745,30.546557",
      "113.26641,23.132324"
    ]
  },
  {
    "name": "湖北省-广西壮族自治区",
    "line": [
      "114.341745,30.546557",
      "108.327546,22.815478"
    ]
  },
  {
    "name": "湖北省-海南省",
    "line": [
      "114.341745,30.546557",
      "110.349228,20.017377"
    ]
  },
  {
    "name": "湖北省-重庆市",
    "line": [
      "114.341745,30.546557",
      "106.551643,29.562849"
    ]
  },
  {
    "name": "湖北省-四川省",
    "line": [
      "114.341745,30.546557",
      "104.075809,30.651239"
    ]
  },
  {
    "name": "湖北省-贵州省",
    "line": [
      "114.341745,30.546557",
      "106.70546,26.600055"
    ]
  },
  {
    "name": "湖北省-云南省",
    "line": [
      "114.341745,30.546557",
      "102.710002,25.045806"
    ]
  },
  {
    "name": "湖北省-西藏自治区",
    "line": [
      "114.341745,30.546557",
      "91.117525,29.647535"
    ]
  },
  {
    "name": "湖北省-陕西省",
    "line": [
      "114.341745,30.546557",
      "108.954347,34.265502"
    ]
  },
  {
    "name": "湖北省-甘肃省",
    "line": [
      "114.341745,30.546557",
      "103.826447,36.05956"
    ]
  },
  {
    "name": "湖北省-青海省",
    "line": [
      "114.341745,30.546557",
      "101.780268,36.620939"
    ]
  },
  {
    "name": "湖北省-宁夏回族自治区",
    "line": [
      "114.341745,30.546557",
      "106.259126,38.472641"
    ]
  },
  {
    "name": "湖北省-新疆维吾尔自治区",
    "line": [
      "114.341745,30.546557",
      "87.627704,43.793026"
    ]
  },
  {
    "name": "湖北省-台湾省",
    "line": [
      "114.341745,30.546557",
      "121.509062,25.044332"
    ]
  },
  {
    "name": "湖北省-香港特别行政区",
    "line": [
      "114.341745,30.546557",
      "114.171203,22.277468"
    ]
  },
  {
    "name": "湖北省-澳门特别行政区",
    "line": [
      "114.341745,30.546557",
      "113.543028,22.186835"
    ]
  }
];

function getTestData(){
  let res = [];
  cities.forEach(city => {
    res.push({
      ...city,
      value: Math.random()*10000
    });
  });
  return res;
}

const linkData = getTestData();
export default linkData;