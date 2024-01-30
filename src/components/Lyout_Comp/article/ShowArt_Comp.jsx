import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";


function ArticleCard({ article }) {
  const [showContent, setShowContent] = useState(false);

  const cardAnimation = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: showContent ? "auto" : 0,
      opacity: showContent ? 1 : 0,
      backgroundColor: showContent ?  'white' : '#f0f0f0', 
    },
  });

  function parseHTMLString(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const paragraphs = doc.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
      const underlinedTexts = paragraph.querySelectorAll('u');
      underlinedTexts.forEach(underlinedText => {
        underlinedText.style.textDecoration = 'underline';
      });
    });

    return doc.body.innerHTML || "";
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
        {article?.date && (
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            תאריך עליית המאמר: {new Date(article.date).toLocaleDateString("en-GB")}
          </Typography>
        )}
        <Typography variant="h5" component="div">
          {article.second_title}
        </Typography>
      </CardContent>
      <animated.div style={cardAnimation}>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: parseHTMLString(article.art_value) }} />
        </CardContent>
      </animated.div>
    </Card>
  );
}

export default function ArticleList({ articles }) {
  return (
    <div style={{ direction: 'rtl' }}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
