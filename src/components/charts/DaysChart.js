import React from 'react'

import { AreaChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Area } from 'recharts';

const DaysChart = ({days,type}) => {
	const data=[];
  
	if (days){
		days.forEach(
			day => {
			const date = makeDay(day.date)
			const value = day.weight ;
				data.push(	{date,value})
			}
		)
	}


	function makeDay (date) {
		let day = new Date(date)
		day = day.toLocaleString('en-UK').substring(0,5)
		return day
	}

  let width =  window.innerWidth*0.35;
  let interval = 3

  const mq = window.matchMedia('(max-width: 768px)');

  window.addEventListener('resize',() => {
    width =  window.innerWidth*0.35;
  })

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
        <XAxis className='x' dataKey="date"  interval={interval} fontSize='14px' stroke="#7F60F3" /> 
        <YAxis tickFormatter={(value) => value.toFixed(1)} dataKey="value" domain={[days[0].value*0.7, days[0].value*1.10]} tickCount={7} interval={1}  stroke="#7F60F3" fontSize='14px' />
        <Tooltip contentStyle={{
          backgroundColor: '#f6f4f6',
          color:'#7F60F3',
          borderColor: '#7F60F3',
          }} />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="value" stroke="#7F60F3" dot={false} activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  )
}

export default DaysChart



