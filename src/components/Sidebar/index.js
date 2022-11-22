import * as React from 'react'
import { Container, Greetings, Nav, NavGroup, NavIcon, NavLink, Profile, ProfileImg, ProfileInfo } from './SidebarElements'
import {FaUserCircle} from 'react-icons/fa'
import {NavData} from './SidebarNav'

function Sidebar({handleNavClick, active, setActive}) {

  return (
    <Container>
      <Greetings>
        Welcome,
      </Greetings>
      <Profile>
        <ProfileImg>
            <FaUserCircle size={48}/>
        </ProfileImg>
        <ProfileInfo>
            <p>Mr, Simas</p>
            <p>Reset Password</p>
        </ProfileInfo>
      </Profile>
      <NavGroup>
        {NavData.map(item => (
            <Nav 
                key={item.name} 
                active={active[item.name]}
                onClick={() => handleNavClick(item.name)}
            >
                <NavIcon>
                    <item.icon size={20}/>
                </NavIcon>
                <NavLink>
                    {item.desc}
                </NavLink>
            </Nav>
        ))}
      </NavGroup>
    </Container>
  )
}

export default Sidebar
