import { useState, useCallback } from 'react';

export const useAsync = <T extends [], R = unknown>(requestMethod: (...args: T) => Promise<R>) => {
  const [data, setData] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const request = useCallback(
    (...args: T) => {
      setIsLoading(true);
      setData(null);
      setError(null);

      requestMethod(...args)
        .then<R>(response => {
          setData(response);
          return response;
        })
        .catch(err => {
          setError('message' in err ? err.message : String(err));
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [requestMethod],
  );

  return { data, isLoading, error, request, setError, setIsLoading, setData };
};
