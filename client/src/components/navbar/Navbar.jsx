import React from 'react'
import { StyledContainerNavbar, StyledTitleWrapper, StyledMenuWrapper, StyledSubTitleWrapper } from './styles'
import { AiFillBell } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
    return (
        <StyledContainerNavbar>
            <StyledTitleWrapper>
                <h1>Tasks</h1>
            </StyledTitleWrapper>
            <StyledSubTitleWrapper>
                <li>Dashboard</li>
            </StyledSubTitleWrapper>
            <StyledMenuWrapper>
                <li className="list-item">
                    <input type="search" placeholder="Search Task" className="search-input" />
                </li>
                <li>
                    <AiFillBell size={30} />
                </li>
                <div className="user-container">
                    <div>
                        <FaUserCircle size={30} />
                    </div>
                    <span>
                        <li><b>emmanz95</b></li>
                        <li style={{ fontSize: '12px', color: '#8F8F8F' }}>Software developer</li>
                    </span>
                </div>
            </StyledMenuWrapper>
        </StyledContainerNavbar>
    )
}

export default Navbar