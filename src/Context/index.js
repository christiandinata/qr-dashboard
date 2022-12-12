import React from 'react'
import axios from 'axios'

export const BackendContext = React.createContext();

export const BackendProvider = ({children}) => {

    const [user, setUser] = React.useState();
    const [changePasswordOverlay, setChangePasswordOverlay] = React.useState(false);
    const [merchantInfo, setMerchantInfo] = React.useState();
    const [storeData, setStoreData] = React.useState();
    const [cashierData, setCashierData] = React.useState();
    const [usersData, setUsersData] = React.useState()
    const [randomNum, setRandomNum] = React.useState(0);
    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com"
    const userUrl = "http://qr-merchant-dashboard-integration-dev.devs.banksinarmas.com"

    function logIn(payload) {
        // let url = `${userUrl}/user/login`
        // axios.post(url, payload)
        // .then(res => {
        //     setUser(res.data.result)
        //     window.localStorage.setItem('user', JSON.stringify(res.data.result));
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        setUser("superadmin")
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

    const fetchUsers = () => {
        let url = `${userUrl}/users/getAll`;
        let payload = {
            merchant_id: "002000000000946", // user.merchant_id
        }

        axios.post(url, payload)
        .then(res => {
            setUsersData(res.data.result)
        })
        .catch(err => {
            console.log(err);
        })
    }

    React.useEffect(() => {
        fetchMerchant(user?.merchant_id);
    }, [user])
    
    React.useEffect(() => {
        fetchStore();
        fetchCashier();
        fetchUsers();
    }, [])
    
    return (
        <BackendContext.Provider 
            value={{
                user, 
                setUser,
                logIn, 
                logOut, 
                changePasswordOverlay,
                setChangePasswordOverlay,
                merchantInfo,
                fetchMerchant,
                fetchStore,
                fetchCashier,
                fetchUsers,
                storeData, 
                cashierData,
                usersData,
                randomNum,
                setRandomNum
                }}
        >
            {children}
        </BackendContext.Provider>
    )
}

