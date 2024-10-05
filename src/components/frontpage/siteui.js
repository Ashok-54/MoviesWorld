import React from 'react';
import { Card } from 'antd';
import "./site.css"
const { Meta } = Card;
const App11 = (props) => (
  <div className='gf'>

  <Card
    hoverable
    style={{
      width: 230,
    }}
    cover={<img alt="example" src={props.image}  />}
  >
    <div className='d-flex uk'>
  <i class="fa-solid fa-heart text-danger mt-1 font-size: xx-large;"></i>&nbsp;
  <p className='text-white'>85%</p>
  </div>
    <Meta title={props.title}></Meta>
    <p>{props.name}</p>
    <p>U/A . English</p>
    
  </Card>
  </div>
);
export default App11;