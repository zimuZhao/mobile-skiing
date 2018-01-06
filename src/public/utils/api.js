import axios from 'axios';
import Q from 'q';
import C from '../conf';

function ajax(url, type, options) {

  return Q.Promise((resolve, reject) => {
    let config = {};
    if (type == 'post') {
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
        params: options,
      }
    }
    axios(config)
      .then((result) => {
        // console.log(result)
        if (result && result.status === 401) {
          // location.href = '/views/401.html'
        }
        if (result && result.status === 200) {

          // if(!result.data.code){
          //   location.href = 'http://ssa.jd.com/sso/login?ReturnUrl='+location.href;
          //   resolve();
          // }

          if (result.data.code === 200) {

            resolve(result.data.data);

          } else if (result.data.code === 403) {

            location.href = './static/html/403.html';

          } else if (result.data.code === 520) {

            console.error({title: result.data.msg});

          } else if (result.data.code === 521) {

            location.href = './static/html/521.html';

          } else if (result.data.code === 401) {
            reject({
              nopms: true,
              msg: result.data.msg
            });
          } else {
            reject({
              error: true,
              msg: result.data.msg
            });
          }
        } else {
          reject({
            errno: result.errno,
            msg: result.msg
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
    const _self = this;
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
    const _self = this;
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
    const _self = this;
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
    const _self = this;
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
    const _self = this;
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
