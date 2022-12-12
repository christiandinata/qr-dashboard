import * as React from 'react'
import { Container, Greetings, Nav, NavGroup, NavIcon, NavLink, Profile, ProfileImg, ProfileInfo } from './SidebarElements'
import {FaUserCircle} from 'react-icons/fa'
import {NavData} from './SidebarNav'
import { BackendContext } from '../../Context'

function Sidebar({handleNavClick, active, setActive}) {

  const {user, setChangePasswordOverlay} = React.useContext(BackendContext);

  function handleChangePassword(e){
    e.preventDefault();
    setChangePasswordOverlay(true)
  }

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
            <p>{user.name}</p>
            <p onClick={handleChangePassword}>Change Password</p>
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
