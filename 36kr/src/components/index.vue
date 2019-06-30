<template lang="html">
  <div class="">
    <Header></Header>
     <div class="index_36kr">
       <div class="pagewrap">
         <div class="mainlib_flex_wapper">
           <indexMain />
           <indexRight />
         </div>
       </div>
     </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from './inc/header'
import Footer from './inc/footer'
import indexMain from './index_main'
import indexRight from './index_right'


export default {
  name:'index',
  data(){
    return {}
  },
  components:{Header,Footer,indexMain,indexRight}
}
</script>

<style lang="css">
</style>
