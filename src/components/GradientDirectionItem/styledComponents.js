// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 10px;
`

export const ButtonDirection = styled.button`
  background-color: #ffffff;
  color: #1e293b;
  font-size: 15px;
  font-weight: 600;
  height: 30px;
  width: 90px;
  text-align: center;
  border: 0px none;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${props => (props.myactive ? 1 : 0.5)};
`
