import React from 'react'

import { AreaChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Area } from 'recharts';

const Chart = ({days}) => {
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


	function makeDay (date) {
		let day = new Date(date)
		day = day.toLocaleString('en-UK').substring(0,5)
		return day
	}

  let width = 500;
  let height = 300
  let interval = 3
  const svg = document.querySelector('.line-chart');

  const mq = window.matchMedia('(max-width: 768px)');

  if (mq.matches) {
    width = 300
    interval = 10
  }

  return (
   
    <div className='chart-cmp justify-content-center mt-5'>
      <LineChart className='line-chart'
        fill="#f1f1f1"
        width={width}
        height={200}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: -20,
          bottom: 15,
        }}
        >
        <CartesianGrid className='x' strokeDasharray="1 1" />
        <XAxis className='x' dataKey="date"  interval={interval} fontSize='14px' stroke="#ffffff" /> 
        <YAxis tickFormatter={(value) => value.toFixed(1)} dataKey="weight" domain={[days[0].weight*0.7, days[0].weight*1.10]} tickCount={10} interval={0}  stroke="#ffffff" fontSize='14px' />
        <Tooltip contentStyle={{backgroundColor: 'indigo',color:'white'}} />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="weight" stroke="#ffffff" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  )
}

export default Chart



