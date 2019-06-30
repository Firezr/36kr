<template lang="html">
  <div>
    <div class="">
      <div>
        <div class="kr_article_list">
          <div>
            <ul class="feed_ul" >
              <li v-for='item in articleList' >
                <div class="am-cf inner_li inner_li_abtest">
                  <span class="undefined mark h5_mark">{{item.tag}}</span>
                  <router-link :to="{ name: 'datail', params: {id:item.id} }">
                    <div class="img_box list-img-loaded">
                      <div>
                        <img alt="标题" class="load-img fade" :src='item|getImgUrl'>
                      </div>
                      <span class=" undefined mark pc_mark">{{item.tag}}</span>
                    </div>
                    <div class="intro">
                      <h3>{{item.title}}</h3>
                      <div class="abstract">{{item.summary}}</div>
                    </div>
                  </router-link>
                  <div class="info">
                    <div class="info-list info-list-abtest">
                      <div class="user-info">
                        <a :href="item.author.href" class="name">{{item.author.title}}</a>
                        <span class="oblique_line">·</span>
                      </div>
                      <div class="time-div">
                        <span class="time" :title="item.time*1000|getTime">{{item.time*1000|getTime}}</span>
                        <span class="time h5_time">{{item.time*1000|getTime}}</span>
                      </div>
                    </div>
                    <div class="tags-list">
                      <i class="icon-tag">
                      </i>
                      <span v-for='data,index in item.catalogs'>
                        <a :href="data.href">{{data.name}}</a>
                        <span v-if='index < item.catalogs.length-1'>，</span>
                      </span>

                    </div>
                    <div class="comments-list">
                      <span class="comments">
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="loading_more" @click='loadMore'>
          {{loading?'loading...':'浏览更多'}}
          <span class="icon-arrow-right"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from '@/libs/common'

export default {
  name:'indexMainList',
  date(){
    return {}
  },
  mouted(){

  },
  methods:{
    loadMore(){
      this.$store.dispatch('loadArticleList')
    }

  },
  filters:{
    getTime:common.getTime,
    getImgUrl(item){
      return `http://localhost:8090/img?src=${item.src}`
    }
  },
  computed:{
    loading(){
      return this.$store.state.loading
    },
    articleList(){
      return this.$store.getters.articleList
    }
  }
}
</script>

<style lang="css">
</style>
