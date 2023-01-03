import React from 'react';
import DaysChart from './charts/DaysChart';
import BarChartCmp from './charts/BarChartCmp';
import { Carousel } from 'react-bootstrap';

const GraphCarousel = ({days}) => {
  return (
    <Carousel   interval={null} className='graph-carousel-cmp container'>

      <Carousel.Item  className='pb-5'>
        <DaysChart days={days} type={'weight'}/>
        <Carousel.Caption>
          <h5>Weight Loss Graph</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='pb-5'>
        <BarChartCmp days={days} type={'water'}/>
        <Carousel.Caption>
          <h5>Water Goal Bar</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item  className='pb-5'>
        <BarChartCmp days={days} type={"exercise"}/>
        <Carousel.Caption>
          <h5>Exercise Time Graph</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='pb-5'>
        <BarChartCmp days={days} type={"affirm"}/>
        <Carousel.Caption>
          <h5>Affirmation Goal Bar</h5>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}

export default GraphCarousel;