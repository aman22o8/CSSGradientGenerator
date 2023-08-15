// Style your elements here
import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  background-image: linear-gradient(${props => props.myActiveGradient});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const MainHeading = styled.h1`
  font-size: 45px;
  font-weight: 600;
  color: #ffffff;
  @media screen and (max-width: 576px) {
    font-size: 25px;
    text-align: center;
  }
`
export const DescHeading = styled.p`
  font-size: 25px;
  color: #ffffff;
`
export const ButtonContainer = styled.ul`
  display: flex;
  //   margin-left: 0px;
  //   padding-left: 0px;
  list-style-type: none;
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
  }
`

export const InputContainer = styled.div`

        display: flex;
align-items center;
`
export const EachInputContainer = styled(InputContainer)`
  flex-direction: column;
  margin: 10px 15px;
`

export const LabelHeading = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
`
export const InputHeading = styled.input`
  height: 35px;
  width: 100px;
  border: 0px none;
  outline: none;
  background-color: transparent;
`

export const ButtonContainerGenerate = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-size: 15px;
  font-weight: 300;
  height: 35px;
  width: 120px;
  text-align: center;
  border: 0px none;
  border-radius: 5px;
  cursor: pointer;
`
