import axios from 'axios';
const qs = require('qs');

export const axiosGet = (url: string, option: {params:{page?: Number,size?: Number}, callback:(error:any, data:any) => {} }) => {
  return axios(url,{
    method: 'GET',
    headers: {'Content-Type': 'application/json;charset=UTF-8','mode': 'no-cors'},
    params: option.params,
    'paramsSerializer': function(params) {
      return qs.stringify(params, {arrayFormat: 'repeat'})
    },
  }).then(data => {
    option.callback(null, data);
  }).catch(err => {
    option.callback(err, null)
  })
}