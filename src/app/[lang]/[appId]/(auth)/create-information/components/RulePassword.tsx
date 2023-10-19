'use client';

import { Box, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

export const RulePassword = () => {
  const bulletPointUnicode = '\u2022';
  const { t } = useTranslation('auth');
  return (
    <Box
      sx={{
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#737B7B',
        borderRadius: '8px',
        mt: 4
      }}
    >
      <Stack spacing={0.5} alignItems={'flex-start'} m={2}>
        <Typography fontSize={'12px'} color={'#737B7B'}>
          {t('rule_password')}:
        </Typography>
        <Stack direction={'row'} spacing={2}>
          <Typography fontSize={'12px'} color={'#737B7B'} ml={1}>
            {bulletPointUnicode}
          </Typography>
          <Typography fontSize={'12px'} color={'#737B7B'}>
            {t('1_number_character')}
          </Typography>
        </Stack>
        <Stack direction={'row'} spacing={2} ml={1}>
          <Typography fontSize={'12px'} color={'#737B7B'} ml={1}>
            {bulletPointUnicode}
          </Typography>
          <Typography fontSize={'12px'} color={'#737B7B'}>
            {t('10_letter_characters')}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
