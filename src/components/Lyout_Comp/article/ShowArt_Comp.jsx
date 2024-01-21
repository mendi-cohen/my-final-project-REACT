import React from "react";

function ArticleList({ articles }) {
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
    <div style={{ direction: 'rtl'}}>
      
   
        {articles.map((article , index) => (
            <div key={article.id}style={{ marginBottom: '20px', borderTop: index > 0 ? '1px solid #ccc' : 'none' }}>
              <p>תאריך עליית המאמר : {new Date(article.date).toLocaleDateString("en-GB")}</p>
            <h3>{article.second_title}</h3>
            <div dangerouslySetInnerHTML={{ __html: parseHTMLString(article.art_value) }} />
            
          </div>
        ))}
     
    </div>
  );
}

export default ArticleList;
