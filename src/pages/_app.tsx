import 'src/styles/index.scss';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { ROUTERS } from 'routers/Routers';
import useCheckLogin from 'src/hook/useCheckLogin';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const checkLogin = useCheckLogin();
  useEffect(() => {
      if (checkLogin) {
        router.push(ROUTERS.Login)
      }
  }, [checkLogin])

  return <Component {...pageProps} />
}

export default MyApp
