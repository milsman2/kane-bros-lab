import { useQuery } from '@tanstack/react-query';
import { ICatFact } from '../../src/lib/interfaces/ICatFact';

export const fetchICatFact = async (): Promise<ICatFact> => {
  return await (await fetch('https://catfact.ninja/fact')).json();
};

export function useCatFact() {
  return useQuery<ICatFact, Error>(['ICatFact'], () => fetchICatFact());
}
