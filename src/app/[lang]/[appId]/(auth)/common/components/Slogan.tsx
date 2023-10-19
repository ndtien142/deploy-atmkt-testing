'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Slogan = () => {
    return ( 
        <Box width={'100%'} sx={{
            ml: '20%',
            mt: 4
        }}>
            <Typography variant='h2'>
                Chào mừng đến với ShopGrocery
            </Typography>
            <Typography color={'#1F8A70'} variant={'h4'}>
                #Căn bếp xanh của mọi nhà
            </Typography>
        </Box>
     );
}
 
export default Slogan;
