import {BiUser, BiQrScan, BiListUl} from 'react-icons/bi'
import {AiFillSetting} from 'react-icons/ai'
import {FaStore, FaHistory} from 'react-icons/fa'
import {MdSpaceDashboard, MdOutlineComputer} from 'react-icons/md'

export const NavData = [
    {
        "name": "identitas",
        "icon": BiUser,
        "desc": "Merchant Profile"
    },
    {
        "name": "report",
        "icon": BiQrScan,
        "desc": "Report QRIS"
    },
    // {
    //     "name": "setting",
    //     "icon": AiFillSetting,
    //     "desc": "Setting Transaction"
    // },
    {
        "name": "approval",
        "icon": BiListUl,
        "desc": "Approval List"
    },
    {
        "name": "store",
        "icon": FaStore,
        "desc": "Store List"
    },
    {
        "name": "cashier",
        "icon": MdOutlineComputer,
        "desc": "Cashier List"
    },
    {
        "name": "history",
        "icon": FaHistory,
        "desc": "History"
    },
    {
        "name": "user",
        "icon": MdSpaceDashboard,
        "desc": "Users"
    },
]