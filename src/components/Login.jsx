import {TextField , Button} from '@material-ui/core/';
import '../Css_To_Comp/Login.css';

//קומפוננטת הרישום בפועל 

function Login(props) {


    return(
    
    <>
    <h1>  {props.head} </h1>

    <div className="login">
    <form>
    <TextField
      id="username"
      label="שם משתמש"
      variant="filled"
      fullWidth
      margin="none"
      color="secondary" 
    />
    <TextField
      id="email"
      label="כתובת אימייל"
      type="email"
      variant="filled"
      fullWidth
      margin="none"
      color="secondary"  
    />
  </form>

  </div>
  <div>
  <Button variant="contained" color="secondary" size='large'> {props.Button} </Button>
  </div>
  </>

    )

}

export default Login