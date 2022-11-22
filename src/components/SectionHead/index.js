import React from 'react'
import { BiBell } from 'react-icons/bi'
import { MdArrowDropDown } from 'react-icons/md'
import { DropdownIcon, DropdownMenu, Head, HeadNav, HeadNavInfo, Menu, Name, Notification, NotificationButton, StyledTooltip, TooltipContent } from './SectionHeadElements'

function SectionHead({handleNavClick}) {
    const ref = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const [expand, setExpand] = React.useState(false);
    
    React.useEffect(() => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
        }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
    },[])

    function handleMenu(){
    setExpand(false);
    handleNavClick("main");
    }

  return (
    <>
        <Head>
            <Notification ref={ref}>
                <StyledTooltip 
                placement="right"
                open={open}
                onClose={() => setOpen(false)}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                ref={ref}
                title={
                    <TooltipContent ref={ref}>
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
                    <Menu onClick={handleMenu}>
                        Dashboard
                    </Menu>
                    <Menu>
                        Logout
                    </Menu>
                </DropdownMenu>
            </HeadNav>
        </Head>
      </>
  )
}

export default SectionHead
