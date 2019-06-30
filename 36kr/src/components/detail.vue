<template lang="html">
  <div class="">
    <Header></Header>

    <div class="pagewrap pagewrap-full">
      <div class="article-detail">
        <div class="post-wrapper">
          <div class="post-detail-con-box full-reading mainlib_flex_wapper">
            <detailMain :data='details'/>
            <detailRight :data='details' />
          </div>
        </div>
      </div>
      <Share :data='details'/>
      <articleDetail />
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './inc/header'
import Footer from './inc/footer'

import detailMain from './detail_main'
import detailRight from './detail_right'
import Share from './detail_share'
import articleDetail from './detail_article_detail'

export default {
  name:'Detail',
  components:{
    Header,Footer,detailMain,detailRight,Share,articleDetail
  },
  mounted(){
    let id=this.$route.params.id
    console.log(id);
    return this.$store.dispatch('loadDetailData',id)
  },
  computed:{
    details(){
      return this.$store.state.detail_date
    }
  }
}
</script>

<style lang="css">
</style>
