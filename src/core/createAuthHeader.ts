export function createAuthHeader(token:any,configs?:any) {
  let headers = {
    // 'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict',
    ...configs
  };

  if (token) {
    Object.assign(headers, {
      Authorization: 'Bearer ' + token,
    });
  }
  return headers;
}
