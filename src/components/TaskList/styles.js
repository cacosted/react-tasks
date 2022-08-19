import styled from 'styled-components'
import { color } from '../../styles/styleConfig'

export const CompletedContainer = styled.div`
  padding-block: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const CompletedCard = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const DeleteIcon = styled.img`
  width: 4%;
  cursor: pointer;
`

export const DeleteAllButton = styled.button`
  width: max-content;
  cursor: pointer;
  align-self: flex-end;
  background-color: ${color.accent};
  color: ${color.white};
  border-radius: 4px;
  padding: 1em 2em;
  border: none;
`
