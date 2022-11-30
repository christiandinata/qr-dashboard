import React from 'react'
import axios from 'axios'

export const BackendContext = React.createContext();

export const BackendProvider = ({children}) => {

    const [user, setUser] = React.useState("");
    const [merchantInfo, setMerchantInfo] = React.useState()
    const [storeData, setStoreData] = React.useState()
    const [cashierData, setCashierData] = React.useState();
    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com"

    function logIn() {
        setUser("superdmin")
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
            count: 5,
            lang: "id"
        }

        axios.post(url, payload)
        .then(res => {
            setStoreData(res.data.result)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const fetchCashier = () => {
        let url = `${mainUrl}/qrmd/getCashierList`;
        let payload = {
            merchant_id: "002000000000946",
            pan: "9360015302018539983",
            order: "asc",
            start: 1,
            count: 5,
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

    const testEventListener = () => {
        console.log("event listened");
    }

    React.useEffect(() => {
        fetchMerchant();
        fetchStore();
        fetchCashier();

        window.addEventListener("testEvent", testEventListener);
    }, [])
    
    console.log(storeData);

    return (
        <BackendContext.Provider value={{user, logIn, logOut, merchantInfo, storeData, cashierData}}>
            {children}
        </BackendContext.Provider>
    )
}

