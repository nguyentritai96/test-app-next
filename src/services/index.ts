// Libraries
import axios from 'axios';

// Constants
import { appConfigs } from '@constants';

axios.defaults.timeout = appConfigs.REQUEST_TIMEOUT;

const defaults = {
  baseURL: appConfigs.API_DOMAIN,
  headers: () => ({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer `,
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message: 'Có lỗi xảy ra, vui lòng thử lại sau ít phút !',
    status: 503,
    data: {},
  },
};

const api = async (
  method: string,
  url: string,
  params: object,
  options: {
    isOriginalUrl: boolean;
  },
) => {
  const headers = defaults?.headers();
  let variables = { ...params };
  const { isOriginalUrl } = options;

  if (variables && variables?.formData) {
    variables = variables?.formData;
    headers['Content-Type'] = 'multipart/form-data; charset=utf-8';
  }

  return axios({
    url: isOriginalUrl ? url : defaults?.baseURL + url,
    method,
    headers,
    params: method === 'get' ? variables : undefined,
    data: method !== 'get' ? variables : undefined,
  })
    .then((response) => {
      const data = response?.data || {};
      return data;
    })
    .catch((error) => {
      const data = error?.response?.data || {};
      return data;
    });
};

export default {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
};
