import { useContext } from 'react';
import { LangProviderContext } from './internals';

export function useLangProvider() {
  const langProviderContext = useContext(LangProviderContext);
  if (!langProviderContext) {
    throw new Error('You forgot to add <LangProvider> as a parent.');
  }
  return langProviderContext;
}
