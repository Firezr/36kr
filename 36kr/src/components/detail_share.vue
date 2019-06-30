<template lang="html">
  <div class="share-nav-h5">
    <div class="inner">
      <div class="box am-cf">
        <div class="each-cell">
          <span class="icon-collect cell">
          </span>
        </div>
        <div class="each-cell">
          <span class="icon-comments cell">
          </span>
        </div>
        <div class="each-cell">
          <a class="icon-weibo weibo cell" href="http://share.baidu.com/s?type=text&amp;searchPic=1&amp;sign=on&amp;to=tsina&amp;key=595885820&amp;url=http://36kr.com/p/5127978.html&amp;title=%E7%8B%AC%E8%A7%92%E5%85%BD%E5%BD%92%E6%9D%A5%EF%BC%9A%E6%9C%BA%E9%81%87%E5%92%8C%E9%A3%8E%E9%99%A9">
          </a>
        </div>
        <div class="each-cell">
          <span class="icon-back-top back cell">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    detail(){
      return this.$attrs.data
    }
  }
}
</script>

<style lang="css">
</style>
