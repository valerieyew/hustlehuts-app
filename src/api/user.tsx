import request from '../utils/request';

export const createUserAPI = async (data: any) => {
    return request('/api/user/create', {
      method: 'POST',
      data: data,
      })
    .then((res: any) => {
      if (!res || !res?.success) {
        throw new Error(res?.data?.message || '');
      }
      return res;
    });
};