const BASE_URL = 'https://dry-hollows-03672.herokuapp.com/requests?';

export const getData = (
  method?: string,
  material?: string,
  status?: string
) => {
  let REQUEST_URL = BASE_URL;
  if (method) {
    REQUEST_URL += `method_like=${method}`;
  }
  if (material) {
    REQUEST_URL += `&material_like=${material}`;
  }
  if (status) {
    REQUEST_URL += `&status=${status}`;
  }
  return fetch(REQUEST_URL).then((res) => res.json());
};
