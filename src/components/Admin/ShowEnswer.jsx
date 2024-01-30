import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";
import DOMPurify from 'dompurify';

function QuestionCard({ question }) {
  const [showContent, setShowContent] = useState(false);

  const cardAnimation = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: showContent ? "auto" : 0,
      opacity: showContent ? 1 : 0,
      backgroundColor: showContent ? 'white' : '#f0f0f0',
    },
  });

  function parseHTMLString(htmlString) {
    const sanitizedHTML = DOMPurify.sanitize(htmlString);
    return { __html: sanitizedHTML };
  }

  return (
    <Card
      style={{
        cursor: 'pointer',
        position: 'relative',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        width: '80%',
        backgroundColor: '#f0f0f0',
        margin: '1% auto',
      }}
      onClick={() => setShowContent(!showContent)}
    >
      <CardContent>
        {question?.date && (
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            תאריך עליית השאלה: {new Date(question.date).toLocaleDateString("en-GB")}
          </Typography>
        )}
        <Typography variant="h5" component="div">
          {question.title}
        </Typography>
      </CardContent>
      <animated.div style={cardAnimation}>
        <CardContent>
          <div dangerouslySetInnerHTML={parseHTMLString(question.Question_value)} />
        </CardContent>
      </animated.div>
    </Card>
  );
}

export default function QuestionList({ questions }) {
  return (
    <div style={{ direction: 'rtl' }}>
      {questions && questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}
