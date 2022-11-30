import './App.css';
import React from 'react'
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { BackendContext } from './Context';

function App() {

  const {user} = React.useContext(BackendContext);


  return (
    <>
    {user ? <Dashboard/> : <Login/>}
    </>
  );
}
export default App;
