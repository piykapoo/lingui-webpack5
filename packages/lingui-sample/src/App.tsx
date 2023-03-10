import './App.css';
import { Text, EnvProvider } from '@sample/common';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { useEffect } from 'react';
import { messages } from './locales/en/messages';
import { ThemeProvider } from 'styled-components';

const App = () => {
  useEffect(() => {
    i18n.load('en', messages);
    i18n.activate('en');
  }, []);

  return (
    <EnvProvider envConfig={{ environment: 'development' }}>
      <ThemeProvider theme={{ color: 'blue' }}>
        <I18nProvider i18n={i18n}>
          <div className='App'>
            <Text>Lingui Webpack5 Context Issue</Text>
          </div>
        </I18nProvider>
      </ThemeProvider>
    </EnvProvider>
  );
};

export default App;
