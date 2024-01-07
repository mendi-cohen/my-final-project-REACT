import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";


function About(){
    return(
        <>
        <h1>About</h1>
        <div>
        <Typography>
          <Link to={`a`}>
            <Button
              className="enter-Button"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "rgb(33, 187, 130)",
                fontSize: "36px",
                borderRadius: "50% 5%",
                transition: "ease-in-out 0.6s",
              }}
            >
              Aעבור ל
            </Button>
          </Link>
        </Typography>
        </div>
        </>
    )
}

export default About