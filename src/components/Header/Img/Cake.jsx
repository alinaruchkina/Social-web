import React from 'react';
import styles from './Cake.module.css';

function Cake(props) {
  const array = ['y890', '055504', 340540, 405054];

  return (
    <div>
      {array.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
export default Cake;
