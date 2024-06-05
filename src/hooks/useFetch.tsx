import { useEffect, useState } from 'react';

import api from '../services/api';
import { useGlobalState } from '../services/context/GlobalStateProvider';

interface FetchResponse<T> {
  data: T;
  isPending: boolean;
  error: Error | null;
  setReload: (value: any) => void;
  reload: number;
}

const useFetch = <T,>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T>({} as T);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { userState } = useGlobalState();
  const [reload, setReload] = useState(1);

  useEffect(() => {
    let isMounted = true;

    async function loadData(): Promise<void> {
      try {
        const response = await api.get(`${url}`, {
          headers: {
            Authorization: `Bearer ${userState.idToken}`,
          },
        });

        if (isMounted) {
          const { data } = response;
          setData(data);
          setIsPending(false);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setIsPending(false);
          setError(err as Error);
        }
      }
    }

    if (userState.idToken) {
      loadData();
    }

    return () => {
      isMounted = false;
    };
  }, [url, userState.idToken, reload]);

  return { data, isPending, error, setReload, reload };
};

export default useFetch;
