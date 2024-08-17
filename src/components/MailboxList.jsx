import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  console.log(mailboxes)
  return (
    <ul>
      {mailboxes.map((mailbox) => (
      <li key={mailbox._id} className="mail-box">
        <Link to={`/mailboxes/${mailbox._id}`}>{mailbox.boxholder}</Link>
      </li>
      ))}
    </ul>
  );
}

export default MailboxList;