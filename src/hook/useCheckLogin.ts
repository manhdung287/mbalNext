import React from 'react'
import Cookies from 'js-cookie';

function useCheckLogin() {
  let getToken = Cookies.get('accessToken')
  const checkIsToken = !getToken || getToken?.length === 0;
  return checkIsToken;
}

export default useCheckLogin