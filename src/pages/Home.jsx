import SignIn from "../components/SignIn_Comp";
import EnterCard from "../components/EnterCard_Comp";
import { Button, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import HeadOfPage from "../components/HeadrOfPage_Comp";
import { useState } from "react";

function Home() {
  const [anchorEll, setAnchorEl] = useState(true);

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div className="main-home">
      <HeadOfPage />

      {anchorEll ? (  
        <div className="sign-in">
          <EnterCard components={<SignIn />} restartLog={handleClose} />
        </div>
      ) : null}
      
      <div className="moveToWeb">
        <Typography>
          <Link to={`about`}>
            <Button
              className="enter-Button"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ExitToAppIcon />}
              sx={{
                backgroundColor: "rgb(33, 187, 130)",
                fontSize: "36px",
                borderRadius: "50% 5%",
                transition: "ease-in-out 0.6s",
              }}
            >
              כניסה
            </Button>
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default Home;
