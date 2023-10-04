import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import LoginPage from './components/LoginPage/LoginPage'
import { LandingPage } from './components/LandingPage/LandingPage'
import LivePage from './components/LivePage/LivePage'
import { BlogPage } from './components/BlogPages/BlogPage'
import ProfileCard from './components/ProfileCard/ProfileCard'
import LiveSessions from './components/LivePage/LiveSessions'
import Translation from './components/Translator/Translator'


const App = () => {
  return (
    <div className='app'>
       <Routes>
        <Route path='/' element= {<LandingPage/>}/> 
        <Route path='/sign-up' element= {<RegistrationPage/>}/>
        <Route path='/log-in' element={<LoginPage/>}/>
        <Route path='/home' element={<Home text/>} />
        <Route path='/live' element={<LiveSessions/>}/>
        <Route path='/admin' element={<BlogPage/>}/>
        <Route path='/profile' element={<ProfileCard/>}/>
        <Route path='/go-live' element={<LivePage/>}/>
        <Route path='/translate' element={<Translation/>}/>
       </Routes>
    </div>
  )
}

export default App