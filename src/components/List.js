import { useState } from 'react'
import styled from 'styled-components'
import { DecQuantityIcon, IncQuantityIcon } from './Icons'

const List = ({ items, removeItem }) => {
  return (
    <ListContainer>
      <ListHeader>
        <Title>Inventory:</Title>
      </ListHeader>
      {items.map(item => <Item key={item.name} removeItem={removeItem} item={item} />)}
    </ListContainer>
  )
}

const Item = ({ item, removeItem }) => {
    const [quantity, setQuantity] = useState(item.quantity)
    
    const increaseQuantity = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/items/inc?name=${item.name}`, {
          method: 'PATCH',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'omit',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        if (response.status === 200) {
          setQuantity((parseInt(quantity)+1).toString())
        }
        
      } catch(err) {
        console.log(err)
      }
    }
  
    const decreaseQuantity = async () => {
      try {
        if (parseInt(quantity) === 1) {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/items?name=${item.name}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          if (response.status === 200) {
            removeItem(item.name)
          }        
        } else {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/items/dec?name=${item.name}`, {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          if (response.status === 200) {
            setQuantity((parseInt(quantity)-1).toString())
          }
        }
  
      } catch(err) {
        console.log(err)
      }
    }

    // const changeQuantity = async (newQuantityString) => {
    //   try {
    //     const newQuantity = parseInt(newQuantityString)
    //     if (newQuantity < 0) {
    //       return
    //     }
    //     if (newQuantity === 0) {
    //       const response = await fetch(`${process.env.REACT_APP_API_URL}/items?name=${item.name}`, {
    //         method: 'DELETE',
    //         mode: 'cors',
    //         cache: 'no-cache',
    //         credentials: 'omit',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //       })
    //       if (response.status === 200) {
    //         removeItem(item.name)
    //       }    
    //     }
    //     if (newQuantity > 0) {
    //       const data = {
    //         quantity: newQuantity
    //       }
    //       const response = await fetch(`${process.env.REACT_APP_API_URL}/items?name=${item.name}`, {
    //         method: 'PATCH',
    //         mode: 'cors',
    //         cache: 'no-cache',
    //         credentials: 'omit',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //       })
    //       if (response.status === 200) {
    //         setQuantity(newQuantityString)
    //       }
    //     }
    //   } catch (err) {
    //     console.log(err)
    //   }

    // }
    return (
      <ListRow>
        <ListLabel>{item.name}</ListLabel>
        <ListItem>
          <DecQuantityIcon onClick={decreaseQuantity}/>
          <QuantityInput width={'50px'} value={quantity} readOnly/>
          <IncQuantityIcon onClick={increaseQuantity}/>
        </ListItem>
      </ListRow>
  )
  }
  const ListContainer = styled.ul`
    width: 100%;
  `

  const ListHeader = styled.div`
  
  `

  const Title = styled.h3`

  `
  
  const ListRow = styled.li`
    padding-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  `

  const ListLabel = styled.p`
    width: 100px;
  `
  
  const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 150px;
  `
  
  const QuantityInput = styled.input`
    width: ${props => props.width || '100%'};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    border: 1px solid #55DBCB4A;
    border-radius: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
    margin-left: 10px;
    margin-right: 10px;
    `
    
export default List