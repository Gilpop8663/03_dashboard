import axios from 'axios';

interface IArgsProps {
  url: string;
  method: string;
  params: object;
}

class HttpUtil {
  async requestApi(args: IArgsProps) {
    function getApi(url: string, params: object, method: string) {
      const body: object = {
        url: url,
        method: method,
      };

      // baseURL 옵션을 변경하거나 package.json 의 proxy 옵션을 넣어주면 됨.
      return axios({
        baseURL: 'http://localhost:4000/',
        ...body,
        params: params,
      })
        .then((res) => res)
        .catch((err) => err.response);
    }

    const response = await getApi(args.url, args.params, args.method);
    let msg: string = '';

    if (!response) msg = '데이터를 로드 할 수 없습니다.';
    if (response.status !== 200)
      msg =
        '네트워크 통신 중 오류가 발생했습니다. 오류 코드 : [' +
        response.status +
        ']';

    return { data: response, msg };
  }
}

export default new HttpUtil();
