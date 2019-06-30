<template lang="html">
  <div class="mainlib" v-if='detail'>
    <div class="center_content">
      <div class="content-wrapper">
        <div class="article-section">
          <div class="mobile_article">
            <h1>{{detail.title}}</h1>
            <div class="content-font">
              <div class="am-cf author-panel">
                <div class="author am-fl">
                  <a :href="detail.author_title" class="am-fl">
                    <span class="name">{{detail.author_title}}</span>
                  </a>
                  <span class="time am-fl">
                    <span class="dot">&nbsp;•&nbsp;</span>
                    <abbr class="time">{{detail.time|getTime}}</abbr>
                  </span>
                  <span class="time am-fl">
                    <span class="dot">&nbsp;•&nbsp;</span>
                    <abbr class="time">{{detail.tag}}</abbr>
                  </span>
                </div>
              </div>
              <section class="summary">{{detail.summary}}</section>
              <div>
                <section class="textblock" v-html="detail.article['detailArticle|post'].content"></section>
                <section class="article-footer-label">
                  <div>
                    <div>
                      本文经授权发布，不代表36氪立场。如若转载请联系原作者。
                    </div>
                  </div>
                </section>

                <div class="article-footer-ad">
                  <div class="plan-image plan-lazyload-box">
                  </div>
                </div>
              </div>
              <section class="ad">
              </section>
              <section class="single-post-tags">
                <a class="kr-tag-gray" href="/tags/jinrong" target="_blank">标签1</a>
                <a class="kr-tag-gray" href="/tags/xiaofei" target="_blank">标签2</a>
              </section>
              <div class="fav-wrapper">
                <div class="common-post-like-wrapper">
                  <a class="post-pc-like">
                    <span class="icon-ic_like">
                    </span>
                    <span style="margin-left: 4px;">赞</span>
                  </a>
                  <span class="count-box" style="display: block;">
                    <span class="count kr-animated">+1</span>
                  </span>
                </div>
              </div>
              <div class="share-nav">
                <div class="inner fixed" style="width: 720px;">
                  <div class="box am-cf">
                    <div class="share-author am-cf am-fl">
                      <a href="/user/375349">
                        <img class="avatar" src="static/img/head_50.jpg" alt="">
                        <span class="name">{{detail.author_title}}</span>
                      </a>
                      <span class="kr-tag-arrow-blue kr-size-min">
                        <span class="arrow">
                          <em></em>
                        </span>
                        <span>资深作者</span>
                      </span>
                    </div>
                    <div class="other-ctrl ctrl-box am-fr">
                      <span class="icon-readmode pure-read cell">
                        <div class="tip">
                          <div class="inner-box">
                            <span class="kr-arrow-down kr-arrow">
                              <span></span>
                            </span>
                            <div>
                              <p>“点击”尽享阅读沉浸模式,</p>
                              <p>沉浸模式下点击右上角按钮返回</p>
                            </div>
                          </div>
                        </div>
                      </span>
                      <span class="icon-back-top back cell"></span>
                    </div>
                    <div class="share-ctrl ctrl-box am-fr">
                      <span class="icon-weixin wechat cell">
                        <div class="tip">
                          <div class="inner-box">
                            <span class="kr-arrow-down kr-arrow">
                              <span></span>
                            </span>
                            <div class="am-cf">
                              <div class="img-box am-fl">
                                <img src="static/">
                              </div>
                              <div class="txt">
                                <p>
                                  打开微信"扫一扫",
                                </p>
                                <p>
                                  打开网页后点击屏幕
                                </p>
                                <p>
                                  右上角"分享"按钮
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                      <a class="icon-weibo weibo cell" target="_blank" href="">
                      </a>
                    </div>
                    <div class="user-ctrl ctrl-box am-fr">
                      <span class="icon-collect-min cell">
                        <b class="count-min">0</b>
                        <span class="count kr-animated ">+1</span>
                      </span>
                      <span class="icon-comment-min cell">
                        <b class="count-min">0</b>
                      </span>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h5-author-info am-cf">
                <div class="img-box am-fl">
                  <a href="/user/375349" target="_blank">
                    <img src="static/img/head_50.jpg">
                  </a>
                </div>
                <div class="info">
                  <p class="name">
                    <a :href="detail.author_href" target="_blank">{{detail.author_title}}</a>
                    <span class="kr-tag-arrow-blue kr-size-min">
                      <span class="arrow">
                        <em></em>
                      </span>
                      <span>资深作者</span>
                    </span>
                  </p>
                  <p class="intro">签名</p>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
          <div class="mobile_article">
            <section class="single-post-comment">
              <h4>
                <a name="comment" class="comment-list-title comment-title">
                  参与讨论
                </a>
              </h4>
              <div class="input-module notlogin">
                <div class="textarea-wrapper">
                  <textarea disabled="" placeholder="请登录后参与评论...">
                  </textarea>
                  <div class="user">
                    <button type="button" disabled="" title="请登录后参与评论">
                      <a href="#">
                        提交评论
                      </a>
                    </button>
                    <div class="current-user">
                      <span class="img" style="background: url(img/f3a5016d8jzc4auz.png) center center / 80% no-repeat rgb(241, 241, 241);">
                      </span>
                      <a href="#" class="name">
                        登录
                      </a>
                      <span>
                        后参与讨论
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="display-module">
              </div>
            </section>
          </div>
          <div class="related-articles-h5">
            <h4>
              相关文章
            </h4>
            <div class="list">
              <div class="each-cell am-cf">
                <div class="img-box">
                  <a href="/p/5126058.html?from=related" target="_blank" style="background-image: url(img/t1.jpg);">
                  </a>
                </div>
                <div class="info">
                  <p class="name">
                    <a target="_blank" href="#">标题</a>
                  </p>
                  <p class="note">
                    <span>文</span>
                    <span>/</span>
                    <a target="_blank" href="/user/375349">作者</a>
                  </p>
                </div>
              </div>
              <div class="each-cell am-cf">
                <div class="img-box">
                  <a href="/p/5126058.html?from=related" target="_blank" style="background-image: url(img/t1.jpg);">
                  </a>
                </div>
                <div class="info">
                  <p class="name">
                    <a target="_blank" href="#">标题</a>
                  </p>
                  <p class="note">
                    <span>文</span>
                    <span>/</span>
                    <a target="_blank" href="/user/375349">作者</a>
                  </p>
                </div>
              </div>
              <div class="each-cell am-cf">
                <div class="img-box">
                  <a href="/p/5126058.html?from=related" target="_blank" style="background-image: url(img/t1.jpg);">
                  </a>
                </div>
                <div class="info">
                  <p class="name">
                    <a target="_blank" href="#">标题</a>
                  </p>
                  <p class="note">
                    <span>文</span>
                    <span>/</span>
                    <a target="_blank" href="/user/375349">作者</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="post-detail-plan-bottom">
        <div class="plan-image plan-lazyload-box">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from '@/libs/common'


export default {
  computed:{
    detail(){
      return this.$attrs.data
    }
  },
  filters:{
    getTime:common.getTime
  }
}
</script>

<style lang="css">
</style>
