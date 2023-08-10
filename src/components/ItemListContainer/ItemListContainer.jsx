import React from 'react';
import './ItemListContainer.css';

const ItemListConteiner = (props) => {
  return (
    <div className='itemListContainer'>
      <h1>{props.greeting}</h1>
    </div>
  )

}

export default ItemListConteiner;