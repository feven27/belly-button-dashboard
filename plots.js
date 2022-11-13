const displayData = () => {
  let choice = d3.select('select').node().value;

  d3.json('./assets/resources/samples.json').then(({metadata,samples})=> {
    



    console.log(metadata,samples);
  })

};

d3.json('./assets/resources/samples.json').then(({names})=> {
  names.forEach(id => {
    d3.select('select').append('option').text(id)
  });

  displayData()
})

const optionChanged = displayData;

