import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#1C6758'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RTO Management System
          </Typography>
          
          <Button className="styli"><Link to="/">Home</Link></Button>
          <Button className="styli"><Link to="/login">Login</Link></Button>
          <Button className="styli"><Link to="/register">Register Now</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;