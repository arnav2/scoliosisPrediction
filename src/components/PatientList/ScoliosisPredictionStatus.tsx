import React from 'react'
import { TableCell, Typography } from '@mui/material';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { PredictionStatus, scoliosisPredictionStatusColorMap } from '../../types';
import { styled } from '@mui/system';

const PredictionStatusIcon = styled(CircleRoundedIcon)<{ status: PredictionStatus }>`
    color: ${({ status }) => scoliosisPredictionStatusColorMap[status]};
`;

interface ScoliosisPredictionStatusTableCellProps {
    status: PredictionStatus;
}

const ScoliosisPredictionStatus = ({ status }: ScoliosisPredictionStatusTableCellProps) => {
    return (
        <TableCell sx={{ display: 'flex', flexDirection: 'row',  alignItems: 'center', overflow: 'hidden', gap: '10px' }}>
            <PredictionStatusIcon status={status} sx={{fontSize: 'small'}}/>
            <Typography sx={{ textAlign: 'left' }}>{status}</Typography>
        </TableCell>
    );
}

export default ScoliosisPredictionStatus