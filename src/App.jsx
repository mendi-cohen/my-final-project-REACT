import logo from './logo.svg';
import './App.css';
import {TextField , Button} from '@material-ui/core/';

function App() {
  return (
    <div className="App">
<body>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    
      <main>



        <h1>  הרשמה לאתר  </h1>

      <div className="login">
      <form>
      <TextField
        id="username"
        label="שם משתמש"
        variant="outlined"
        fullWidth
        margin="normal"
        color="secondary" 
        
  
      />
      <TextField
        id="email"
        label="כתובת אימייל"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        color="secondary" 
        
        
      />
    </form>

    </div>

    <Button variant="contained" color="secondary" size='large' > כניסה </Button>
    
      </main>








      </body>
    </div>
  );
}

export default App;
