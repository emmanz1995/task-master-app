import React from 'react'
import { StyledContainer } from './styles'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import moment from 'moment'
import { BsFilePlayFill } from 'react-icons/bs'

const Dashboard = () => {
    return (
        <StyledContainer>
            <Navbar />
            <div className="main-container">
                <div className="aside">
                    <Sidebar />
                </div>
                <div className="main">
                    <div className="flex-title">
                        <div>
                            <h1>Today</h1>
                            <p>{moment(new Date().toISOString()).format('dddd MM YYYY | hh:mm A')}</p>
                        </div>
                        <div className="time-tracker-card">
                            <h3>Start Time Tracker</h3> <BsFilePlayFill className="play-icon-btn" size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}

export default Dashboard;