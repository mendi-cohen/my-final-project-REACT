import React, { useState } from "react";
import { Card, CardContent, Typography, Divider, Dialog, DialogContent, Button } from "@mui/material";
import { useSpring, animated } from "react-spring";
import DOMPurify from 'dompurify';
import EnswerToUser from './EnswerToUser'; // הייבוא של הקומפוננטה של התשובה

function QuestionCard({ questionData }) {
  const [showContent, setShowContent] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

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

  const handleContentClick = (event) => {
    event.stopPropagation(); 
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

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
        marginBottom: '20px',
        padding: '20px',
      }}
      onClick={() => setShowContent(!showContent)}
    >
      <CardContent>
        {questionData?.date && (
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            תאריך עליית השאלה: {new Date(questionData.date).toLocaleDateString("en-GB")}
          </Typography>
        )}
        <Typography variant="h5" component="div">
          {questionData.title}
        </Typography>
      </CardContent>
      {showContent && <Divider />}
      <animated.div style={cardAnimation}>
        <CardContent onClick={handleContentClick} style={{ paddingTop: '20px' }}>
          <div dangerouslySetInnerHTML={parseHTMLString(questionData.Question_value)} />
        </CardContent>
      </animated.div>
      <Button onClick={handleOpenDialog} style={{ marginTop: '10px' }}>שלח תשובה</Button>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogContent>
          <EnswerToUser questionData={questionData} />
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default function QuestionList({ questions }) {
  return (
    <div style={{ direction: 'rtl' }}>
      {questions && questions.map((question) => (
        <QuestionCard key={question.id} questionData={question} />
      ))}
    </div>
  );
}
