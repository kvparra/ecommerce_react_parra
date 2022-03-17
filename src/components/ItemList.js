import React from 'react'
import Item from './Item'
import {Container, Button, Card, Row, Col} from 'react-bootstrap'


const ItemList = ({items}) => {

  return (
    <section className="productos">
      {items.map(item=>{
        return(
            <Item
              key={item.id}
              item={item}
            />
        )
      }
      )}

    </section>  
  )
}

export default ItemList
