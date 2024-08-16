import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import './index.css'
import NavBar from './components/NavBar';



const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (newMailBox) => {
    console.log(newMailBox)
    newMailBox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailBox])
  }
  console.log(mailboxes)

  return (
    <>
    <NavBar />
    <h1>Mailbox List</h1>
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>}/>
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
      <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>}/>
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/>
      <Route path='*' element={<h1>Whoops! This page doesn't exist</h1>}/>
    </Routes>

    </>
  )
};

export default App;
