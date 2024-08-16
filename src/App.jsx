import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import './index.css'


const App = () => {
  const [mailboxes, setMailBoxes] = useState([])

  return (
    <>
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>}/>
      <Route path='/mailboxes' element={<MailboxList />}/>
      <Route path='new-mailbox' element={<MailboxForm />}/>
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />}/>
    </Routes>

    </>
  )
};

export default App;
