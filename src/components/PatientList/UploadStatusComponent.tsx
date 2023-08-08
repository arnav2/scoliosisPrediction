import React from 'react'
import { TableCell, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { UploadStatus, uploadStatusColorMap } from '../../types';

const UploadStatusTableCell = styled(TableCell)<UploadStatusTableCellProps>(({ status }) => ({
    color: uploadStatusColorMap[status], // Apply the color based on status
}));

interface UploadStatusTableCellProps {
    status: UploadStatus;
}

const UploadStatusComponent = ({ status }: UploadStatusTableCellProps) => {
    return (
        <UploadStatusTableCell status={status}>
          <Typography sx={{textAlign: 'left'}}>{status}</Typography>
        </UploadStatusTableCell>
    );
}

export default UploadStatusComponent