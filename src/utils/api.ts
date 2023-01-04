const BASE_URL =
  'https://port-0-node-express-3vw25lci3y9wi.gksl2.cloudtype.app/requests?';

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
