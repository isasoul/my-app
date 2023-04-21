import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import  './index.css';

function ItemList(props) {
  const items = props.items.map((item, index) => (
    <li key={index}>
      <FaCheckCircle />
      {item}
    </li>
  ));

  return <ul>{items}</ul>;
}

export default ItemList;
