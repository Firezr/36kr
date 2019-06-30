import Vue from 'vue'
import Vuex from 'vuex'

//import User from './user'
//import Article from './article'

Vue.use(Vuex);

function sleep(sec){
  return new Promise((resolve, reject)=>{
    setTimeout(function (){
      resolve();
    }, sec*1000);
  });
}

const store=new Vuex.Store({
  strict: true,     //严格模式——只能由mutation修改状态
  state: {
    loading: false,
    article_list: [],
    cur_page: 0,
    loading_more: false,

    article_data: null,

    detail_date:null
  },
  mutations: {
    loadArticleList(state,arg){
      state.article_list=state.article_list.concat(arg)
    },
    startLoading(state){
      state.loading=true
    },
    endLoading(state){
      state.loading=false
    },
    addPage(state){
      state.cur_page++
    },

    loadDetailData(state,arg){
      state.detail_date=arg
    }
  },
  actions: {
    async loadArticleList({state,commit},arg){
      commit('startLoading')

      await sleep(1)

      let res=await (await fetch(`http://localhost:8090/list?page=${state.cur_page}`)).json()

      commit('endLoading')
      commit('loadArticleList',res)
    },

    async loadDetailData({state,commit},arg){
      let res=await (await fetch(`http://localhost:8090/detail?id=${arg}`)).json()
      commit('loadDetailData',res)
    }
  },
  getters: {
    articleList(state){
      if(state.article_list.length==0){
        store.dispatch('loadArticleList')
      }

      return state.article_list
    }

    /*modules: {
      user:     User,
      article:  Article
    }*/
  }
});

export default store;
