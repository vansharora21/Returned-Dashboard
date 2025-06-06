import { Box, Typography } from "@mui/material";
import DashBoardCommonHeader from "../Header/DashBoardCommonHeader";
import UsefulButton from "../Button/usefulButton";
import SearchIcon from '../../assets/SearchIcon.svg'
import PropertiesTable from '../Properties/propertiesTable'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProperties } from '../../redux/slices/propertiesSlice'

import { RootState } from "@/redux/store";
import LeftNavigation from "../LeftNavigation/leftNavigation";

// const propertisData = Array.from({ length: 10 }, (_, i) => ({
//     id: (i + 1).toString(),
//     poNumber: `Property-name`,
//     status: {
//         assigned: 1,
//         unassigned: 3
//     },
//     address: '5801 Logan Street, Denver, CO 80216',

//     // image: ProductImage1,
//     supplier: 'The Home Depot',
//     date: '03.10.2024',
//     total: '$35,000.00',
//     items: [
//         {
//             product: {
//                 name: 'TNOMS Black Bathroom Faucet Set of 4',
//                 // image: ProductImage1,
//             },
//             status: 'Unassigned',
//             quantity: 860,
//             purchaser: 'Jake Harrison',
//             property: 'Property Name',
//             unit: 'Unit Name',
//             cost: '$12,000.00'
//         },
//         {
//             product: {
//                 name: 'Goodman 18000 BTU Mini Wall Mount AC Unit',
//                 // image: ProductImage2, 
//             },
//             status: 'Unassigned',
//             quantity: 400,
//             purchaser: 'Jake Harrison',
//             property: 'Property Name',
//             unit: 'Unit Name',
//             cost: '$4,000.00'
//         },
//         {
//             product: {
//                 name: 'TNOMS Black Bathroom Faucet Set of 4',
//                 // image: ProductImage1,
//             },
//             status: 'Unassigned',
//             quantity: 860,
//             purchaser: 'Jake Harrison',
//             property: 'Property Name',
//             unit: 'Unit Name',
//             cost: '$12,000.00'
//         },
//         {
//             product: {
//                 name: 'Goodman 18000 BTU Mini Wall Mount AC Unit',
//                 // image: ProductImage2, 
//             },
//             status: 'Unassigned',
//             quantity: 400,
//             purchaser: 'Jake Harrison',
//             property: 'Property Name',
//             unit: 'Unit Name',
//             cost: '$4,000.00'
//         }
//     ]
// }));

const Properties: React.FC = () => {
    
    const propertisData = useSelector((state: RootState) => state.properties);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProperties() as any )
    },[dispatch]);

    return (
        <Box sx={{ display: "flex", flexDirection: "row", Width: '100%', gap: "24px" }}>
            <LeftNavigation />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <DashBoardCommonHeader />
                <Box sx={{ width: "1251px", height: "52px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "24px" }}>
                    <Box sx={{ width: "1251px", height: "52px", display: "flex", justifyContent: "space-between", }}>
                        <Typography sx={{ color: "#000000", fontSize: "24px", fontWeight: 600 }}>Properties</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '24px',
                        position: 'relative',
                        width: {
                            md: "1400px",
                            xs: "320px",
                            lg: "1400px",
                            sm: "1400px",
                        },
                        borderRadius: "24px",
                        backgroundColor: "#ffffff",
                        marginTop: "24px",
                        maxWidth: "1251px",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "1203px", height: "48px" }}>
                        <Box sx={{ width: "127px", height: "24px", display: "flex", flexDirection: "row", gap: 2 }}>
                            <Typography sx={{ width: "63px", height: "24px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>Properties</Typography>
                            <Typography sx={{ width: "63px", height: "24px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>Units</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "172px", height: "52px", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", width: "295px", height: "52px", gap: "16px" }}>
                                <img width="48px" height="48px" src={SearchIcon}
                                    style={{ border: "1px solid #E2E2E2", borderRadius: "24px", padding: "14px" }}
                                />
                                <UsefulButton label="Filter" textColor="#6D6E6F" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <PropertiesTable properties={propertisData} />

                <Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Properties;