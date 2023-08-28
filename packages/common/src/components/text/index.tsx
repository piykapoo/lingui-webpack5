import { t, Trans } from '@lingui/macro';
import { I18nProvider } from '@lingui/react';
import { useLingui } from '@lingui/react';
import React from 'react';
import { useTheme } from 'styled-components';
import { useEnvProvider, useLangProvider } from '../../hooks';

export const Text = ({ children }) => {
  const theme = useTheme();
  const { envConfig } = useEnvProvider();
  const { i18n } = useLangProvider();
  console.log(theme, 'theme');
  console.log(envConfig, 'envConfig');
  console.log(i18n, 'i18n');
  return <> 
  <I18nProvider i18n={i18n}>
    <div>{children}</div>
  </I18nProvider></>;
};