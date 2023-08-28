import React, { createContext } from 'react';
import { en, es } from 'make-plural/plurals';
export const LangProviderContext = createContext(null);
export const defaultLocale = 'en';
export function LangProvider({ children, ...props }) {
  const { i18n } = props;

  const value = {
    i18n: i18n ? i18n : undefined,
  };
  return (
    <LangProviderContext.Provider value={value} {...props}>
      {children}
    </LangProviderContext.Provider>
  );
}
