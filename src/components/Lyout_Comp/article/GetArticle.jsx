import React, { useState, useEffect, useCallback } from "react";
import ArticleList from './ShowArt_Comp';

function GetArticle(props) {
  const [Art, setArt] = useState([]);

  const showArticles = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/Articles/getOneType/${props.Type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const data = await response.json();
  
        if (data && data.oneType && data.oneType.length > 0) {
          setArt(data.oneType);
        } else {
          console.log("No data in the response");
        }
      } else {
        console.log("Server response is not okay");
      }
    } catch (error) {
      console.log("Error while fetching data from the server", error);
    }
  }, [props.Type]);

  useEffect(() => {
    showArticles();
  }, [showArticles]);

 

  return (
    <>
      <h2>{props.headerOfArt}</h2>
      <ArticleList articles={Art} />
    </>
  );
}

export default GetArticle;
