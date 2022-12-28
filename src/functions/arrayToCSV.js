import React from 'react'

const arrayToCSV = (days) => {

  const data=[];
  if (days){
		days.forEach(
			day => {
        const date = makeDay(day.date)
        const weight = day.weight;
        data.push(	{date,weight})
			})
  }

  function makeDay (date) {
		let day = new Date(date)
		day = day.toLocaleString('en-UK').substring(0,5)
		return day
	}

    let dataFixArr = []
    data.forEach(el => dataFixArr.push([el.date,el.weight]))
    // Convert the data array to a string with the values separated by commas
    let csv = dataFixArr.map(row => row.join(',')).join('\n');
    csv = "date,weight\n".concat(csv)
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
