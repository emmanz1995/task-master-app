import styled from 'styled-components'

const StyledSidebar = styled.aside`
  width: 100%;  
  .sidebar-menu {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  a {
    margin: 30px 50px;
    width: 100%;
    text-decoration: none;
    color: #000000;
  }
  button {
    margin: 0 auto;
  }
  .btn {
    width: 100%;
    padding: 10px;
    background-color: #000000;
    border-radius: 10px;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
  .btn-dashboard {
  }
`

export {
    StyledSidebar
}