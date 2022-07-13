import 'src/styles/index.scss';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { ROUTERS } from 'routers/Routers';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let getToken = Cookies.get('accessToken')
  useEffect(() => {
      if (!getToken || getToken.length === 0) {
        router.push(ROUTERS.Login)
      }
  }, [getToken])

  return <Component {...pageProps} />
}

export default MyApp
