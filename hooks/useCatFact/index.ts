import { useQuery } from '@tanstack/react-query';
import { CatFact } from '../../interfaces/CatFact';
import { ApiFetchError } from '../../interfaces';

export const fetchCatFact = async (): Promise<CatFact> => {
  const response = await fetch('https://catfact.ninja/fact');

  if (!response.ok) {
    throw new Error(
      `Whoops! We're getting a Response Status: ${response.status}`
    );
  }

  return await response.json();
};

export function useCatFact() {
  return useQuery({
    queryKey: ['CatFact'],
    queryFn: () => fetchCatFact(),
    onError: (err: ApiFetchError) => err,
  });
}
