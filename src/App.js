import './App.css';
import styled from '@emotion/styled';
import {useState} from 'react'
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {

  const [user, setUser] = useState("");
  let role = "inputer";

  return (
    <>
    {user ? <Dashboard /> : <Login />}
    </>
  );
}
export default App;
