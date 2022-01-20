import React from 'react';
import SearchAppBar from './Header';

function ZohoD() {

  return( 
  
  <>
  <SearchAppBar/>
  <div style={{padding:'10px 5%'}}>
     <iframe frameborder="0" width="1150" height="600" src="https://analytics.zoho.in/open-view/222575000000005057"></iframe>

     {/* <a href='https://analytics.zoho.in/open-view/222575000000005057' style={{textDecoration:'none'}}>
         Zoho Analytics Dashboard
     </a> */}
  </div>
  </>)

}

export default ZohoD;
