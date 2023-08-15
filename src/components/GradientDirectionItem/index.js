// Write your code here
import {ListItem, ButtonDirection} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, isActive, myActiveButton} = props
  const {value, displayText} = eachItem
  console.log(isActive)
  const currentId = () => {
    myActiveButton(value)
  }

  return (
    <ListItem>
      <ButtonDirection myactive={isActive} onClick={currentId} type="button">
        {displayText}
      </ButtonDirection>
    </ListItem>
  )
}

export default GradientDirectionItem
