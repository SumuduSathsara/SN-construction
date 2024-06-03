import { Box, Button} from "@mui/material";
import Adminheader from "./Adminheader";



//import { tokens } from "../theme";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";


import React from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';


const Dashboard = () => {
    

    return (
     
       <>
      
        <Box m="5px">
          {/* HEADER */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Adminheader title="DASHBOARD" subtitle="Welcome to your dashboard" />

            
    
            <Box>
          <Button
            sx={{
              backgroundColor: '#2962ff',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      
     
    </Box>
    <div className='grid grid-cols-5 gap-6 my-4'>
      <div className='flex flex-col justify-around p-4 rounded-md bg-blue-500 text-white'>
        <div className='flex items-center justify-between'>
          <h5>PROJECT</h5>
          <InventoryIcon fontSize='large' />
        </div>
        <h2>300</h2>
      </div>
      <div className='flex flex-col justify-around p-4 rounded-md  bg-orange-500 text-white'>
        <div className='flex items-center justify-between '>
          <h5>APPOINTMENT</h5>
          <EventIcon fontSize='large' />
        </div>
        <h2>12</h2>
      </div>
      <div className='flex flex-col justify-around p-4 rounded-md bg-green-500 text-white'>
        <div className='flex items-center justify-between'>
          <h5>CUSTOMERS</h5>
          <GroupIcon fontSize='large' />
        </div>
        <h2>33</h2>
      </div>
      <div className='flex flex-col justify-around p-4 rounded-md bg-cyan-900 text-white'>
        <div className='flex items-center justify-between'>
          <h5>EMPLOYEE</h5>
          < PersonIcon fontSize='large' />
        </div>
        <h1>42</h1>
      </div>
      <div className='flex flex-col justify-around p-4 rounded-md bg-red-500 text-white'>
        <div className='flex items-center justify-between'>
          <h5>ALERTS</h5>
          <NotificationsIcon fontSize='large' />
        </div>
        <h1>42</h1>
      </div>
    </div>
  
            
    </>    
    )
}
export default Dashboard;

