import {
  Checkbox, IconButton, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, TableSortLabel, Collapse, Box
} from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

type Order = 'asc' | 'desc';
// @ts-ignore
type OrderBy = keyof Omit<PurchaseItem, 'id' | 'items' | 'status'>;

const PropertiesTable: React.FC<{ properties: any }> = ({ properties }) => {
  const propertiesData = properties.properties; // FIX: properties is an array, not an object with properties.properties
  const [orderBy, setOrderBy] = useState<OrderBy>('poNumber');
  const [order, setOrder] = useState<Order>('asc');
  const [selected, setSelected] = useState<string[]>([]);
  const [openRowId, setOpenRowId] = useState<string | null>(null);

  const handleRequestSort = (property: OrderBy) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const toggleRow = (id: string) => {
    setOpenRowId(prevId => (prevId === id ? null : id));
  };

  const handleSelectRow = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selected.length === propertiesData.length) {
      setSelected([]);
    } else {
      setSelected(propertiesData.map((p: any) => p.id));
    }
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none', borderRadius: "10px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selected.length === propertiesData.length}
                indeterminate={selected.length > 0 && selected.length < propertiesData.length}
                onChange={handleSelectAllRows}
              />
            </TableCell>
            <TableCell />
            {['Property ID', 'Property name', 'Address', 'Assign qu.', 'Total'].map((column) => (
              <TableCell key={column}>
                <TableSortLabel
                  active={orderBy === column}
                  direction={orderBy === column ? order : 'asc'}
                  onClick={() => handleRequestSort(column as OrderBy)}
                >
                  {column}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {propertiesData && propertiesData.map((property: any) => (
            <React.Fragment key={property.id}>
              <TableRow
                selected={selected.includes(property.id)}
                hover
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(property.id)}
                    onChange={() => handleSelectRow(property.id)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => toggleRow(property.id)}>
                    {openRowId === property.id ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
                <TableCell>{property.property_id}</TableCell>
                <TableCell>{property.property_name}</TableCell>
                <TableCell>{property.address}</TableCell>
                <TableCell>{property.assigned_quantity}</TableCell>
                <TableCell>${property.total}</TableCell>
              </TableRow>

              {/* Nested Table */}
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                  <Collapse in={openRowId === property.id} timeout="auto" unmountOnExit>
                    <Box margin={2}>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell padding="checkbox">
                              <Checkbox onChange={() => console.log("select all nested rows")} />
                            </TableCell>
                            <TableCell>Unit Name</TableCell>
                            <TableCell>Total Value</TableCell>
                            <TableCell>Unit ID</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {property.units.map((unit: any) => (
                            <TableRow key={unit.property_unit_id}>
                              <TableCell padding="checkbox">
                                <Checkbox onChange={() => console.log("nested row selected", unit.property_unit_id)} />
                              </TableCell>
                              <TableCell>{unit.name}</TableCell>
                              <TableCell>${unit.total_value}</TableCell>
                              <TableCell>{unit.property_unit_id}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PropertiesTable;
