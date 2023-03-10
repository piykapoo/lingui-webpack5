import React, { createContext } from 'react';

export const EnvProviderContext = createContext(null);

export function EnvProvider({ children, ...props }) {
  const { envConfig } = props;
  const value = {
    envConfig: envConfig ? envConfig : undefined
  };
  return (
    <EnvProviderContext.Provider value={value} {...props}>
      {children}
    </EnvProviderContext.Provider>
  );
}
