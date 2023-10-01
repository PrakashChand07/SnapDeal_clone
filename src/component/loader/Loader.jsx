import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack   sx={{
        color: 'grey.500',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '200px',
      }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
    </Stack>
  );
}