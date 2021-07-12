import styled from 'styled-components'

export const AddItemIcon = (props) => {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#55DBCB">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
    </Svg>
  )
}


export const IncQuantityIcon = (props) => {
    return (
      <Svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#55DBCB">
        <rect fill="none" height="24" width="24"/>
        <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/>
      </Svg>
    )
  }
  
export const DecQuantityIcon = (props) => {
    return (
      <Svg {...props} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#EF767A"><path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19 13H5v-2h14v2z"/>
      </Svg>
    )
  }

const Svg = styled.svg`
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
  margin-top: ${props => props.marginTop ? props.marginTop : 0};
`