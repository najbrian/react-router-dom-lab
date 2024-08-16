import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  boxSize: '',
  boxholder: '',
}

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState)

  const navigate = useNavigate()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.addMailbox(formData)
    setFormData(initialState)
    navigate('/mailboxes')

  }

  const handleChange = (evt) => {
    console.log(evt)
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  return (
    <form className="mail-box" onSubmit={handleSubmit}>
      <label htmlFor="boxholder">Enter a Boxholder:</label>
      <input id="boxholder" name="boxholder" type="text" value={formData.boxholder} onChange={handleChange} required />
      <label htmlFor="boxsize" onChange={handleChange}>Select a Box Size:</label>
      <select id="boxsize" name="boxSize" value={formData.boxSize} onChange={handleChange}>
        <option>Select An Option...</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Submit</button>
    </form>

  );
}

export default MailboxForm;