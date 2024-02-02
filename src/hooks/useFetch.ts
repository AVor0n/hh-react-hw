import { useState, useEffect } from 'react';

type FetchParams = Parameters<typeof fetch>;

export const useFetch = <R = unknown, E = unknown>(url: FetchParams[0], options?: FetchParams[1]) => {
  const [data, setData] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<E | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(url, options)
      .then<void>(response => {
        const contentType = response.headers.get('content-type');

        if (contentType?.includes('application/json')) {
          return response.json().then(json => setData(json));
        }

        if (contentType?.includes('text/html')) {
          return response.text().then(text => setData(text as R));
        }

        return setData(response as R);
      })
      .catch(err => {
        setError(err as E);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, options]);

  return { data, isLoading, error };
};
