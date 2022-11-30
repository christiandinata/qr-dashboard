import React from 'react'
import { BiBell } from 'react-icons/bi'
import { MdArrowDropDown } from 'react-icons/md'
import { BackendContext } from '../../Context'
import { DropdownIcon, DropdownMenu, Head, HeadNav, HeadNavInfo, Menu, Name, Notification, NotificationButton, StyledTooltip, TooltipContent } from './SectionHeadElements'

function SectionHead({handleNavClick}) {
    const {logOut, setChangePasswordOverlay} = React.useContext(BackendContext);
    const innerRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const [expand, setExpand] = React.useState(false);
    
    React.useEffect(() => {
    const handleClickOutside = (event) => {
        if (innerRef.current && !innerRef.current.contains(event.target)) {
        setOpen(false);
        }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
    },[])

    function handleDashboard(){
        setExpand(false);
        handleNavClick("main");
    }

    function handleChangePassword(){
        setExpand(false);
        setChangePasswordOverlay(true)
    }

  return (
    <>
        <Head>
            <Notification ref={innerRef}>
                <StyledTooltip 
                placement="right"
                open={open}
                onClose={() => setOpen(false)}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                ref={innerRef}
                title={
                    <TooltipContent ref={innerRef}>
                        Notification
                    </TooltipContent>
                }>
                    <NotificationButton onClick={() => setOpen(true)}>
                        <BiBell size={24}/>
                    </NotificationButton>
                </StyledTooltip>
            </Notification>
            <HeadNav>
                <HeadNavInfo>
                    <Name>
                        Mr. Simas
                    </Name>
                    <DropdownIcon onClick={() => setExpand(!expand)}>
                        <MdArrowDropDown size={24}/>
                    </DropdownIcon>
                </HeadNavInfo>
                <DropdownMenu expand={expand}>
                    <Menu onClick={handleDashboard}>
                        Dashboard
                    </Menu>
                    <Menu onClick={handleChangePassword}>
                        Change Password
                    </Menu>
                    <Menu onClick={logOut}>
                        Logout
                    </Menu>
                </DropdownMenu>
            </HeadNav>
        </Head>
      </>
  )
}

export default SectionHead
