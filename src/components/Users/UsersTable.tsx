import React, { useState } from 'react';
import {
    Box,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Collapse,
    IconButton,
    TableSortLabel,
    Chip,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



type Order = 'asc' | 'desc';
// @ts-ignore
type OrderBy = keyof Omit<PurchaseItem, 'id' | 'items' | 'status'>;

interface RowProps {
    row: any;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

const Row: React.FC<RowProps> = ({ row, isSelected, onSelect }) => {
    const [open, setOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onSelect(row.id);
        // When parent is selected, select all children
        if (!isSelected) {
            setSelectedItems(row.items.map((_: any, index: number) => index));
        } else {
            setSelectedItems([]);
        }
    };

    return (
        <>
            <TableRow
                sx={{
                    '& > *': { borderBottom: 'unset' },
                    backgroundColor: isSelected ? '#F5F5F5' : 'inherit',
                    '&:hover': { backgroundColor: '#FAFAFA' }
                }}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={isSelected}
                        onChange={(e: any)=>handleClick(e)}
                    />
                </TableCell>
                <TableCell>
                    <span style={{ fontWeight: 600, fontSize: '14px' }}>{row.poNumber}</span>
                </TableCell>
                <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Chip
                            label={row.status.assigned}
                            size="small"
                            sx={{
                                backgroundColor: '#E8F5E9',
                                color: '#2E7D32',
                            }}
                        />
                        <Chip
                            label={row.status.unassigned}
                            size="small"
                            sx={{
                                backgroundColor: '#FFE0B2',
                                color: '#E65100',
                            }}
                        />
                    </Box>
                </TableCell>
                <TableCell>{row.supplier}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="checkbox">
                                            <Checkbox 
                                                checked={selectedItems.length === row.items.length}
                                                indeterminate={selectedItems.length > 0 && selectedItems.length < row.items.length}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        setSelectedItems(row.items.map((_: any, index: number) => index));
                                                    } else {
                                                        setSelectedItems([]);
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Receipt</TableCell>
                                        <TableCell>Property</TableCell>
                                        <TableCell>Unit</TableCell>
                                        <TableCell>Cost</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.items.map((item: any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell padding="checkbox">
                                                <Checkbox 
                                                    checked={selectedItems.includes(index)}
                                                    onChange={(event) => {
                                                        if (event.target.checked) {
                                                            setSelectedItems([...selectedItems, index]);
                                                        } else {
                                                            setSelectedItems(selectedItems.filter(i => i !== index));
                                                        }
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <img
                                                        src={item.product.image}
                                                        alt={item.product.name}
                                                        style={{
                                                            width: '40px',
                                                            height: '40px',
                                                            objectFit: 'cover',
                                                            borderRadius: '4px',
                                                        }}
                                                    />
                                                    <span style={{ fontWeight: 600, fontSize: '14px' }}>{item.product.name}</span>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={item.status}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: item.status === 'Assigned' ? '#E8F5E9' : '#FFE0B2',
                                                        color: item.status === 'Assigned' ? '#2E7D32' : '#E65100',
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell>{item.quantity}</TableCell>
                                            <TableCell>{item.purchaser}</TableCell>
                                            <TableCell>{item.property}</TableCell>
                                            <TableCell>{item.unit}</TableCell>
                                            <TableCell>{item.cost}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};


const UserTable: React.FC<{ receipts: any }> = ({ receipts }) => {
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

    const sortedPurchases = React.useMemo(() => {
        return [...receipts].sort((a, b) => {
            const isAsc = order === 'asc';
            if (orderBy === 'total') {
                return isAsc
                    ? parseFloat(a[orderBy].replace('$', '').replace(',', '')) - parseFloat(b[orderBy].replace('$', '').replace(',', ''))
                    : parseFloat(b[orderBy].replace('$', '').replace(',', '')) - parseFloat(a[orderBy].replace('$', '').replace(',', ''));
            }
            return isAsc
                ? a[orderBy].localeCompare(b[orderBy])
                : b[orderBy].localeCompare(a[orderBy]);
        });
    }, [receipts, order, orderBy]);

    return (
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
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
                        {['Name', 'Address', 'Total assigned', 'Value'].map((column) => (
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
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedPurchases.map((row) => (
                        <Row
                            key={row.id}
                            row={row}
                            isSelected={selected.includes(row.id)}
                            onSelect={handleSelect}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;