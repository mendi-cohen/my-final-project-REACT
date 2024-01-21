import React from "react";

function ArticleList({ articles }) {
  function parseHTMLString(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const paragraphs = doc.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
      const underlinedTexts = paragraph.querySelectorAll('u');
      underlinedTexts.forEach(underlinedText => {
        underlinedText.style.textDecoration = 'underline'; // הוספת קו תחתון
      });
    });

    return doc.body.innerHTML || "";
  }

  return (
    <div style={{ direction: 'rtl'}}>
      <h2>מאמרים :</h2>
   
        {articles.map((article , index) => (
            <div key={article.id}style={{ marginBottom: '20px', borderTop: index > 0 ? '1px solid #ccc' : 'none' }}>
              <p>Date: {new Date(article.date).toLocaleDateString("en-GB")}</p>
              <h6>{article.time}</h6>
            <h3>{article.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: parseHTMLString(article.art_value) }} />
            
          </div>
        ))}
     
    </div>
  );
}

export default ArticleList;
