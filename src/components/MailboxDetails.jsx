import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams()
  const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
  return (
    <div>
      <h2>Details</h2>
      {singleMailbox
        ?<div className="mail-box">
          <p>Mailbox ID: {singleMailbox._id}</p>
          <p>Boxholder: {singleMailbox.boxholder}</p>
          <p>Box Size: {singleMailbox.boxSize}</p>
        </div>
        :<h3>Mailbox Not Found!</h3>}

    </div>
  );
}

export default MailboxDetails;