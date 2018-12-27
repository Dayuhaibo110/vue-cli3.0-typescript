import { GET_MOCK, SET_MOCK } from '../type';
import { Commit } from 'vuex';
import { axiosGet } from '@/utils/axiosCallback'

export interface mockState {
  mockData: any[];
}

const state: mockState = {
  mockData: [],
}

const actions = {
  [GET_MOCK]: (
    content: { commit: Commit, state: mockState },
    payload: { size?: Number, page?: Number }
  ) => {
    return new Promise((resolve, reject) => {
      axiosGet('/5c2090a1ebc7220021f1c1f2/mock',{
        params: {
          size: payload.size,
          page: payload.page
        },
        callback: (err: any, data: any): any => {
          if(err){
            console.dir(`${GET_MOCK}: ${err}`);
            reject(err.message);
            return false;
          }
          let datas = data.data;
          if(datas.status !== 'ok') {
            reject(datas.message)
            return false;
          }
          // let datas = data.data.data;
          resolve('获取成功');
          content.commit(GET_MOCK, datas)
        }
      })
    })
  },
  [SET_MOCK]: (content: { commit: Commit, state: mockState },
    payload: { size?: Number, page?: Number }
    ) => {
      console.log(123);
      content.commit(SET_MOCK, 1);
    }
}

const mutations = {
  [GET_MOCK] (state: mockState, data: any) {
    state.mockData = data.data.suborders;
  },
  [SET_MOCK] (state: mockState, data: any) {
    state.mockData = state.mockData.slice(1);
    console.log(state.mockData);
  }

}

export default{
  state,
  actions,
  mutations
}