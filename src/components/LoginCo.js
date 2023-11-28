import {TextField , Button} from '@material-ui/core/';

function Login() {
    return(
    <>
    <h1>  הרשמה לאתר  </h1>

    <div className="login">
    <form>
    <TextField
      id="username"
      label="שם משתמש"
      variant="outlined"
      fullWidth
      margin="none"
      color="secondary" 
      

    />
    <TextField
      id="email"
      label="כתובת אימייל"
      type="email"
      variant="outlined"
      fullWidth
      margin="none"
      color="secondary" 
      
      
    />
  </form>
  </div>
  <Button variant="contained" color="secondary" size='large' > כניסה </Button>
  </>
    )
}

export default Login