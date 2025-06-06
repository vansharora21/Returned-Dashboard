import React, { useState } from 'react';
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel,
} from '@mui/material';


type Order = 'asc' | 'desc';
// @ts-ignore
type OrderBy = keyof Omit<PurchaseItem, 'id' | 'items' | 'status'>;

const ReceiptTable: React.FC<{ receipts: any }> = ({ receipts }) => {

    // const receiptsPagiation = receipts.receipts.pagination
    const receiptsInReceipts = receipts.receipts.receipts;

    console.log("receipts from the secoud reciepts table", receiptsInReceipts)

    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<OrderBy>('poNumber');
    const [selected, setSelected] = useState<string[]>([]);

    const handleRequestSort = (property: OrderBy) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = receipts.map((n: any) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleSelect = (id: string) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    // const sortedPurchases = React.useMemo(() => {
    //     return [...receipts].sort((a, b) => {
    //         const isAsc = order === 'asc';
    //         if (orderBy === 'total') {
    //             return isAsc
    //                 ? parseFloat(a[orderBy].replace('$', '').replace(',', '')) - parseFloat(b[orderBy].replace('$', '').replace(',', ''))
    //                 : parseFloat(b[orderBy].replace('$', '').replace(',', '')) - parseFloat(a[orderBy].replace('$', '').replace(',', ''));
    //         }
    //         return isAsc
    //             ? a[orderBy].localeCompare(b[orderBy])
    //             : b[orderBy].localeCompare(a[orderBy]);
    //     });
    // }, [receipts, order, orderBy]);

    return (
        <TableContainer component={Paper} sx={{ boxShadow: 'none', borderRadius:"10px" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                indeterminate={selected.length > 0 && selected.length < receipts.length}
                                checked={receipts.length > 0 && selected.length === receipts.length}
                                onChange={handleSelectAllClick}
                            />
                        </TableCell>
                        {['PO Number', 'Status', 'Supplier', 'Date', 'Total'].map((column) => (
                            <TableCell key={column}>
                                <TableSortLabel
                                    active={orderBy === column}
                                    direction={orderBy === column ? order : 'asc'}
                                    onClick={() => handleRequestSort(column as OrderBy)}
                                >
                                    {column === 'poNumber' ? 'PO Number' : column.charAt(0).toUpperCase() + column.slice(1)}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                        {/* <TableCell>Status</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {receiptsInReceipts && receiptsInReceipts.map((receipt: any) => (
                        <TableRow
                            key={receipt.id}
                            selected={selected.includes(receipt.id)}
                            hover
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selected.includes(receipt.id)}
                                    onChange={() => handleSelect(receipt.id)}
                                />
                            </TableCell>
                            {/* <TableCell>{receipt.name}</TableCell>
                            <TableCell>{receipt.address}</TableCell>
                            <TableCell>{receipt.total_assigned}</TableCell>
                            <TableCell>{receipt.value}</TableCell> */}
                            <TableCell>{receipt.po_number}</TableCell>
                            <TableCell>{receipt.purchaser.purchaser_id}</TableCell>
                            <TableCell>{receipt.supplier_name}</TableCell>
                            <TableCell>{receipt.date}</TableCell>
                            <TableCell>${receipt.total}</TableCell>
                            {/* <TableCell>
                                <Chip
                                    label={receipt.status}
                                    color={receipt.status === 'active' ? 'success' : 'default'}
                                    size="small"
                                />
                            </TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReceiptTable;