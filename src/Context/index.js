import React from 'react'
import axios from 'axios'

export const BackendContext = React.createContext();

export const BackendProvider = ({children}) => {

    const [user, setUser] = React.useState();
    const [loginErrorMessage, setLoginErrorMessage] = React.useState()
    const [changePasswordOverlay, setChangePasswordOverlay] = React.useState(false);
    const [merchantInfo, setMerchantInfo] = React.useState();
    const [pendingData, setPendingData] = React.useState();
    const [approvedData, setApprovedData] = React.useState();
    const [rejectedData, setRejectedData] = React.useState()
    const [storeData, setStoreData] = React.useState();
    const [cashierData, setCashierData] = React.useState();
    const [historyData, setHistoryData] = React.useState()
    const [usersData, setUsersData] = React.useState()
    const [randomNum, setRandomNum] = React.useState(0);
    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com"
    const userUrl = "http://qr-merchant-dashboard-integration-dev.devs.banksinarmas.com"

    function logIn(payload) {
        let url = `${userUrl}/user/login`
        axios.post(url, payload)
        .then(res => {
            console.log(res)
            if (res.data?.response_code === "00"){
                setLoginErrorMessage(null)
                setUser(res.data.result)
                window.localStorage.setItem('user', JSON.stringify(res.data?.result));
            }else{
                setLoginErrorMessage(res.data?.response_message)
            }
        })
        .catch(err => {
            console.log(err)
        })
        // setUser("superadmin")
    }

    React.useEffect(() => {
        setUser(JSON.parse(window.localStorage.getItem('user')) || null)
    }, [])
    
    function logOut() {
        window.localStorage.removeItem('user');
        setUser(JSON.parse(window.localStorage.getItem('user')) || null)
    }

    console.log(user)

    const fetchMerchant = (id) => {
        let url = `${mainUrl}/qrmd/getMerchant`
        let payload = {
            merchant_id: id,
            lang: "id"
        }

        axios.post(url, payload)
        .then(res => {
            setMerchantInfo(res.data.result)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const fetchTable = (id, status) => {
        let url = `${userUrl}/approval/getAll`
        let payload = {
            merchant_id: id,
            status: status
        }

        axios.post(url, payload)
        .then(res => {
            console.log(res)
            if (status === 'pending'){
                setPendingData(res.data.result);
            } else if (status === 'approved'){
                setApprovedData(res.data.result);
            } else { // status === 'rejected
                setRejectedData(res.data.result);
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const fetchStore = (id, order, start, count) => {
        let url = `${mainUrl}/qrmd/getStoreList`
        let payload = {
            merchant_id: id,
            order: order,
            start: start,
            count: count,
            lang: "id"
        }
        
        axios.post(url, payload)
        .then(res => {
            setStoreData(res.data.result)
        })
        .catch(err => {
            console.log(err.response?.data);
        })

        console.log("fetchStore")
    }

    const fetchCashier = (id) => {
        let url = `${mainUrl}/qrmd/getCashierList`;
        let payload = {
            merchant_id: id,
            pan: "9360015302018539983",
            order: "asc",
            start: 1,
            count: 99,
            lang: "id"
        }

        axios.post(url, payload)
        .then(res => {
            setCashierData(res.data.result)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const fetchHistory = (id) => {
        let url = `${userUrl}/history/getAll`;
        let payload = {
            merchant_id: id, // user.merchant_id
        }

        axios.post(url, payload)
        .then(res => {
            setHistoryData(res.data.result)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const fetchUsers = (id) => {
        let url = `${userUrl}/users/getAll`;
        let payload = {
            merchant_id: id, // user.merchant_id
        }

        axios.post(url, payload)
        .then(res => {
            setUsersData(res.data.result)
        })
        .catch(err => {
            console.log(err);
        })
    }

    // React.useEffect(() => {
    //     fetchHistory(user?.merchant_id);
    // }, [user])
    
    // React.useEffect(() => {
    //     // fetchMerchant("002000000000946");
    //     // fetchStore();
    //     // fetchCashier();
    //     fetchHistory(user?.merchant_id);
    //     // fetchUsers(user?.merchant_id);
    // }, [])
    
    return (
        <BackendContext.Provider 
            value={{
                user, 
                loginErrorMessage,
                setUser,
                logIn, 
                logOut, 
                changePasswordOverlay,
                setChangePasswordOverlay,
                merchantInfo,
                fetchMerchant,
                fetchTable,
                fetchStore,
                fetchCashier,
                fetchHistory,
                fetchUsers,
                pendingData,
                approvedData,
                rejectedData,
                storeData, 
                cashierData,
                historyData,
                usersData,
                randomNum,
                setRandomNum
                }}
        >
            {children}
        </BackendContext.Provider>
    )
}

