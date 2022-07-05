import styled from 'styled-components'

const StyledContainerNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  border-bottom: 1px solid #ddd;
`
const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledSubTitleWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`

const StyledMenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 45%;
  .search-input {
    padding: 7px;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .user-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`

export {
  StyledContainerNavbar,
  StyledTitleWrapper,
  StyledSubTitleWrapper,
  StyledMenuWrapper
}