import React from 'react'

const arrayToCSV = () => {



    let data =[
      // ['01/01', 70],
      // ['02/01', 71],
      {date: '02/01', weight: 69.8},
      {date: '03/01', weight: 69.6},
      {date: '04/01', weight: 69.8},
      {date: '05/01', weight: 69.7},
      {date: '06/01', weight: 69.5},
      {date: '07/01', weight: 69.5},
      {date: '08/01', weight: 69.6},
      {date: '09/01', weight: 69.4},
      {date: '10/01', weight: 69.3},
      {date: '11/01', weight: 69.3}
    ]

    let dataFix = []

    data.forEach(el => dataFix.push([el.date,el.weight]))
    console.log('dataFix:', dataFix)
    
    // Convert the data array to a string with the values separated by commas
    let csv = dataFix.map(row => row.join(',')).join('\n');
    csv = "date,weight\n".concat(csv)
    console.log('csv:', csv)
    // Create a hidden element to contain the CSV file
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'data.csv';

    // Append the hidden element to the document and simulate a click to download the file
    document.body.appendChild(hiddenElement);
    hiddenElement.click();
  


}

export default arrayToCSV
