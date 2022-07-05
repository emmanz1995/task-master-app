import React from 'react'
import { StyledSidebar } from './styles'
import { GrAnalytics } from 'react-icons/gr'
import { RiTodoFill, RiDashboardFill } from 'react-icons/ri'
import { BiTimeFive } from 'react-icons/bi'
import { HiDocumentReport } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

const Sidebar = () => {
    return (
        <StyledSidebar>
            <div className="sidebar-menu">
                <button className="btn btn-dashboard"><RiDashboardFill />{' '}Dashboard</button>
                <a href="/"><GrAnalytics />{' '}Analytics</a>
                <a href="/"><BiTimeFive />{' '}Timesheet</a>
                <a href="/"><RiTodoFill />{' '}Todo</a>
                <a href="/"><HiDocumentReport />{' '}Report</a>
                <a href="/"><FiSettings />{' '}Settings</a>
            </div>

        </StyledSidebar>
    )
}

export default Sidebar