import React, { useState } from "react";

const SMSForm = () => {
  const [EmailSent, setEmailSent] = useState(false);

  const SaveT = async () => {
    try {
      const title = "Save";
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/whatsapp/send-whatsApp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: title }),
      });

      if (response.ok) {
        setEmailSent(true);
      } else {
        // Handle error
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      {EmailSent ? (
        <p>Email sent successfully!</p>
      ) : (
        <button onClick={SaveT}>Send Em!</button>
      )}
    </div>
  );
};

export default SMSForm;
