import React from 'react'
import Item from './Item'
import {Container, Button, Card, Row, Col} from 'react-bootstrap'


const ItemList = ({items}) => {

  return (
    <Container>
      {items.map(item=>{
        return(
            <Item
              key={item.id}
              item={item}
            />
        )
      }
      )}

    </Container>  
  )
}

export default ItemList
