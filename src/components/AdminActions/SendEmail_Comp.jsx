/// ייבואים

import React, { useState } from "react";
import axios from "axios";

const SMSForm = () => {
  /// סטייטים

  const [EmailSent, setEmailSent] = useState(false);

  ///פונקציות

  const sendSMS = async () => {
    try {
      await axios.post("http://localhost:3003/forms/send-email", {
        toEmail: "yaffa1120@gmail.com",
        messageBody: "Hello, this is a test message!",
      });
      setEmailSent(true);
    } catch (error) {
      console.error("Error sending SMS:", error);
    }
  };

  /// רינדור הקומפוננטה

  return (
    <div>
      <h1>Hello</h1>
      {EmailSent ? (
        <p> Email sent successfully!</p>
      ) : (
        <button onClick={sendSMS}>Send Email!</button>
      )}
    </div>
  );
};

export default SMSForm;
