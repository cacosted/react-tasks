import styled from 'styled-components'
import { color, font, shadow, weight } from '../../styles/styleConfig'

export const StyledTaskBar = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  margin-block: 1em;
`
export const TaskInput = styled.input`
  padding: 1.2em 1em;
  width: 80%;
  border: none;
  font-weight: ${weight.light};
  outline: 1px solid ${color.light};
  border-radius: 12px;
`
export const TaskButton = styled.button`
  padding: 1.2em .5em;
  width: 15%;
  border: none;
  background-color: ${color.main};
  color: ${color.white};
  font-weight: ${font.semiBold};
  box-shadow: ${shadow.regular};
  border-radius: 12px;
`
