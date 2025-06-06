import React from 'react'
import DashBoardCommonHeader from '../Header/DashBoardCommonHeader';
import LeftNavigation from '../LeftNavigation/leftNavigation';
import { Box, Typography } from '@mui/material';
import ReportOverview from '../Reports/reportOverview';
import UnassignedOverviewReports from '../Reports/unassignedOverviewReports';
import AssignedOverviewReports from '../Reports/assignedOverviewReports';
import UsefulButton from '../Button/usefulButton';

const Reports: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", Width: '100%', gap: "24px", }}>
            <LeftNavigation />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <DashBoardCommonHeader />
                <Box sx={{ width: "1251px", height: "52px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "24px" }}>
                    <Box sx={{ width: "1251px", height: "52px", display: "flex", justifyContent: "space-between", marginBottom: "33px" }}>
                        <Typography sx={{ color: "#000000", fontSize: "24px", fontWeight: 600 }}>Reports</Typography>
                        <Box sx={{ display: "flex", width: "92px", height: "52px", gap: "16px" }}>
                            <UsefulButton label="Export" textColor="#6D6E6F" />
                        </Box>
                    </Box>
                    <ReportOverview />
                    <UnassignedOverviewReports />
                    <AssignedOverviewReports />
                </Box>
            </Box>
        </Box>
    )
}

export default Reports