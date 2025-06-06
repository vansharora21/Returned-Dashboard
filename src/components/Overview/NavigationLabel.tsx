import { Box, Typography } from '@mui/material';
import React from 'react'

interface NavigationLabelProp {
    logo: string;
    label: string;
    onClick?(): void;
    hasSubmenu?: boolean;
    isSubmenuOpen?: boolean;
    isActive?: boolean;
    subMenuItems?: { label: string; path: string; }[];
}

const NavigationLabel:React.FC<NavigationLabelProp>=({logo, label, onClick, hasSubmenu, isSubmenuOpen, isActive, subMenuItems}) =>{
  return (
    <Box>
      <Box onClick={onClick}
       sx={{
         padding:"12px",
         margin:"16px",
         marginTop:"5px",
         width:"188px",
         height:"48px",
         display:"flex", 
         flexDirection:"row",
         justifyContent:"left",
         marginBottom:"6px", 
         backgroundColor: isActive ? "#F7F7F7" : "transparent",
         borderRadius:"8px",
         cursor:"pointer",
         border:"1px",
         ":hover":{backgroundColor:"#F7F7F7"}
       }}>
          <img
              src={logo}
              alt={`${label} icon`}
              style={{ width: '24px', height: '24px', marginRight: '8px'}}
          />
          <Typography sx={{color: isActive ? "#000" : "#6D6E6F", ":hover":{ color:"#000"}}}>{label}</Typography>
      </Box>
      {hasSubmenu && isSubmenuOpen && subMenuItems && (
        <Box sx={{ ml: 6 }}>
          {subMenuItems.map((item, index) => (
            <Box key={index} sx={{
              padding: "8px",
              marginLeft: "16px",
              cursor: "pointer",
              color: "#6D6E6F",
              ':hover': {
                backgroundColor: "#F7F7F7",
                borderRadius: "8px",
                color: "#000"
              }
            }}>
              <Typography>{item.label}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default NavigationLabel;