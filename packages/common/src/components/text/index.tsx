// import { Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import React from 'react';
import { useTheme } from 'styled-components';
import { useEnvProvider } from '../../hooks';

export const Text = ({ children }) => {
  const theme = useTheme();
  const { envConfig } = useEnvProvider();
  const { i18n } = useLingui();
  console.log(theme, 'theme');
  console.log(envConfig, 'envConfig');
  console.log(i18n, 'i18n');
  return <div>{children}</div>;
};
