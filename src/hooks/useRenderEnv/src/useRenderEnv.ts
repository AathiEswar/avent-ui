import { useEffect,useState } from 'react'
import { renderTypes } from './types';

function useRenderEnv(): renderTypes {
  const isServer : boolean = (typeof window === 'undefined');
  const isClient : boolean = (typeof window !== 'undefined');

  const [ssr, setIsSsr] = useState<renderTypes>({
    isServer: isServer,
    isClient: isClient,
    isLoading: true,
  });

  useEffect(() => {
    setIsSsr({
      isServer: false,
      isClient: true,
      isLoading: false,
    });
  }, []);

  return ssr;
}


export default useRenderEnv
