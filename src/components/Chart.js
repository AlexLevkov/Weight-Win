import React from 'react'

import { AreaChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Area } from 'recharts';

const Chart = ({days}) => {
  console.log('days in chart:', days);
	const data=[];
  
	if (days){
		days.forEach(
			day => {
			const date = makeDay(day.date)
			const weight = day.weight;
				data.push(	{date,weight})
			}
		)
	}

  console.log('data:', data)

	function makeDay (date) {
		let day = new Date(date)
		day = day.toLocaleString('en-UK').substring(0,5)
		return day
	}

  return (
   
    <div>
      <h1>Chart</h1>
      <LineChart className='line-chart'
        fill="#f1f1f1"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: -20,
          bottom: 15,
        }}
        >
        <CartesianGrid className='x' strokeDasharray="1 1" />
        <XAxis className='x' dataKey="date"  interval={3} fontSize='14px' stroke="#ffffff" /> 
        <YAxis tickFormatter={(value) => value.toFixed(1)} dataKey="weight" domain={[days[0].weight*0.7, days[0].weight*1.10]} tickCount={10} interval={0}  stroke="#ffffff" fontSize='14px' />
        <Tooltip contentStyle={{backgroundColor: 'indigo',color:'white'}} />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="weight" stroke="#ffffff" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  )
}

export default Chart



