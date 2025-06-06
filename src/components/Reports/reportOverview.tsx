import { Box, Typography } from '@mui/material'
import React from 'react'
import ReportsOverviewDataShow from "../Reports/ReportsOverviewDataShow/reportsOverviewDataShow"
import ArrowIcon from "../../assets/ArrowIcon.svg"
import CostIcon from "../../assets/CostReportIcon.svg"
import CustomerIcon from "../../assets/CustomerIcon.svg"
import UsefulButton from "../Button/usefulButton"
import StockChip from '../Overview/stockChip'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const ReportOverview: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "1251px", height: "395px", background: "#FDFDFD", borderRadius: "16px", padding: "24px", gap: "8px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "1203px", height: "48px" }}>
                <Typography sx={{ width: "63px", height: "24px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>Overview</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "448px", height: "48px", alignItems: "center" }}>
                    <Typography>1d</Typography>
                    <Typography>7d</Typography>
                    <Typography>1M</Typography>
                    <Typography>6M</Typography>
                    <Typography>1Y</Typography>
                    <UsefulButton label="Custom" textColor="#6D6E6F" />
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", width: "1203px", height: "291px", padding: "20px", gap: "32px" }}>
                <ReportsOverviewDataShow
                    Icon={CostIcon}
                    Number={23}
                    Text='Cost Center'
                    children={
                        <StockChip
                            containerStyle={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1,
                                width: '78px',
                                borderRadius: '8px',
                                border: '1.5px solid rgba(0, 166, 86, 0.15)',
                                background: "rgba(0, 166, 86, 0.05)",

                            }}
                            icon={<ArrowUpwardIcon style={{ height: "20px" }} />}
                            percentageText="36.8%"
                            description="vs last month"

                            percentageTextColor="#00A656"
                            descriptionColor="#637381"
                        />
                    }
                />
                <ReportsOverviewDataShow
                    Icon={CustomerIcon}
                    Number={152}
                    Text='Properties'
                    children={
                        <StockChip
                            containerStyle={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1,
                                width: '78px',
                                borderRadius: '8px',
                                border: '1.5px solid rgba(238, 38, 12, 0.05)',
                                background: "rgba(255, 106, 85, 0.05)",
                            }}
                            icon={<ArrowDownwardIcon style={{ height: "20px" }} />}
                            percentageText="36.8%"
                            description="vs last month"

                            percentageTextColor="#FF6A55"
                            descriptionColor="#637381"
                        />
                    }
                />
                <ReportsOverviewDataShow
                    Icon={ArrowIcon}
                    Number={26}
                    Text='Management Company'
                    children={
                        <StockChip
                            containerStyle={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1,
                                width: '78px',
                                borderRadius: '8px',
                                border: '1.5px solid rgba(0, 166, 86, 0.15)',
                                background: "rgba(0, 166, 86, 0.05)",
                            }}
                            icon={<ArrowUpwardIcon style={{ height: "20px" }} />}
                            percentageText="36.8%"
                            description="vs last month"

                            percentageTextColor="#00A656"
                            descriptionColor="#637381"
                        />
                    }
                />
            </Box>
        </Box>
    )
}

export default ReportOverview;