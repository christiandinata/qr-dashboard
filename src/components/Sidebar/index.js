import * as React from 'react'
import { Container, Greetings, Nav, NavGroup, NavIcon, NavLink, Profile, ProfileImg, ProfileInfo } from './SidebarElements'
import {FaHistory, FaStore, FaUserCircle} from 'react-icons/fa'
import {NavData} from './SidebarNav'
import { BackendContext } from '../../Context'
import { BiListUl, BiQrScan, BiUser } from 'react-icons/bi'
import { MdOutlineComputer, MdSpaceDashboard } from 'react-icons/md'

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
        {/* {NavData.map(item => (
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
        ))} */}
        {user.allowed_actions.MERCHANT_VIEW && 
          <Nav 
            active={active["identitas"]}
            onClick={() => handleNavClick("identitas")}
          >
            <NavIcon>
                <BiUser size={20}/>
            </NavIcon>
            <NavLink>
                Merchant Profile
            </NavLink>
          </Nav>
        }
        {user.allowed_actions.QRIS_REPORT_VIEW && 
          <Nav 
            active={active["report"]}
            onClick={() => handleNavClick("report")}
          >
            <NavIcon>
                <BiQrScan size={20}/>
            </NavIcon>
            <NavLink>
                Report QRIS
            </NavLink>
          </Nav>
        }
        {user.allowed_actions.APPROVAL_LIST_VIEW && 
          <Nav 
            active={active["approval"]}
            onClick={() => handleNavClick("approval")}
          >
            <NavIcon>
                <BiListUl size={20}/>
            </NavIcon>
            <NavLink>
                Approval List
            </NavLink>
          </Nav>
        }
        {user.allowed_actions.STORE_VIEW && 
          <Nav 
            active={active["store"]}
            onClick={() => handleNavClick("store")}
          >
            <NavIcon>
                <FaStore size={20}/>
            </NavIcon>
            <NavLink>
                Store List
            </NavLink>
          </Nav>
        }
        {user.allowed_actions.CASHIER_VIEW && 
          <Nav 
            active={active["cashier"]}
            onClick={() => handleNavClick("cashier")}
          >
            <NavIcon>
                <MdOutlineComputer size={20}/>
            </NavIcon>
            <NavLink>
                Cashier List
            </NavLink>
          </Nav>
        }
        {user.allowed_actions.HISTORY_VIEW && 
          <Nav 
            active={active["history"]}
            onClick={() => handleNavClick("history")}
          >
            <NavIcon>
                <FaHistory size={20}/>
            </NavIcon>
            <NavLink>
                History
            </NavLink>
          </Nav>
        }
        {user.allowed_actions.USERS_VIEW && 
          <Nav 
            active={active["user"]}
            onClick={() => handleNavClick("user")}
          >
            <NavIcon>
                <MdSpaceDashboard size={20}/>
            </NavIcon>
            <NavLink>
                Users
            </NavLink>
          </Nav>
        }
      </NavGroup>
    </Container>
  )
}

export default Sidebar
