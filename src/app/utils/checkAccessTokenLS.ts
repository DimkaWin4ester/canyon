export async function checkAccessTokenLS() {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return accessToken;
  } else {
    const data = await fetch('https://marketplace.backend.wtsdemo.ru/api/login/');
    const accessToken = await data.json().then((data) => data.accessToken);
    return accessToken;
  }
}
