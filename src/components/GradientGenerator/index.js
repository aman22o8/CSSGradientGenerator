// Write your code here
import {Component} from 'react'
import {
  MainContainer,
  MainHeading,
  DescHeading,
  ButtonContainer,
  InputContainer,
  EachInputContainer,
  LabelHeading,
  InputHeading,
  ButtonContainerGenerate,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    initialColor1: '#8ae323',
    initialColor2: '#014f7b',
    activeButton: gradientDirectionsList[0].value,
    activeLinearGradient: 'to top, #8ae323, #014f7b',
  }

  setAllValue = () => {
    const {activeButton, initialColor2, initialColor1} = this.state
    this.setState({
      activeLinearGradient: `to ${activeButton}, ${initialColor1}, ${initialColor2}`,
    })
  }

  changeColor1 = event => {
    console.log(event.target.value)
    this.setState({initialColor1: event.target.value})
  }

  changeColor2 = event => {
    console.log(event.target.value)
    this.setState({initialColor2: event.target.value})
  }

  activeDirectionButton = myvalue => {
    this.setState({activeButton: myvalue})
  }

  render() {
    const {
      initialColor1,
      initialColor2,
      activeButton,
      activeLinearGradient,
    } = this.state
    console.log(activeLinearGradient)
    return (
      <div>
        <MainContainer
          data-testid="gradientGenerator"
          myActiveGradient={activeLinearGradient}
        >
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <DescHeading>Choose Direction</DescHeading>
          <ButtonContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                isActive={activeButton === each.value}
                myActiveButton={this.activeDirectionButton}
                eachItem={each}
              />
            ))}
          </ButtonContainer>

          <DescHeading>Pick the Colors</DescHeading>
          <InputContainer>
            <EachInputContainer>
              <LabelHeading>{initialColor1}</LabelHeading>
              <InputHeading
                onChange={this.changeColor1}
                value={initialColor1}
                type="color"
              />
            </EachInputContainer>

            <EachInputContainer>
              <LabelHeading>{initialColor2}</LabelHeading>
              <InputHeading
                onChange={this.changeColor2}
                value={initialColor2}
                type="color"
              />
            </EachInputContainer>
          </InputContainer>
          <ButtonContainerGenerate onClick={this.setAllValue} type="button">
            Generate
          </ButtonContainerGenerate>
        </MainContainer>
      </div>
    )
  }
}

export default GradientGenerator
