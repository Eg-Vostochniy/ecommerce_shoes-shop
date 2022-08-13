import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Orders } from '../components/Profile/Orders'
import { ProfileTabs } from '../components/Profile/ProfileTabs'
import avatar from '../assets/img/User_Circle.png'
import { useSelector } from 'react-redux'

export const Profile = () => {
  const [activeComponent, setActiveComponent] = useState('profileTabs')
  const user = useSelector((state) => state.auth.user)

  const dateAccountCreated = new Date(user.createdAt).toLocaleDateString()

  const handleChangeActiveNav = (activeCmpName) => {
    setActiveComponent(activeCmpName)
  }

  return (
    <div className='profile'>
      <div className='profile__main'>
        <div className='profile__main_header'>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='profile__main_body'>
          <div className='profile__body_username'>{user.name}</div>
          <div className='profile__body_account_created'>
            Joined {dateAccountCreated}
          </div>
        </div>
        <div className='profile__main_navbar'>
          <div
            className={activeComponent === 'profileTabs' ? 'active' : ''}
            onClick={() => handleChangeActiveNav('profileTabs')}
          >
            Profile Settings
          </div>
          <div
            className={activeComponent === 'orders' ? 'active' : ''}
            onClick={() => handleChangeActiveNav('orders')}
          >
            Order List
            <span>5</span>
          </div>
        </div>
      </div>
      <div className='profile__content'>
        {activeComponent === 'orders' ? <Orders /> : <ProfileTabs />}
      </div>
    </div>
  )
}
