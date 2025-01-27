export async function fetchLogin(
  email: string,
  password: string,
  csrfToken: string
) {
  const data = await fetch('https://marketplace.backend.wtsdemo.ru/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'csrf-token': `${csrfToken}`,
    },
    body: JSON.stringify({ email, password}),
  });
  const accessToken = await data.json().then((data) => data.data.tokens.accessToken);
  saveAccessTokenLS(accessToken);
}


export function saveAccessTokenLS(accessToken: string) {
  localStorage.setItem('accessToken', accessToken);
}
