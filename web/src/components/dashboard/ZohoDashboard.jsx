import React from "react";
import { Link } from "react-router-dom";
import SearchAppBar from "./Header";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent } from "@mui/material";
import { red } from "@mui/material/colors";
import EarbudsBatteryIcon from "@mui/icons-material/EarbudsBattery";
import FlashAutoIcon from '@mui/icons-material/FlashAuto';

function ZohoDashboard() {
  return (
    <>
      <SearchAppBar />
      <div
        style={{ textAlign: "center",background:
        "linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%)", marginTop: "100px", padding: "10px 10%" }}
      >
          <h1><b>PRODUCTS</b></h1>
        {/* <h1>Sample Landing Page</h1>

<div style={{textAlign:'center'}}>
    
    <Link to='/dashboard' style={{textDecoration:'none', color:'red', }}>
        <h4><b style={{borderBottom:'2px solid red'}}>Zoho Analytics</b></h4>
    </Link>
</div> */}

        <div
        style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-evenly',
        
        }}>
                    <Link to='/dashboard' style={{textDecoration:'none', color:'red', }}>
          <Card style={{ height: "100%", width: "10rem" }}>
            <CardContent style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <FlashAutoIcon />
              </Avatar>
              <h3>
                <b>Analytics</b>
              </h3>
            </CardContent>
          </Card>
          </Link>
          <Link to='/datagrid' style={{textDecoration:'none', color:'red', }}>
          <Card style={{ height: "100%", width: "10rem" }}>
            <CardContent style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <EarbudsBatteryIcon />
              </Avatar>
              <h3>
                <b>Grid Data</b>
              </h3>
            </CardContent>
          </Card>
          </Link>
          <Card style={{ height: "100%", width: "10rem" }}>
            <CardContent style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <EarbudsBatteryIcon />
              </Avatar>
              <h3>
                <b>eRfx</b>
              </h3>
            </CardContent>
          </Card>

  
          <Card style={{ height: "100%", width: "10rem" }}>
            <CardContent style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <EarbudsBatteryIcon />
              </Avatar>
              <h3>
                <b>Catalogue</b>
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>
      ;
    </>
  );
}

export default ZohoDashboard;
