export async function fetchCsrfToken() {
  const data = await fetch('https://marketplace.backend.wtsdemo.ru/api/csrf');
  const csrfToken = await data.json().then((data) => data.csrfToken);
  return csrfToken;
}
