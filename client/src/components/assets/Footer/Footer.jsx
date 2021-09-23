import React from 'react';
import Box from "@mui/material/Box";
import logo from './logo_1.png';
import fb_logo from './fb_logo.png';
import tw_logo from './tw_logo.png';
import ln_logo from './ln_logo.png';
import google_logo from './google_logo.png';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#f2f5f3',
            backgroundImage: 'linear-gradient(black, black)',
            backgroundSize: '100% 2px',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat'
          }}>
      
            <Box
              sx={{
                display: "flex",
                justifyContent: 'space-between',
                maxWidth: '1500px',
                margin: '0px auto',
                alignItems: 'center',
              }}>
      
      
              <Box sx={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                paddingLeft: '50px',
                width: '300px',
                flexDirection: 'column'
              }}>
                <h3 style={{ margin: '1px 0' }}>Electronics Store</h3>
                <p style={{ margin: '0 0' }}>is a website that has an incredible number of different things going on at once. It’s not just a retailer. </p>
              </Box>
      
      
              <Box sx={{
                marginTop: '50px',
                display: 'flex',
                justifyContent: 'center',
                width: '500px',
              }}>
                <img style={{ cursor: 'pointer' }} src={logo} alt={"mainLogo"} />
              </Box>
      
      
              <Box sx={{
                display: "flex",
                justifyContent: 'space-around',
                marginTop: '50px',
                width: '300px',
                height: '50px',
              }}>
                <img style={{ cursor: 'pointer' }} src={fb_logo} alt={"logo Facebook"} />
                <img style={{ cursor: 'pointer' }} src={tw_logo} alt={"logo Twitter"} />
                <img style={{ cursor: 'pointer' }} src={ln_logo} alt={"logo Linkedin"} />
                <img style={{ cursor: 'pointer' }} src={google_logo} alt={"logo google+"} />
              </Box>
      
            </Box>
            <div style={{
              marginTop: '50px',
              backgroundImage: 'linear-gradient(black, black)',
              backgroundSize: '1600px 1px',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat'
            }}>
              <p style={{width:'600px', margin: '0 auto', padding:'15px 0', display:'flex', justifyContent: 'center', }}>  Copyright © 2021. All rights reserved by React team 4</p>
            </div>
          </Box>
      
    );
};

export default Footer;