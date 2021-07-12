import { useState } from 'react'
import styled, { css } from 'styled-components'
import { DecQuantityIcon, IncQuantityIcon } from './Icons'

const AddItem = ({ setShowAdd, setStale, ...props}) => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('1')
  
    const increaseQuantity = () => {
      setQuantity((parseInt(quantity) + 1).toString())
    }
  
    const decreaseQuantity = () => {
      if (parseInt(quantity) > 1) {
        setQuantity((parseInt(quantity) - 1).toString())
      }      
    }
  
    const addItem = async () => {
      if (name !== '' && quantity > 0) {
        const data = {
          name,
          quantity: parseInt(quantity)
        }
        const response = await fetch(`${REACT_APP_API_URL}/items`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'omit',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if (response.status === 200) {
          setStale(true)
          setName('')
          setQuantity('1')
        }
      }
    }
  
    return (
      <AddContainer {...props}>
        <DividerRow>
          <Divider/>
        </DividerRow>
        <Header>
          <Title>
            Add item:
          </Title>
        </Header>
        <AddRow>
          <AddLabel>Name:</AddLabel>
          <InputRow>
            <Input value={name} onChange={(e) => setName(e.target.value)} textAlign='start' width='150px'/>
          </InputRow>
        </AddRow>
        <AddRow>
          <AddLabel>Quantity:</AddLabel>
          <InputRow>
            <QuantityContainer>
              <DecQuantityIcon onClick={decreaseQuantity}/>
              <Input width={'50px'} value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
              <IncQuantityIcon onClick={increaseQuantity}/>
            </QuantityContainer>
          </InputRow>
        </AddRow>
        <AddRow>
          <Button backgroundColor='#EF767A' onClick={() => setShowAdd(false)}>Cancel</Button>
          <Button backgroundColor='#55DBCB' onClick={addItem}>Add</Button>
        </AddRow>
        <DividerRow>
          <Divider/>
        </DividerRow>
      </AddContainer>
    )
  }
  
  const AddContainer = styled.div`
    width: 100%;
    transition: height 0.5s ease-out;
    height: 0;
    -webkit-transition: height 0.5s ease-out;
      -moz-transition: height 0.5s ease-out;
    overflow: hidden;
    ${props => props.showAdd && css`
      height: 275px;
      transition: height 0.5s ease-out -0.1s;
      -moz-transition: height 0.5s ease-out -0.1s;
    `}
  `

  const Header = styled.div`
  
  `

  const Title = styled.h3`
  
  `
  
  const AddRow = styled.div`
    padding-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    &:first-of-type {
      margin-top: 10px;
    }
  `

  const Input = styled.input`
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
  
  const InputRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `

  const AddLabel = styled.div`
    width: 100px;
  `
  
  const QuantityContainer = styled.div`
    width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `
  

  
  const Button = styled.button`
    background-color: ${props => props.backgroundColor};
    width: 100px;
    border: none;
    font-size: 16px;
    border-radius: 16px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    &:first-of-type {
      margin-left: 0;
    }
    cursor: pointer;
    &:active {
      transform: translateY(2px);
    }
  `

  const DividerRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const Divider = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    border: 1px solid #55DBCB4A;
  `


  export default AddItem