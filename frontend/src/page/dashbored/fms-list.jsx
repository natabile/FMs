import { useFinancialRecords } from '../../contex/Fms_contex';
import { useTable } from 'react-table';
import { saveAs } from 'file-saver';
import {
  Box,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';

const EditableCell = ({ value: initialValue, row, column, updateRecord, editable }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue || '');

  const onBlur = () => {
    setIsEditing(false);
    updateRecord(row.index, column.id, value);
  };

  return (
    <TableCell
      onClick={() => editable && setIsEditing(true)}
      sx={{
        cursor: editable ? 'pointer' : 'default',
        minWidth: '100px',
        maxWidth: '120px',
        bgcolor: isEditing ? 'primary.light' : 'background.paper',
        color: 'text.primary',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'background-color 0.3s ease',
      }}
    >
      {isEditing ? (
        <TextField
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          onBlur={onBlur}
          fullWidth
          size="small"
        />
      ) : (
        <Typography variant="body2">{typeof value === 'string' ? value : value.toString()}</Typography>
      )}
    </TableCell>
  );
};

function FinancialRecordList() {
  const { records, updateRecord, deleteRecord } = useFinancialRecords();
  const [showSummary, setShowSummary] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const updateCellRecord = (rowIndex, columnId, value) => {
    const id = records[rowIndex] ? records[rowIndex]._id : undefined;
    updateRecord(id || '', { ...records[rowIndex], [columnId]: value });
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Description',
        accessor: 'discription',
        Cell: (props) => (
          <EditableCell {...props} updateRecord={updateCellRecord} editable={true} />
        ),
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        Cell: (props) => (
          <EditableCell {...props} updateRecord={updateCellRecord} editable={true} />
        ),
      },
      {
        Header: 'Category',
        accessor: 'catagoriy',
        Cell: (props) => (
          <EditableCell {...props} updateRecord={updateCellRecord} editable={true} />
        ),
      },
      {
        Header: 'Payment Method',
        accessor: 'paymentMethod',
        Cell: (props) => (
          <EditableCell {...props} updateRecord={updateCellRecord} editable={true} />
        ),
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: (props) => (
          <EditableCell {...props} updateRecord={updateCellRecord} editable={true} />
        ),
      },
      {
        Header: 'Delete',
        id: 'delete',
        Cell: ({ row }) => (
          <TableCell sx={{ bgcolor: 'error.light' }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteRecord(row.original._id ?? '')}
              sx={{ fontSize: '0.75rem', padding: '4px 8px' }}
            >
              Delete
            </Button>
          </TableCell>
        ),
      },
    ],
    [records, updateRecord]
  );

  // Filter records based on the date range
  const filteredRecords = useMemo(() => {
    if (!startDate || !endDate) return records;
    const filtered = records.filter((record) => {
      const recordDate = new Date(record.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return recordDate >= start && recordDate <= end;
    });
    return filtered;
  }, [records, startDate, endDate]);

  const categoryData = useMemo(() => {
    return filteredRecords.reduce(
      (totals, record) => {
        const category = record.catagoriy.toLowerCase();
        const amount = parseFloat(record.amount) || 0;
        const description = record.discription || '';

        if (amount >= 0) {
          totals.income[category] = totals.income[category] || { total: 0, descriptions: [] };
          totals.income[category].total += amount;
          totals.income[category].descriptions.push(description);
        } else {
          totals.expense[category] = totals.expense[category] || { total: 0, descriptions: [] };
          totals.expense[category].total += amount;
          totals.expense[category].descriptions.push(description);
        }

        return totals;
      },
      { income: {}, expense: {} }
    );
  }, [filteredRecords]);

  const downloadSummary = () => {
    let csvContent = "data:text/csv;charset=utf-8,";

    csvContent += "Income Category, Total, Descriptions\n";
    for (const [category, data] of Object.entries(categoryData.income)) {
      csvContent += `${category}, ${data.total.toFixed(2)}, "${data.descriptions.join(', ')}"\n`;
    }

    csvContent += "\nExpense Category, Total, Descriptions\n";
    for (const [category, data] of Object.entries(categoryData.expense)) {
      csvContent += `${category}, ${Math.abs(data.total).toFixed(2)}, "${data.descriptions.join(', ')}"\n`;
    }

    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, "summary.csv");
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: filteredRecords,
  });

  return (
    <Box sx={{ maxWidth: '100%', mt: 2, mb: 3, bgcolor: 'background.default', p: 2, borderRadius: 2 }}>
      <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        sx={{ mr: 2 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowSummary(!showSummary)}
        sx={{ fontSize: '0.875rem', padding: '6px 12px', ml: 2 }}
      >
        {showSummary ? 'Hide Summary' : 'Show Summary'}
      </Button>
      {showSummary && (
        <Button
          variant="contained"
          color="secondary"
          onClick={downloadSummary}
          sx={{ fontSize: '0.875rem', padding: '6px 12px', ml: 2 }}
        >
          Download Summary
        </Button>
      )}

      <TableContainer sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
        <Table {...getTableProps()}>
          <TableHead sx={{ bgcolor: 'secondary.main' }}>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps()}
                    sx={{
                      color: 'secondary.contrastText',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()} sx={{ '&:nth-of-type(odd)': { bgcolor: 'grey.100' } }}>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()} sx={{ fontSize: '0.875rem' }}>
                      {cell.render('Cell')}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default FinancialRecordList;
