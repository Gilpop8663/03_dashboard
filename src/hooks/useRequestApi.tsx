import { useEffect, useState } from 'react';
import { HttpUtil } from '../utils';

export interface IRequestParamsProps {
  url: string;
  method: string;
  params: object;
}

export interface IRequestInfoProps {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: Array<string>;
  material: Array<string>;
  status: string;
}

type IResponseProps = {
  data: Array<IRequestInfoProps>;
  msg: string;
};

export default function useRequestApi(args: IRequestParamsProps) {
  const [requestParams, setRequestParams] = useState(args);
  const [response, setResponse] = useState<IResponseProps>();

  useEffect(() => {
    const getData = async () => {
      const res = await HttpUtil.requestApi(requestParams);
      const { msg, data } = res;

      if (!!msg) return;

      setResponse(data);
    };
    getData();
  }, [requestParams]);

  function onApiRequest(params: IRequestParamsProps) {
    setRequestParams(params);
  }

  return { response, onApiRequest };
}
