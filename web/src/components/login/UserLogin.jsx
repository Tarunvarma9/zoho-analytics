import { Button } from '@mui/material';
import React,{useState} from 'react';
import SearchAppBar from '../dashboard/Header';
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';

function UserLogin() {

    const UserAdmin = {
        username:"test",
        password:"test"
    }

    const [user, setUser] = useState({username:'', password:''});
    const [err, setErr]=useState('');

    const Login =details=>{
        console.log(details);
        if(details.username==UserAdmin.username && details.password == UserAdmin.password){
        console.log("Logged In")
        setUser({
            username:details.username,
            password:details.password
        });
    }
    
    else    {
            console.log("Details do not match")
        }
}

    const Logout=details=>{
        setUser({
            username:'', password:''
        });
        
    }


  return( 
  <>
  <div style={{ padding:"10px 10%"}}>
   
   {(user.username !='')? (<div>
       <h3> Welcome, <span>{user.username}</span></h3>
       <Button onClick={Logout}>Logout</Button>
       <Link to='/'
        style={{textDecoration:"none"}}>
       <Button style={{color:'tomato'}}>Dashboard</Button>
       </Link>
       </div>) :(
           <LoginPage Login={Login} error={err} />
       )
   

}
   
  </div></>);
}

export default UserLogin;

