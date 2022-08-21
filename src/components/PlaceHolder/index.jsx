import womanImage from '../../assets/holder.svg'
import { StyledHolder, ImageHolder } from './styles'

export const PlaceHolder = () => {
  return (
    <StyledHolder>
      <ImageHolder src={womanImage} alt='woman talking on the phone and writting' />
      <p>You don't have any task yet, create your first one!</p>
    </StyledHolder>
  )
}
