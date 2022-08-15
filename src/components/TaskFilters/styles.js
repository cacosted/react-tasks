import styled, { css } from 'styled-components'
import { color, weight } from '../../styles/styleConfig'

const activeState = css`
  border-bottom: 2px solid ${color.main};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: ${color.main};
    border-radius: 4px 4px 0px 0px;
  }
`

export const TaskBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-inline: 3em;
  text-align: center;
  border-bottom: 1px solid ${color.light};
`

export const TaskTab = styled.div`
  position: relative;
  min-width: 90px;
  padding-block: 1em;
  font-weight: ${weight.semiBold};
  cursor: pointer;
  ${props => props.active === true ? activeState : ''};
`
