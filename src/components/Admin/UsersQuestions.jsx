import React, { useState, useEffect, useCallback } from "react";
import QuestionList from './ShowQuestions';

export default function GetQuestion(props) {
  const [Quest, setQuest] = useState([]);

  const showQuestion = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/question/GetQuestions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data && data.getTheQuestion && data.getTheQuestion.length > 0) {
          setQuest(data.getTheQuestion);
        } else {
          console.log("No  data in the response");
        }
      } else {
        console.log("Server response is not okay");
      }
    } catch (error) {
      console.log("Error while fetching data from the server", error);
    }
  }, []);

  useEffect(() => {
    showQuestion();
  }, [showQuestion]);

  return (
    <>
      <h2>{props.headerOfArt}</h2>
      <QuestionList questions={Quest} />
    </>
  );
}
