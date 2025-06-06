import { Box, Typography } from '@mui/material'
import React from 'react'
import helpIcon from "../../../assets/helpIcon.svg"
import GraphSection from "../../../assets/GraphSection.svg"

interface ReportsOverviewDataShowProps{
  Icon?: string;
  Text?: string;
  Number?: number;
  children?: React.ReactNode;
};

const reportsOverviewDataShow:React.FC<ReportsOverviewDataShowProps>= ({Icon,Text,Number, children }) => {
  return (
    <Box sx={{display:"flex", flexDirection:"column",width:"366px", height:"251px", borderRight:"1.5px solid #7B7B7B1A", paddingRight:"32px", gap:"40px"}}>
      <img 
        width="64px" 
        height="64px" 
        src={Icon}
        style={{backgroundColor:"#F2F2F3",borderRadius:"32px",padding:"14px"}}
      />
      <Box sx={{display:"flex", flexDirection:"row",width:"129px", height:"24px", gap:"8px"}}>
        <Box sx={{display:"flex", flexDirection:"column",width:"182px", height:"147px"}}>
          <Box sx={{display:"flex", flexDirection:"row",width:"334px", height:"147px"}}>
            <Typography sx={{width:"97px", height:"24px", fontWeight:600, fontSize:"16px"}}>{Text}</Typography>
            <img 
              src={helpIcon} 
              alt='questionMarkIcon' 
              style={{
                width:"18px", 
                height:"18px", 
                }}
              />
          </Box>
          <Box sx={{width:"155px", height:"115px", gap:"12px"}}>
            <Box sx={{display:"flex", flexDirection:"column"}}>
               <Typography variant='h2' fontWeight={500} fontSize="60px">{Number}</Typography>
             </Box>
          {children}
          </Box>
        </Box>
          <Box sx={{display:"flex", flexDirection:"row"}}>
            <img 
              src={GraphSection}
              alt="graphIcon"
              style={{height:"147px", width:"136px"}}/> 
          </Box>
      </Box>
    </Box>
  )
}

export default reportsOverviewDataShow