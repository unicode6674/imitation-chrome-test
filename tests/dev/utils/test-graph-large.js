function generateData() {
  const data = {
    nodes: [],
    links: []
  };
  
  for(let i=0;i<200;i++){
    data.nodes.push({
      id: i
    });
  }


  for(let i=0;i<200;i++){
    for(let j=i+1;j<200;j++){
      data.links.push({
        source: i,
        target: j
      });
    }
  }

  return data;
}

const data = generateData();
export default data;
