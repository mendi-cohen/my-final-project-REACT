import React, { useState } from "react";

const WhatsApp = () => {
  const [EmailSent, setEmailSent] = useState(false);

  const SaveT = async () => {
    try {
     
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/whatsapp/send-whatsApp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "hello world!" }),
      });

      if (response.ok) {
        setEmailSent(true);
      } else {
        
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      {EmailSent ? (
        <p>WhatsApp sent successfully!</p>
      ) : (
        <button onClick={SaveT}>Send WhatsApp!</button>
      )}
    </div>
  );
};

export default WhatsApp;
