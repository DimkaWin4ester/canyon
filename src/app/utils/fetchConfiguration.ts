export async function fetchConfiguration(accessToken: string) {
  const data = await fetch(
    'https://marketplace.backend.wtsdemo.ru/api/configuration/keys/15',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const configuration = await data
    .json()
    .then((data) => data.data?.configurationKey);
  console.log(configuration);
  return configuration;
}
