// import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import ArticleList from './ShowArt_Comp' ;


function GetArticle() {
  const [Art, setArt] = useState([]);

  const showArticels = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/Articels/getArticel`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.ArtFdb && data.ArtFdb.length > 0) {
          setArt(data.ArtFdb);
        
        } else {
          console.log("No  data in the response");
        }
      } else {
        console.log("Server response is not okay");
      }
    } catch (error) {
      console.log("Error while fetching data from the server", error);
    }
  };

  useEffect(() => {
    showArticels();
  }, []);

  
  return (
<ArticleList articles={Art} />
  );
}

export default GetArticle;
