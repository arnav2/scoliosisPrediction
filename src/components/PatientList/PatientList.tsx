import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TableSortLabel, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import PointCloudData from '../PointCloudModal/PointCloudModal'; 
import { Box } from '@mui/material';

enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

enum SortDirection {
    ASCENDING = 'asc',
    DESCENDING = 'desc',
}

enum UploadStatus {
    NOT_UPLOADED,
    UPLOADING,
    ERROR_UPLOADING,
    UPLOADED,
}

enum PredictionStatus {
    NOT_DECIDED,
    PREDICTING,
    POSITIVE,
    NEGATIVE,
    INCONCLUSIVE,
}

export interface IPatient {
    id: number;
    name: string;
    age: number;
    gender: Gender;
    videoUploadStatus: UploadStatus;
    scoliosisPredictionStatus: PredictionStatus;
    pointCloudData: string;
}

export interface IColumn {
    id: string,
    label: string,
    sortable: boolean,
    orderDirection?: SortDirection
}

interface PatientListProps {
    setOpenModal: (isOpen: boolean) => void;
    openModal: boolean;
    filteredPatients: IPatient[];
}

const columns: IColumn[] = [
    { id: 'id', label: 'Id',  sortable: false },
    { id: 'name', label: 'Name', sortable: true, orderDirection: SortDirection.ASCENDING },
    { id: 'age', label: 'Age',  sortable: false},
    { id: 'gender', label: 'Gender', sortable: false },
    { id: 'videoUploadStatus', label: 'Video Upload Status', sortable: false },
    { id: 'scoliosisPredictionStatus', label: 'Scoliosis Prediction Status', sortable: false },
    { id: 'pointCloudData', label: 'Point Cloud Data', sortable: false },
];

const sort = (patientList: IPatient[], sortColumn: string, sortDirection: SortDirection) => {
    patientList.sort((a, b) => {
        if (sortColumn === 'name') {
          return (sortDirection === SortDirection.ASCENDING ? 1 : -1) * a.name.localeCompare(b.name);
        } else if (sortColumn === 'age') {
            return (sortDirection === SortDirection.ASCENDING ? 1 : -1) * (a.age - b.age);
        }
        return 0;
    });

    return patientList;
}

const PatientList = ({ setOpenModal, openModal, filteredPatients }: PatientListProps) => {

    const [pointCloudData, setPointCloudData] = useState<string>('');
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [page, setPage] = useState<number>(0);
    const [sortColumn] = useState<string>('name'); // For now only support sorting by 1 column

    const [filteredAndSortedPatients, setFilteredAndSortedPatients] = useState<IPatient[]>(filteredPatients);
    const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.ASCENDING); // Default sorting is ascending

    useEffect(() => {
        setFilteredAndSortedPatients(filteredPatients);
        setSortDirection(SortDirection.ASCENDING)
    }, [filteredPatients]);

    useEffect(() => {
        const sortedPatients = sort(filteredAndSortedPatients, sortColumn, sortDirection);
        setFilteredAndSortedPatients(sortedPatients)
    }, [sortColumn, filteredAndSortedPatients, sortDirection]);

    const handleOpenModal = (pointCloudData: string) => {
        setOpenModal(true);
        setPointCloudData(pointCloudData)
    };

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleSortChange = (column: string) => {
        if (sortColumn === column) {
          setSortDirection(prevSortDirection => prevSortDirection === SortDirection.ASCENDING ? SortDirection.DESCENDING : SortDirection.ASCENDING);
        }
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper elevation={6} className="outerContainer flex flex-col items-center mt-6 mx-6 box-border border-4">
            {openModal && (
                <PointCloudData data={pointCloudData} openModal={openModal} setOpenModal={setOpenModal} />
            )} 
            <Typography component='h2' variant='h2' className="text-2xl font-semibold mb-4" sx={{pt: 2}}>Patient List</Typography>
            <TableContainer sx={{background: 'default'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.id}>
                                {column.sortable ? (
                                    <TableSortLabel
                                        active={sortColumn === 'name'}
                                        direction={sortDirection}
                                        onClick={() => handleSortChange('name')}
                                    >
                                        <Typography component='h3' variant='h3'>{column.label}</Typography>
                                    </TableSortLabel>
                                ): (<Typography component='h3' variant='h3'>{column.label}</Typography>
                                )} 
                                
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {filteredAndSortedPatients.length > 0 ? (
                        filteredAndSortedPatients
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(patient => (
                            <TableRow key={patient.id}>
                                <TableCell>{patient.id}</TableCell>
                                <TableCell>{patient.name}</TableCell>
                                <TableCell>{patient.age}</TableCell>
                                <TableCell>{patient.gender}</TableCell>
                                <TableCell>{patient.videoUploadStatus}</TableCell>
                                <TableCell>{patient.scoliosisPredictionStatus}</TableCell>
                                <TableCell><button onClick={() => handleOpenModal(patient.pointCloudData)}>Open Point Cloud Modal</button></TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                                <Typography color="error.main" >No results found</Typography>
                            </TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={filteredAndSortedPatients.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> 
        </Paper>
        
    );
}

export default PatientList;
