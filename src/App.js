import React from 'react'
import "./scss/App.scss"
import SideHeader from './components/MainDashboard/SideHeader/SideHeader'
import TopHeader from './components/MainDashboard/TopHeader/TopHeader'
import { BottomHeader } from './components/MainDashboard/BottomHeader/BottomHeader'
import { MainSection } from './components/MainDashboard/MainSection/MainSection'


function App() {
    return (
        <section className='main-container'>
            <SideHeader />
            <TopHeader />
            <BottomHeader />
            <MainSection />
        </section>
    )
}

export default App