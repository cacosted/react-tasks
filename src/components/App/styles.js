import styled from 'styled-components'
import { font, weight } from '../../styles/styleConfig'

export const Title = styled.h1`
text-align: center;
font-family: ${font.accent};
font-weight: ${weight.bold};
`
export const Container = styled.main`
margin-block-start: 2em;
max-width: 600px;
margin-inline: auto;
`
