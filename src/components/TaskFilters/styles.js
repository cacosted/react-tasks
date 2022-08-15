import styled from 'styled-components'
import { color } from '../../styles/styleConfig'

export const TaskBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-block: 1em;
  padding-inline: 3em;
  text-align: center;
  border-bottom: 1px solid ${color.light};
`
