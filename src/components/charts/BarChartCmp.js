import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarChartCmp = ({days, type}) => {
  const data=[];

  console.log('type:', type)

  if (days){
		days.forEach(
			day => {

			const date = makeDay(day.date)
      let value;

      switch (type){
        case 'exercise':
          value = day.walk;
          break;
        case 'affirm':
          value = day.affirm ? 1: 0;
          break;
        case 'water':
          value = day.water ? 1 : 0; 
          break;
      }

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
  const mq = window.matchMedia('(max-width: 768px)');
  if (mq.matches) {
    width = 300
  }

  return (
    <div className='chart-cmp justify-content-center mt-5'>
       <BarChart
          isAnimationActive={false}
          label={false} marker={false}
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#7F60F3" dataKey="date" fontSize='14px' />
          <YAxis stroke="#7F60F3" interval={1} tickCount={3} fontSize='14px' />
          <Tooltip contentStyle={{
          backgroundColor: '#f6f4f6',
          color:'#7F60F3',
          borderColor: '#7F60F3',
          }} />
          <Bar stroke="#7F60F3" dataKey="value" fill="#8884d8" label={false} marker={false} isAnimationActive={false} />
        </BarChart>
  </div>
  )
}

export default BarChartCmp


