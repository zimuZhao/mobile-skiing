import Q from 'q';
import CONF from '@/public/components/conf';
import API from '@/public/utils/api';
import { formatMoney } from '@/public/utils/format'

const M = CONF['login'];

if (process.env.STATS === 'dev') M.MOCK ? require('./mock') : '';

/**
 * [加工 接口返回的原始数据]
 * @param   [原始数据]
 * @return  [格式化后数据]
 */
const formatResult = (data) => {
  if (!data) return 'null';
};

export default {
  get: (params) => {
    return Q.Promise((resolve, reject) => {
      API.get(M['API']['GET'], params).then((data) => {
        resolve(data);
      });
    });
  }
}
