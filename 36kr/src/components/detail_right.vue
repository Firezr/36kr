<template lang="html">
  <div class="rightlib cover_css">
    <div class="pad_inner">
      <div class="author-info">
        <div class="role-writer padding-wrapper right-author">
          <div class="author-avatar">
            <a href="/user/375349" target="_blank"
            class="pointer" style="background-image: url(&quot;http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480&quot;);">
            </a>
          </div>
          <div class="author-info">
            <a class="name pointer" :href="detail.author_href" target="_blank">{{detail.author_title}}</a>
            <span class="kr-tag-arrow-blue kr-size-min">
              <span class="arrow">
                <em></em>
              </span>
              <span>
                资深作者
              </span>
            </span>
          </div>
          <div class="author-desc">签名</div>
          <div class="post-count">
            <span class="icon-article">
            </span>
            <span>共发表 8464 篇</span>
          </div>
          <div class="post-list">
            <h4>
              最近内容
            </h4>
            <ul class="list">
              <li>
                <p class="title">
                  <a href="#" target="_blank">标题标题标题标题</a>
                </p>
                <p class="note am-cf">
                  <span class="time am-fl">
                    时间
                  </span>
                  <span class="tag am-fr">
                    分类
                  </span>
                </p>
              </li>
              <li>
                <p class="title">
                  <a href="#" target="_blank">标题标题标题标题</a>
                </p>
                <p class="note am-cf">
                  <span class="time am-fl">
                    时间
                  </span>
                  <span class="tag am-fr">
                    分类
                  </span>
                </p>
              </li>
              <li>
                <p class="title">
                  <a href="#" target="_blank">标题标题标题标题</a>
                </p>
                <p class="note am-cf">
                  <span class="time am-fl">
                    时间
                  </span>
                  <span class="tag am-fr">
                    分类
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <section class="enter-report">
            <a rel="nofollow" href="#" target="_blank">
              阅读更多内容，狠戳这里
            </a>
          </section>
        </div>
      </div>
      <div class="plan-image plan-lazyload-box"></div>
      <div></div>
      <div class="plan-image plan-lazyload-box"></div>
      <div class="pin-wrapper" style="height: 309px;">
        <div class="custom-pin-wrapper" style="width: 320px;">
          <div>
            <div class="guess-posts-list">
              <h4>
                相关文章
              </h4>
              <ul>
                <li class="top">
                  <a href="#" target="_blank" class="item">
                    <span class="desc">标题标题标题标题标题标题</span>
                  </a>
                </li>
                <li class="top">
                  <a href="#" target="_blank" class="item">
                    <span class="desc">标题标题标题标题标题标题</span>
                  </a>
                </li>
                <li class="top">
                  <a href="#" target="_blank" class="item">
                    <span class="desc">标题标题标题标题标题标题</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="sponsor" style="display: none;">
            <h5>
              <span>
                赞助商
              </span>
            </h5>
            <ul class="am-list am-list-static">
              <li>
              </li>
              <li>
              </li>
              <li>
              </li>
            </ul>
          </div>
          <div class="next-post-wrapper show">
            <h4>
              下一篇
            </h4>
            <div class="item">
              <a href="#" class="title" target="_blank">标题标题标题标题标题</a>
              <div class="tags-list">
                <i class="icon-tag">
                </i>
                <span>
                  <a href="#" target="_blank">标签1</a>
                  <span>，</span>
                </span>
                <span>
                  <a href="#" target="_blank">标签2</a>
                  <span>，</span>
                </span>
                <span>
                  <a href="#" target="_blank">标签3</a>
                </span>
              </div>
            </div>
          </div>
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
  },
}
</script>

<style lang="css">
</style>
