import styled from 'styled-components'

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  .main-container {
    display: flex;
  }
  .aside {
    width: 15%;
    padding: 10px;
    height: 100vh;
    border-right: 1px solid #ddd;
  }
  .main {
    width: 85%;
    padding: 20px 50px;
    height: 100vh;
    background-color: #F9F9F9;
  }
  .flex-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .time-tracker-card {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .play-icon-btn {
    cursor: pointer;
  }
`

export {
  StyledContainer
}