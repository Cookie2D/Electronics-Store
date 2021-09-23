import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from './logo_1.png'

const Header = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: 'space-around',
            backgroundColor: '#f2f5f3',
            backgroundImage: 'linear-gradient(black, black)',
            backgroundSize: '100% 2px',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
         }}>
      
      
      {/* main nav */}
            <Box sx={{
              display: "flex",
              justifyContent: 'space-around',
              width: '1600px',
              margin: '0px auto',
              alignItems: 'center',
              cursor: 'pointer',
      
            }}>
      
      
      {/* logo */}
              <Box sx={{
                display: 'flex',
                paddingLeft: '100px',
                marginBottom: '5px',
                        }}>
                <img src={logo} alt={"logo"} /> 
                </Box>
      
      
      {/* nav menu */}
              <Box sx={{
                display: "flex",
                justifyContent: 'space-between',
                margin: '0px auto',
                width: '400px'
      
              }}>
                <Typography sx={{
                  fontSize: 'h6.fontSize',
                  ":hover": { backgroundColor: 'rgba(17, 18, 19, 0.29)', boxShadow: '15px -9px 7px -8px rgba(17, 18, 19, 0.29)', transition: '1.2s' },
                  borderRadius: '20px',
                  padding: '2px 40px'
                }}>Home</Typography>
      
                <Typography sx={{
                  fontSize: 'h6.fontSize',
                  ":hover": { backgroundColor: 'rgba(17, 18, 19, 0.29)', boxShadow: '15px -9px 7px -8px rgba(17, 18, 19, 0.29)', transition: '1.2s' },
                  borderRadius: '20px',
                  padding: '2px 40px'
                }}>Catalog</Typography>
      
                <Typography sx={{
                  fontSize: 'h6.fontSize',
                  ":hover": { backgroundColor: 'rgba(17, 18, 19, 0.29)', boxShadow: '15px -9px 7px -8px rgba(17, 18, 19, 0.29)', transition: '1.2s' },
                  borderRadius: '20px',
                  padding: '2px 40px'
                }}>Cart</Typography>
              </Box>
            </Box>
          </Box>
    );
};

export default Header;