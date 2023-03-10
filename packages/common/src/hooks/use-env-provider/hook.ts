import { useContext } from 'react';
import { EnvProviderContext } from './internals';

export function useEnvProvider() {
  const envProviderContext = useContext(EnvProviderContext);
  if (!envProviderContext) {
    throw new Error('You forgot to add <EnvProvider> as a parent.');
  }
  return envProviderContext;
}
