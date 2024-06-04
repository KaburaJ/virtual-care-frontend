import React, { useState } from 'react';
import './LiveSessions.css'; // Import your CSS file for styling
import Navbar from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const LiveSessions = () => {
  const [IsLiveHeaderItemClicked, setIsLiveHeaderItemClicked] = useState('available')

  const handleLiveHeaderItemClicked = (item) => {
    setIsLiveHeaderItemClicked(item)
  }

  const AvailableSessionsData = [
    {
      id: 1,
      title: 'Session 101',
      date: 'September 20, 2023',
      time: '10:00 AM - 11:30 AM',
      location: 'Virtual',
    },
    // {
    //   id: 2,
    //   title: 'Session 102',
    //   date: 'September 25, 2023',
    //   time: '3:00 PM - 4:30 PM',
    //   location: 'Online',
    // },
    // {
    //     id: 3,
    //     title: 'Session 103',
    //     date: 'September 20, 2023',
    //     time: '10:00 AM - 11:30 AM',
    //     location: 'Virtual',
    //   },

  ];

  const liveSessionsData = [
    {
      id: 1,
      title: 'Session 1',
      date: 'September 20, 2023',
      time: '10:00 AM - 11:30 AM',
      location: 'Virtual',
    },
    // {
    //   id: 2,
    //   title: 'Session 2',
    //   date: 'September 25, 2023',
    //   time: '3:00 PM - 4:30 PM',
    //   location: 'Online',
    // },
    // {
    //     id: 3,
    //     title: 'Session 1',
    //     date: 'September 20, 2023',
    //     time: '10:00 AM - 11:30 AM',
    //     location: 'Virtual',
    //   },
    //   {
    //     id: 4,
    //     title: 'Session 2',
    //     date: 'September 25, 2023',
    //     time: '3:00 PM - 4:30 PM',
    //     location: 'Online',
    //   },
    //   {
    //     id: 5,
    //     title: 'Session 1',
    //     date: 'September 20, 2023',
    //     time: '10:00 AM - 11:30 AM',
    //     location: 'Virtual',
    //   },
    //   {
    //     id: 6,
    //     title: 'Session 2',
    //     date: 'September 25, 2023',
    //     time: '3:00 PM - 4:30 PM',
    //     location: 'Online',
    //   },
    //   {
    //     id: 7,
    //     title: 'Session 1',
    //     date: 'September 20, 2023',
    //     time: '10:00 AM - 11:30 AM',
    //     location: 'Virtual',
    //   },
    //   {
    //     id: 8,
    //     title: 'Session 2',
    //     date: 'September 25, 2023',
    //     time: '3:00 PM - 4:30 PM',
    //     location: 'Online',
    //   },
    //   {
    //     id: 9,
    //     title: 'Session 1',
    //     date: 'September 20, 2023',
    //     time: '10:00 AM - 11:30 AM',
    //     location: 'Virtual',
    //   }
  ];

  return (
    <>
      <Navbar />
      <div className='livesessions-body'>
        <div className='livesessions-header' style={{marginTop:"1em"}}>
            <h3 className={`liveheader-component ${IsLiveHeaderItemClicked === 'available' ? 'active' : ''}`} onClick={()=> handleLiveHeaderItemClicked('available')}>Available Sessions</h3>
            <h3 className={`liveheader-component ${IsLiveHeaderItemClicked === 'recorded' ? 'active' : ''}`} onClick={()=> handleLiveHeaderItemClicked('recorded')}>Available Recordings</h3>
        </div>
        <div className='live-sessions-container' style={{ marginTop: "1em" }}>
          {IsLiveHeaderItemClicked && IsLiveHeaderItemClicked === 'available' ? (
            <div className='session-list'>
              {liveSessionsData.map((session) => (
                <div key={session.id} className='session-card'>
                  <h2>{session.title}</h2>
                  {/* <p>Date: {session.date}</p>
                  <p>Time: {session.time}</p> */}
                  <p>Location: {session.location}</p>
                  <Link to='http://localhost:5030' target='_blank' rel='noopener noreferrer'><button style={{width:"260px", borderRadius:"35px", height:'60px', marginLeft:"30px"}}>Join</button></Link>
                </div>
              ))}
            </div>
          ) : null}
          {IsLiveHeaderItemClicked && IsLiveHeaderItemClicked === 'recorded' ? (
            // <div className='session-list'>
            //   {AvailableSessionsData.map((session) => (
            //     <div key={session.id} className='session-card'>
            //       <h2>{session.title}</h2>
            //       <p>Date: {session.date}</p>
            //       <p>Time: {session.time}</p>
            //       <p>Location: {session.location}</p>
            //       <button>View</button>
            //     </div>
            //   ))}
            // </div>
            <div><h1>This feature is Coming Soon</h1></div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default LiveSessions;
