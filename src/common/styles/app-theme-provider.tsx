'use client';

import React from 'react';
import palette from './palette';
import ThemeProvider from './index';

export default function AppThemeProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  return <ThemeProvider>{children}</ThemeProvider>;
}
