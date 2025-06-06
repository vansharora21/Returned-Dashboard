import { Box, Typography } from '@mui/material';
import DashBoardCommonHeader from '../Header/DashBoardCommonHeader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchReceipts } from '@/redux/slices/recieptSlice';
import { fetchReceipts } from '../../redux/slices/recieptSlice';
// import { RootState } from '@/redux/store';
import LeftNavigation from '../LeftNavigation/leftNavigation';
import UsefulButton from '../Button/usefulButton';
import ReceiptTable from './ReceiptTable';
import { RootState } from '../../redux/store';

const Receipts: React.FC = () => {
    const receiptsData = useSelector((state: RootState) => state.reciept)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReceipts() as any);
      }, [dispatch]);
    
    return (
        <Box sx={{ display: "flex", flexDirection: "row", Width: '100%', gap: "24px" }}>
            <LeftNavigation />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <DashBoardCommonHeader />
                <Box sx={{ width: "1251px", height: "52px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "24px" }}>
                    <Box sx={{ width: "1251px", height: "52px", display: "flex", justifyContent: "space-between", }}>
                        <Typography sx={{ color: "#000000", fontSize: "24px", fontWeight: 600 }}>Receipts</Typography>
                        <Box sx={{ display: "flex", width: "202px", height: "52px", gap: "16px" }}>
                            <UsefulButton label="Import" textColor="#6D6E6F" />
                            <UsefulButton label="Export" textColor="#6D6E6F" />
                        </Box>
                    </Box>
                </Box>
                <ReceiptTable receipts={receiptsData} />
            </Box>
        </Box>
    )
}

export default Receipts;