import React from 'react';
import { Link } from "react-router-dom";
import SearchAppBar from './Header';


function ZohoDashboard() {

  return(<> 
  <SearchAppBar/>
  <div style={{textAlign:'center', marginTop:'100px'}}>
  <h1>Sample Landing Page</h1>

<div style={{textAlign:'center'}}>
    
    <Link to='/dashboard' style={{textDecoration:'none', color:'red', }}>
        <h4><b style={{borderBottom:'2px solid red'}}>Zoho Analytics</b></h4>
    </Link>
</div>
  </div>;
 </> )
}

export default ZohoDashboard;
