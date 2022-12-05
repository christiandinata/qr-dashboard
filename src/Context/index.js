import React from 'react'
import axios from 'axios'

export const BackendContext = React.createContext();

export const BackendProvider = ({children}) => {

    const [user, setUser] = React.useState("");
    const [changePasswordOverlay, setChangePasswordOverlay] = React.useState(false);
    const [merchantInfo, setMerchantInfo] = React.useState();
    const [storeData, setStoreData] = React.useState();
    const [cashierData, setCashierData] = React.useState();
    const [randomNum, setRandomNum] = React.useState(0);
    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com"
    const userUrl = "https://qr-merchant-dashboard-integration-dev.devs.banksinarmas.com"

    function logIn(payload) {
        // let url = `${userUrl}/user/login`
        // axios.post(url, payload)
        // .then(res => {
        //     console.log(res)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        setUser("superadmin")
      }
    
      function logOut() {
        setUser("");
      }

    const fetchMerchant = () => {
        let url = `${mainUrl}/qrmd/getMerchant`
        let payload = {
            merchant_id: "002000000000946",
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

    const fetchStore = () => {
        let url = `${mainUrl}/qrmd/getStoreList`
        let payload = {
            merchant_id: "002000000000946",
            order: "asc",
            start: 1,
            count: 99,
            lang: "id"
        }
        
        axios.post(url, payload)
        .then(res => {
            setStoreData(res.data.result)
        })
        .catch(err => {
            console.log(err);
        })

        console.log("fetchStore")
    }

    const fetchCashier = () => {
        let url = `${mainUrl}/qrmd/getCashierList`;
        let payload = {
            merchant_id: "002000000000946",
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
    
    React.useEffect(() => {
        fetchMerchant();
        fetchStore();
        fetchCashier();
    }, [])
    
    return (
        <BackendContext.Provider 
            value={{
                user, 
                logIn, 
                logOut, 
                changePasswordOverlay,
                setChangePasswordOverlay,
                merchantInfo,
                fetchStore,
                fetchCashier,
                storeData, 
                cashierData,
                randomNum,
                setRandomNum
                }}
        >
            {children}
        </BackendContext.Provider>
    )
}

