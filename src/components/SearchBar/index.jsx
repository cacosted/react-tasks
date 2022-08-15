import { SearchInput, SearchButton, StyledSearchBar } from './styles'

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SearchInput type='text' placeholder='add details' />
      <SearchButton>Add</SearchButton>
    </StyledSearchBar>
  )
}
