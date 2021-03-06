import { useEffect, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './style/global'
import AddItem from './components/AddItem'
import List from './components/List'
import { AddItemIcon } from './components/Icons'

const App = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [stale, setStale] = useState(true)
  const [search, setSearch] = useState('')

  const getItems = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/items`)
    const resJson = await response.json()
    setItems(resJson)
    setStale(false)
  }

  const removeItem = (name) => {
    setItems(items.filter(elem => elem.name !== name))
  }

  useEffect(() => {
    if (stale) {
      getItems()
    }
  })

  useEffect(() => {
    setFilteredItems(items.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())))
  }, [search, items])
  return (
    <>
      <GlobalStyle/>
      <Body>
        <Center>
          <SearchInput placeholder='Search for an item...' value={search} onChange={e => setSearch(e.target.value)}/>
          <AddItemIcon onClick={() => setShowAdd(!showAdd)} marginTop='10px'/>
          <AddItem showAdd={showAdd} setShowAdd={setShowAdd} setStale={setStale}/>
          <List removeItem={removeItem} items={filteredItems} />
        </Center>
      </Body>
    </>
  )
}

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Center = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
	@media only screen and (max-width: 400px) {
    width: 100%;
	}
`

const SearchInput = styled.input`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  border: 1px solid #55DBCB4A;
  border-radius: 8px;
`

export default App
