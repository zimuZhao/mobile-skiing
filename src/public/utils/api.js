import axios from 'axios';
import Q from 'q';
import C from '../conf';
import {Toast} from 'mint-ui';

function ajax(url, type, options) {

  return Q.Promise((resolve, reject) => {
    let config = {};
    if (type === 'post') {
      config = {
        method: type,
        url: C.HOST + url,
        data: options
      }
    } else {
      config = {
        method: type,
        url: C.HOST + url,
        // responseType:'stream',
        params: options
      }
    }
    axios(config)
      .then((result) => {
        if (result && result.status === 401) {
          // location.href = '/views/401.html'
        }
        if (result && result.status === 200) {
          if (result.data.status === 'true' && result.data.status === 'true') {

            resolve(result.data.result);

          } else {
            Toast(result.data.result);
            reject({
              error: true,
              msg: result.data.result
            });
          }
        } else {
          Toast(result.data.result);
          reject({
            errno: true,
            msg: result.data.result
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.request.status === 0) {
          // location.href = 'http://ssa.jd.com/sso/login?ReturnUrl=' + location.href;
        }
      });
  })
}

const config = {
  get(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'get', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  post(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'post', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  put(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'put', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  delete(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'delete', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  jsonp(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'jsonp', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  }
};

export default config;
