import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';


 export default function ArtMenu(){

    const links = [
        { text: "פרשת שבוע ", to : '/ArticleMenu/GetArticle',color:'black' , backgroundColor:'blue', hoverColor: '#1565C0' },
        { text: "השקפה  ",to : '',color:'black' , backgroundColor:'blue', hoverColor: '#D32F2F' },
        { text: " עינייני דיומא",to : '',color:'black' , backgroundColor: 'blue' , hoverColor: '#1565C0' },
        { text: "הלכה ",to : '' ,color:'black' , backgroundColor:'blue' , hoverColor: '#D32F2F' },
      ];

return(
<>
        <h1> ? באיזה נושא תרצה לקרוא  </h1>


    <Stack direction="column" spacing={2} sx={{alignItems:'center',}}>
      {links.map((link, index) => (
     <Button
     key={index}
     variant="div"
     size="large"
     sx={{
       position: 'relative',
       overflow: 'hidden',
       boxShadow: `0px 8px 20px rgba(33, 150, 243, 0.2)`,
       borderRadius: '12px',
       backgroundColor: 'transparent',
       height: '170px',
       zIndex: 1,
       minWidth: '200px',
       width: '50%',
       backgroundImage: link.backgroundImage,
       backgroundSize: 'cover',
       '&:hover .text': {
         transform: 'translateX(0%)',
       },
       
     }}
     component={Link}
     to={link.to}
   >
     <Typography
       className="text"
       sx={{
         position: 'absolute',
         bottom: '0',
         left: '0',
         width: '100%',
         padding: '50px',
         boxSizing: 'border-box',
         transform: 'translateX(100%)',
         transition: 'transform 0.5s ease',
         color: link.color,
         fontSize: '30px',
         fontWeight:'bold',
       }}
     >
       {link.text}
     </Typography>
   </Button>
      ))}
    </Stack>
    </>
)

 }


