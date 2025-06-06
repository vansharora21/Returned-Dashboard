import { Box, Typography } from '@mui/material';
import React from 'react';
import ButtonComponent from '../Button/Button';

const UnassignedData = [
    { POnumber: "HD-vcv423455", Status: "6", supplier: "Grainger", Date: "03,10,2025", Total: "35,430,00" },
    { POnumber: "HD-dvf0697554", Status: "2", supplier: "Grainger", Date: "03,10,2025", Total: "12,433,00" },
    { POnumber: "HD-svsf4445-455", Status: "9", supplier: "The Wayfair Professional", Date: "03,10,2025", Total: "26,232,09" },
];

const UnassignedOverviewReports: React.FC = () => {

    const handleUnassignedClick = () => {
        console.log("button Clicked")
    };

    return (
        <Box sx={{ width: "1251px", height: "438px", borderRadius: "16px", padding: "24px", gap: "24px", backgroundColor: "#FFFFFF" }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "1203px", height: "48px" }}>
                <Typography sx={{ width: "63px", height: "24px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>Unassigned</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "1141px", height: "16px", paddingRight: "16px", paddingLeft: "16px", gap: "16px" }}>
                <Typography sx={{ width: "66px", height: "16px", }} fontWeight={400} fontSize={12} color='#939393'>PO Number</Typography>
                <Typography sx={{ width: "66px", height: "16px", }} fontWeight={400} fontSize={12} color='#939393'>Status</Typography>
                <Typography sx={{ width: "66px", height: "16px", }} fontWeight={400} fontSize={12} color='#939393'>Supplier</Typography>
                <Typography sx={{ width: "66px", height: "16px", }} fontWeight={400} fontSize={12} color='#939393'>Date</Typography>
                <Typography sx={{ width: "66px", height: "16px", }} fontWeight={400} fontSize={12} color='#939393'>Total</Typography>
            </Box>
            <Box sx={{ width: "1203px", height: "202px", gap: "8px", }}>
                {UnassignedData.map((UnAssData) => {
                    return (
                        <Box key={UnAssData.POnumber} sx={{ backgroundColor: "#FAFAFA", width: "1203px", height: "62px", borderRadius: "8px" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "1100px", height: "62px", borderRadius: "8px", padding: "10px", margin: "10px" }}>
                                <Typography justifyContent={'left'}>{UnAssData.POnumber}</Typography>
                                <Typography justifyContent={'left'}>{UnAssData.Status}</Typography>
                                <Typography justifyContent={'left'}>{UnAssData.supplier}</Typography>
                                <Typography justifyContent={'left'}>{UnAssData.Date}</Typography>
                                <Typography justifyContent={'left'}>${UnAssData.Total}</Typography>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            <Box sx={{display:"flex", flexDirection:"row-reverse", margin:"24px"}}>
            <ButtonComponent
                label='All UnAssigned'
                onClick={handleUnassignedClick}
            />
            </Box>
        </Box>
    )
}
export default UnassignedOverviewReports;

