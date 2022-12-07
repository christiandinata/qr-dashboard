import React from 'react'
import { BackendContext } from '../../Context'
import styled from '@emotion/styled'
import { Button, ButtonGroup } from '../UserDashboard/SetInactiveModal';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { COLORS } from '../../constants/colors';
import axios from 'axios';

function ChangePassword() {

    const {merchantInfo, user, changePasswordOverlay, setChangePasswordOverlay} = React.useContext(BackendContext);
    const userUrl = "http://qr-merchant-dashboard-integration-dev.devs.banksinarmas.com"

    const [pass, setPass] = React.useState({
        curr: "",
        new: "",
        confirm: ""
    });
    const [matchError, setMatchError] = React.useState(false)

    React.useEffect(() => {
        if (pass.new !== pass.confirm){
            setMatchError(true);
        }else{
            setMatchError(false);
        }
    }, [pass.confirm])
    

    let payload = {
        merchant_id: merchantInfo?.merchant_id,
        username: user?.username,
        password: pass.curr,
        new_password: pass.new,
    }
    
    const [visible, setVisible] = React.useState({
        curr: false,
        new: false,
        confirm: false
    })

    function handleChange(e){
        const {name, value} = e.target;
        setPass({...pass, [name]: value})
    }

    function handleVisible(name){
        if (visible[name] === true){
            setVisible({...visible, [name]: false});
        }else{
            setVisible({...visible, [name]: true});
        }
    }

    function handleFormCancel () {
        setPass({
            ...pass,
            curr: "",
            new: "",
            confirm: ""
        });
        setChangePasswordOverlay(false)
    }

    function handleSubmit(e){
        e.preventDefault();
        let url = `${userUrl}/user/changePassword`

        if (pass.new !== pass.confirm){
            alert("new password and confirm password don't match")
        }else{
            axios.post(url, payload)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

            setChangePasswordOverlay(false);
        }
    
        
    }

    console.log(payload)

  return (
    <Container changePasswordOverlay={changePasswordOverlay}>
        <Title>
            Change Password
        </Title>
        <FormContainer>
            <FormGroup>
                <FormLabel for="curr_password">
                    Current Password
                </FormLabel>
                <FormGroupInner>
                    <FormInput id="curr_password" name="curr" type={visible.curr ? "text" : "password"} value={pass.curr} onChange={handleChange}/>
                    <EyeIcon onClick={() => handleVisible("curr")}>
                        {visible.curr ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </EyeIcon>
                </FormGroupInner>
            </FormGroup>
            <FormGroup>
                <FormLabel for="new_password">
                    New Password
                </FormLabel>
                <FormGroupInner>
                    <FormInput id="new_password" name="new" type={visible.new ? "text" : "password"} value={pass.new} onChange={handleChange}/>
                    <EyeIcon onClick={() => handleVisible("new")}>
                        {visible.new ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </EyeIcon>
                </FormGroupInner>
            </FormGroup>
            <FormGroup>
                <FormLabel for="confirm_password">
                    Confirm Password
                </FormLabel>
                <FormGroupInner>
                    <FormInput id="confirm_password" name="confirm" type={visible.confirm ? "text" : "password"} value={pass.confirm} onChange={handleChange}/>
                    <EyeIcon onClick={() => handleVisible("confirm")}>
                        {visible.confirm ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </EyeIcon>
                </FormGroupInner>
            </FormGroup>
            {matchError && <ErrorMsg>Password doesn't match</ErrorMsg>}
        </FormContainer>
        <ButtonGroup>
            <Button onClick={handleFormCancel}>
                Cancel
            </Button>
            <Button onClick={handleSubmit}>
                Ok
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default ChangePassword

const Container = styled.div`
    display: ${({changePasswordOverlay}) => changePasswordOverlay ? "flex" : "none"};
    flex-direction: column;
    z-index: 3;
    position: absolute;
    place-self: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    width: 300px;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid grey;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 0.5rem;
`

const ErrorMsg = styled.div`
    color: red;
    font-size: 0.75rem;
`

const FormLabel = styled.label`
    display: flex;
    color: #5e5e5e;
    font-size: 0.8rem;
`

const FormGroupInner = styled.div`
  display: flex;
  width: 100%;
`

const FormInput = styled.input`
    display: flex;
    flex: 1;
    outline: none;
    width: 100%;
    // border: 1px solid #5e5e5e;
    border-top: 2px solid ${COLORS.darkerbackground};
    border-bottom: 2px solid ${COLORS.darkerbackground};
    border-left: 2px solid ${COLORS.darkerbackground};
    border-right: none;
    border-radius: 4px 0 0 4px;
    padding: 0.25rem 0.5rem;

    &:focus{
        border: 2px solid #5e5e5e;
    }
`

const EyeIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: ${COLORS.darkerbackground};
    cursor: pointer;
    border-radius: 0 4px 4px 0;
    border-top: 2px solid ${COLORS.darkerbackground};
    border-bottom: 2px solid ${COLORS.darkerbackground};
    border-right: 2px solid ${COLORS.darkerbackground};
    border-left: none;
    transition: 0.3s all;

    &:hover{
        background-color: #f7f7f7;
    }
`