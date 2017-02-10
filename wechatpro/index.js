var ejs=require('ejs');
var heredoc=require('heredoc')

var tpl=heredoc(function(){/*
<!DOCTYPE html>
<html>
  <head>
    <link href="../css/reset.css" rel="stylesheet">
    <link href="../css/header.css" rel="stylesheet">
    <script src="../lib/js/jquery-1.12.4.min.js" type="text/javascript"></script>
    <script src="../layer/layer.js" type="text/javascript"></script>
    <script src="../js/detail.js" type="text/javascript"></script>
  </head>
  <body style="zoom:1.2;">
    <header>
      <div class="wd-title-container">
        <ul class="left-logo-name">
          <li class="wd-common-name"><a href="index.html">万店联盟</a></li>
        </ul>
        <ul class="right-menu-area">
          <li class="wd-login-reg"><span><a>登录</a>|</span><span><a>注册</a></span></li>
          <li class="wd-mye"><a>我的e+</a></li>
          <li class="wd-myphone"><a>我的手机e+</a></li>
          <li class="wd-focus-e"><a>关注e+</a></li>
          <li class="wd-serve-cus"><a>客服服务</a></li>
        </ul>
      </div>
      <div class="wd-logo-container">
        <div class="logoImage"><a><img src="../img/header/logo.png"></a></div>
        <div class="wd-search-area">
          <form class="logo-search-form">
            <input type="text" placeholder="万店联盟搜索" class="search-text">
            <input type="button" value="搜索" class="search-btn">
          </form>
          <div class="hotwords"><a>奶糖</a><a>红枣</a></div>
        </div>
        <div class="wd-shoppinglist-small">
          <div class="showshopping-con">去购物车结算<span>(0)</span></div>
        </div>
      </div>
    </header>
    <div class="wd-nav-area-bg">
      <ul class="wd-nav-area">
        <li><a href="#category">分类</a></li>
        <li class="surprise"><a>首页有惊喜</a></li>
        <li><a href="#food">美食馆</a></li>
        <li><a href="#game">休闲娱乐</a></li>
        <li><a href="#travel">旅游出行</a></li>
        <li><a href="#hotel">住宿</a></li>
        <li><a href="#life">生活服务</a></li>
        <li><a href="#shopping">购物</a></li>
      </ul>
    </div>
    <link href="../css/index.css?v=1" rel="stylesheet">
    <script src="../js/index.js"></script>
    <div class="hidden-area">
      <div class="wait"></div>
    </div>
    <div class="alert-area">
      <div class="close"> </div>
      <div class="add-goods-box">
        <div class="pro-success"><img src="../img/download.png"></div>
        <p class="text-redirect">感谢您的信任,网站正在试运行中,如有需要,请扫描二维码下载手机APP,如有意见请发送邮件</p>
      </div>
    </div>
    <div id="LoutiNav">
      <ul>
        <li class="hover"> <img src="../img/alliance/food.png"><span>美食</span></li>
        <li> <img src="../img/alliance/shopping.png"><span>购物</span></li>
        <li> <img src="../img/alliance/game.png"><span>休闲娱乐</span></li>
        <li> <img src="../img/alliance/serve.png"><span>生活服务</span></li>
        <li> <img src="../img/alliance/travel.png"><span>旅游出行</span></li>
        <li> <img src="../img/alliance/atay.png"><span>住宿</span></li>
        <li class="last">Top</li>
      </ul>
    </div>
    <div class="banner-wrapper">
      <div class="banner-area">
        <ul class="notice-pic clearfix">
          <li><img src="../img/ban01.png"></li>
          <li><img src="../img/ban02.png"></li>
          <li><img src="../img/ban03.png"></li>
          <li><img src="../img/ban01.png"></li>
          <li><img src="../img/ban02.png"></li>
          <li><img src="../img/ban03.png"></li>
        </ul>
      </div>
      <div class="right-spec">
        <div class="compersive-area"><img src="../img/test11.png" style="width:100%;height:100%;"></div>
        <div class="down-area"><img src="../img/download.jpg"></div>
      </div>
    </div>
    <div class="feature-wrapper">
      <div class="feature">
                <div class="feature-sub-con">
                  <dl class="clearfix">
                    <dt> <img src="../img/feature.png"></dt>
                    <dd>
                      <h4>天天低价</h4>
                      <p>人工审核震撼低价</p>
                    </dd>
                  </dl>
                </div>
                <div class="feature-sub-con">
                  <dl class="clearfix">
                    <dt> <img src="../img/feature.png"></dt>
                    <dd>
                      <h4>正品保证</h4>
                      <p>人工审核震撼低价</p>
                    </dd>
                  </dl>
                </div>
                <div class="feature-sub-con">
                  <dl class="clearfix">
                    <dt> <img src="../img/feature.png"></dt>
                    <dd>
                      <h4>7天无理由退货</h4>
                      <p>人工审核震撼低价</p>
                    </dd>
                  </dl>
                </div>
      </div>
    </div>
    <div class="special-title">
      <h3><span>年货节 SPRING FESTIVAL</span></h3>
    </div>
    <div class="special-con">
      <div class="img-con-wrapper testDown">
        <div class="img-wrapper"><img src="../img/img01.png"></div>
        <div class="img-wrapper"><img src="../img/img02.png"></div>
        <div class="img-wrapper"><img src="../img/img03.png"></div>
      </div>
    </div>
    <div class="special-title">
      <h3><span>巧手主妇 HOUSEWIFE</span></h3>
    </div>
    <div class="special-con">
      <div class="img-con-wrapper testDown">
        <div class="img-wrapper"><img src="../img/img04.png"></div>
        <div class="img-wrapper"><img src="../img/img05.png"></div>
        <div class="img-wrapper"><img src="../img/img06.png"></div>
      </div>
    </div>
    <div class="special-title">
      <h3><span>异业联盟 ALLLIANCE</span></h3>
    </div>
    <div id="main">
            <div id="food" class="allliance-area Louti">
              <div class="sort-liance"><img src="../img/alliance/food.png" class="iconImage">
                <ul>
                  <li class="left-sort-area"><a>美食</a></li>
                  <li class="right-sort-area"><a>美食 </a>|<a>代金券</a></li>
                </ul>
              </div>
              <div class="liance-con-wrapper">
                <div class="liance-con">
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-1.html"><img src="../img/food/dingdinghong1.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-1.html">金水区鼎鼎红</a></div>
                      <div class="price-box"><span class="single-price">￥32.20</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-2.html"><img src="../img/food/dingdinghong2.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-2.html">百年老妈</a></div>
                      <div class="price-box"><span class="single-price">￥14.72</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-3.html"><img src="../img/food/dingdinghong3.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-3.html">华都酒店</a></div>
                      <div class="price-box"><span class="single-price">￥79.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-4.html"><img src="../img/food/dingdinghong4.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-4.html">八哥酸辣粉</a></div>
                      <div class="price-box"><span class="single-price">￥7.90</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-5.html"><img src="../img/food/dingdinghong3.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-5.html">蜀香家宴酒楼</a></div>
                      <div class="price-box"><span class="single-price">￥89.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-6.html"><img src="../img/food/dingdinghong2.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-6.html">郑家小面故事</a></div>
                      <div class="price-box"><span class="single-price">￥38.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-7.html"><img src="../img/food/bainianlaoma2.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-7.html">金记饺子馆</a></div>
                      <div class="price-box"><span class="single-price">￥18.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-8.html"><img src="../img/food/wenzhoumianguan5.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-8.html">温州面馆</a></div>
                      <div class="price-box"><span class="single-price">￥28.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-9.html"><img src="../img/food/bage1.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-9.html">洛阳牛肉汤</a></div>
                      <div class="price-box"><span class="single-price">￥18.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-10.html"><img src="../img/food/shuxiangjiayan3.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-10.html">龙哥的面</a></div>
                      <div class="price-box"><span class="single-price">￥18.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-11.html"><img src="../img/food/shuxiangjiayan4.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-11.html">莆田人家</a></div>
                      <div class="price-box"><span class="single-price">￥88.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-12.html"><img src="../img/food/shuxiangjiayan5.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-12.html">米知味</a></div>
                      <div class="price-box"><span class="single-price">￥89.90</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-13.html"><img src="../img/food/shuxiangjiayan8.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-13.html">博爱牛肉丸子汤</a></div>
                      <div class="price-box"><span class="single-price">￥9.50</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-14.html"><img src="../img/food/shuxiangjiayan6.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-14.html">沙县小吃</a></div>
                      <div class="price-box"><span class="single-price">￥13.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-food-15.html"><img src="../img/food/shuxiangjiayan7.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-food-15.html">鸡小呆</a></div>
                      <div class="price-box"><span class="single-price">￥12.80</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="shopping" class="allliance-area Louti">
              <div class="sort-liance"><img src="../img/alliance/shopping.png" class="iconImage">
                <ul>
                  <li class="left-sort-area"><a>购物</a></li>
                  <li class="right-sort-area"><a>购物 </a>|<a>代金券</a></li>
                </ul>
              </div>
              <div class="liance-con-wrapper">
                <div class="liance-con">
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-shopping-01.html"><img src="../img/shopping/1.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-shopping-01.html">e+便利店（升龙环球大厦)</a></div>
                      <div class="price-box"><span class="single-price">￥24</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-shopping-02.html"><img src="../img/shopping/13.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-shopping-02.html">康乐渔具</a></div>
                      <div class="price-box"><span class="single-price">￥14.72</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-shopping-03.html"><img src="../img/shopping/21.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-shopping-03.html">左右间超市（东明路店）</a></div>
                      <div class="price-box"><span class="single-price">￥24</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-shopping-04.html"><img src="../img/shopping/28.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-shopping-04.html">e+便利店（凤台路店）</a></div>
                      <div class="price-box"><span class="single-price">￥24</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-shopping-05.html"><img src="../img/shopping/35.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-shopping-05.html">e+便利店（大学路丹尼斯店）</a></div>
                      <div class="price-box"><span class="single-price">￥24</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="game" class="allliance-area Louti">
              <div class="sort-liance"><img src="../img/alliance/game.png" class="iconImage">
                <ul>
                  <li class="left-sort-area"><a>休闲娱乐</a></li>
                  <li class="right-sort-area"><a>休闲娱乐 </a>|<a>代金券</a></li>
                </ul>
              </div>
              <div class="liance-con-wrapper">
                <div class="liance-con">
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-entertainment-01.html"><img src="../img/entertainment/entertainment03.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-entertainment-01.html">【麦子乐器（英协路）吉尔11C/个】</a></div>
                      <div class="price-box"><span class="single-price">￥580.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-entertainment-14.html"><img src="../img/entertainment/entertainment23.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-entertainment-14.html">第1真人密室逃脱（国贸店）</a></div>
                      <div class="price-box"><span class="single-price">￥58.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-entertainment-03.html"><img src="../img/entertainment/entertainment15.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-entertainment-03.html">微笑美乐迪量贩KTV</a></div>
                      <div class="price-box"><span class="single-price">￥48.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-entertainment-04.html"><img src="../img/entertainment/entertainment07.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-entertainment-04.html">【舒经堂足道（东明路店）中药足浴/次】</a></div>
                      <div class="price-box"><span class="single-price">￥58.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-entertainment-05.html"><img src="../img/entertainment/shop3.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-entertainment-05.html">【舒经堂足道（东明路店）玫瑰足浴+手部按摩/次】</a></div>
                      <div class="price-box"><span class="single-price">￥78.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="life" class="allliance-area Louti">
              <div class="sort-liance"><img src="../img/alliance/serve.png" class="iconImage">
                <ul>
                  <li class="left-sort-area"><a>生活服务</a></li>
                  <li class="right-sort-area"><a>生活服务 </a>|<a>代金券</a></li>
                </ul>
              </div>
              <div class="liance-con-wrapper">
                <div class="liance-con">
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-01.html"><img src="../img/life/5.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-01.html">唯艺造型（管城后街店）</a></div>
                      <div class="price-box"><span class="single-price">￥24</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-02.html"><img src="../img/life/11.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-02.html">北京中关村皇冠假日酒店</a></div>
                      <div class="price-box"><span class="single-price">￥200</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-03.html"><img src="../img/life/14.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-03.html">郑州中原驾校</a></div>
                      <div class="price-box"><span class="single-price">￥2700</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-04.html"><img src="../img/life/22.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-04.html">源之林经络减肥美容店</a></div>
                      <div class="price-box"><span class="single-price">￥80</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-05.html"><img src="../img/life/31.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-05.html">金水桶</a></div>
                      <div class="price-box"><span class="single-price">￥80</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-06.html"><img src="../img/life/47.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-06.html">牵喜婚庆</a></div>
                      <div class="price-box"><span class="single-price">￥240</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-07.html"><img src="../img/life/44.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-07.html">开门红</a></div>
                      <div class="price-box"><span class="single-price">￥210</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-08.html"><img src="../img/life/49.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-08.html">你好漂亮专业美发</a></div>
                      <div class="price-box"><span class="single-price">￥24</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-09.html"><img src="../img/life/57.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-09.html">商城黄焖鸡米饭</a></div>
                      <div class="price-box"><span class="single-price">￥27</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-10.html"><img src="../img/life/67.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-10.html">巧街坊</a></div>
                      <div class="price-box"><span class="single-price">￥16</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-11.html"><img src="../img/life/74.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-11.html">郑家小面故事</a></div>
                      <div class="price-box"><span class="single-price">￥18</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-12.html"><img src="../img/life/82.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-12.html">北京大鸭梨</a></div>
                      <div class="price-box"><span class="single-price">￥40</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-13.html"><img src="../img/life/91.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-13.html">状元郎韩式自助烤肉</a></div>
                      <div class="price-box"><span class="single-price">￥180</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-14.html"><img src="../img/life/100.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-14.html">农夫大盘鸡</a></div>
                      <div class="price-box"><span class="single-price">￥45</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-service-15.html"><img src="../img/life/109.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-service-15.html">美家快捷</a></div>
                      <div class="price-box"><span class="single-price">￥160</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="travel" class="allliance-area Louti">
              <div class="sort-liance"><img src="../img/alliance/travel.png" class="iconImage">
                <ul>
                  <li class="left-sort-area"><a>旅行</a></li>
                  <li class="right-sort-area"><a>旅行 </a>|<a>代金券</a></li>
                </ul>
              </div>
              <div class="liance-con-wrapper">
                <div class="liance-con">
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-01.html"><img src="../img/travelImage/detail-01-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-01.html">郑州方特欢乐世界</a></div>
                      <div class="price-box"><span class="single-price">￥80</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-02.html"><img src="../img/travelImage/detail-02-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-02.html">雁鸣湖凌云温泉</a></div>
                      <div class="price-box"><span class="single-price">￥95</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-03.html"><img src="../img/travelImage/detail-03-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-03.html">郑州新区如意湖景区</a></div>
                      <div class="price-box"><span class="single-price">￥48</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-04.html"><img src="../img/travelImage/detail-04-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-04.html">香堤湾温泉</a></div>
                      <div class="price-box"><span class="single-price">￥120</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-05.html"><img src="../img/travelImage/detail-05-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-05.html">郑国车马坑景区</a></div>
                      <div class="price-box"><span class="single-price">￥25</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-06.html"><img src="../img/travelImage/detail-06-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-06.html">洛阳龙门海洋馆</a></div>
                      <div class="price-box"><span class="single-price">￥60</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-07.html"><img src="../img/travelImage/detail-07-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-07.html">重渡沟风景区</a></div>
                      <div class="price-box"><span class="single-price">￥70</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-08.html"><img src="../img/travelImage/detail-08-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-08.html">河南栾川老君山</a></div>
                      <div class="price-box"><span class="single-price">￥120</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-09.html"><img src="../img/travelImage/detail-09-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-09.html">鸡冠洞</a></div>
                      <div class="price-box"><span class="single-price">￥140</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-10.html"><img src="../img/travelImage/detail-10-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-10.html">郑州中国绿化博览园</a></div>
                      <div class="price-box"><span class="single-price">￥160</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-11.html"><img src="../img/travelImage/detail-11-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-11.html">世纪欢乐园</a></div>
                      <div class="price-box"><span class="single-price">￥180</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-12.html"><img src="../img/travelImage/detail-12-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-12.html">碧海蓝天养生温泉</a></div>
                      <div class="price-box"><span class="single-price">￥200</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-13.html"><img src="../img/travelImage/detail-13-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-13.html">郑州宝龙冠军溜冰场</a></div>
                      <div class="price-box"><span class="single-price">￥120</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-14.html"><img src="../img/travelImage/detail-14-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-14.html">金鹭鸵鸟游乐园</a></div>
                      <div class="price-box"><span class="single-price">￥96</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-travel-15.html"><img src="../img/travelImage/detail-15-01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-travel-15.html">荆紫仙山</a></div>
                      <div class="price-box"><span class="single-price">￥104</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="hotel" class="allliance-area Louti">
              <div class="sort-liance"><img src="../img/alliance/atay.png" class="iconImage">
                <ul>
                  <li class="left-sort-area"><a>住宿</a></li>
                  <li class="right-sort-area"><a>住宿 </a>|<a>代金券</a></li>
                </ul>
              </div>
              <div class="liance-con-wrapper">
                <div class="liance-con">
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-01.html"><img src="../img/atay/a.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-01.html">【罗曼蒂克时尚酒店（德化街店）】</a></div>
                      <div class="price-box"><span class="single-price">￥240.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-02.html"><img src="../img/atay/b-1.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-02.html">【罗曼蒂克时尚酒店（德化街店）】</a></div>
                      <div class="price-box"><span class="single-price">￥168.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-03.html"><img src="../img/atay/c-1.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-03.html">河南天地粤海酒店</a></div>
                      <div class="price-box"><span class="single-price">￥468.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-04.html"><img src="../img/atay/d-1.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-04.html">郑州荣泰莱商务酒店</a></div>
                      <div class="price-box"><span class="single-price">￥179.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-05.html"><img src="../img/atay/e-1.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-05.html">郑州如家快捷酒店（花园路中环百货店）</a></div>
                      <div class="price-box"><span class="single-price">￥132.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-06.html"><img src="../img/atay/dfks01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-06.html">【河南永和铂爵国际酒店】</a></div>
                      <div class="price-box"><span class="single-price">￥270.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-07.html"><img src="../img/atay/tdyh01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-07.html">【河南天地粤海酒店 】</a></div>
                      <div class="price-box"><span class="single-price">￥218.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-08.html"><img src="../img/atay/dskz01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-08.html">【郑州都市客栈 】</a></div>
                      <div class="price-box"><span class="single-price">￥120.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-09.html"><img src="../img/atay/hyss04.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-09.html">【五月时尚酒店】</a></div>
                      <div class="price-box"><span class="single-price">￥110.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-10.html"><img src="../img/atay/ass01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-10.html">【郑州艾时尚商务酒店】</a></div>
                      <div class="price-box"><span class="single-price">￥164.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-11.html"><img src="../img/atay/pag01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-11.html">【平安果酒店】</a></div>
                      <div class="price-box"><span class="single-price">￥210.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-12.html"><img src="../img/atay/dfks04.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-12.html">【郑州东方凯撒假日酒店】</a></div>
                      <div class="price-box"><span class="single-price">￥220.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-13.html"><img src="../img/atay/hyy04.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-13.html">【郑州华原颐舍酒店EaseHouse】</a></div>
                      <div class="price-box"><span class="single-price">￥130.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-14.html"><img src="../img/atay/wakp01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-14.html">【唯爱精品酒店】</a></div>
                      <div class="price-box"><span class="single-price">￥210.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                  <div class="single-liance-show">
                    <div class="single-image-top-area"><a href="detail-atay-15.html"><img src="../img/atay/ljd01.jpg"></a></div>
                    <div class="single-text-bottom-area">
                      <div class="text-title"> <a href="detail-atay-15.html">【莱酒店(凤鸣路店)】</a></div>
                      <div class="price-box"><span class="single-price">￥300.00</span><em class="sales-count">已售出123份</em></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
    <div class="special-title">
      <h3><span>便利店及时送 CONWENIENTSTORE</span></h3>
    </div>
    <div class="special-con">
      <div class="img-con-wrapper testDown">
        <div class="img-wrapper"><a href="#"><img src="../img/shop/shoptest1.png"></a></div>
        <div class="img-wrapper"><a href="#"><img src="../img/shop/shoptest.png"></a></div>
        <div class="img-wrapper">更多便利店持续添加中</div>
      </div>
    </div>
    <div style="display:none;" class="shop-banner-wrapper">
      <div class="shop-banner"><img src="../img/next.png" class="pre-step"><img src="../img/pre.png" class="next-step">
        <ul class="shop-con clearfix testDown">
          <li><img src="../img/shop/shoptest1.png"></li>
          <li><img src="../img/shop/shoptest1.png"></li>
          <li><img src="../img/shop/shoptest.png"></li>
        </ul>
      </div>
    </div>
    <div class="special-title">
      <h3><span>优选商铺 ALLLIANCE</span></h3>
    </div>
    <div class="special-con">
      <div class="img-con-wrapper testDown">
        <div class="img-wrapper"><a href="#"><img src="../img/travelImage/shopbreviary.jpg"></a></div>
        <div class="img-wrapper"><a href="#"><img src="../img/life/35.jpg"></a></div>
        <div class="img-wrapper"><a href="#"><img src="../img/atay/e1.png"></a></div>
      </div>
    </div>
    <div class="special-title">
      <h3><span>今日推荐 CONWENIENTSTORE</span></h3>
    </div>
    <script type="text/template" id="todayFav">
      <div class="single-recommend-goods">
        <div class="single-recommend-top-area">
          <a href='detail-goods.html?id={shopsstoreid}'><img src="{goodpic}"></a>
          </div>
        <div class="single-recommend-bottom-area">
          <div class="recommend-name-box"><span>{goodname}</span><em>已售<b>27295</b>件</em></div>
          <div class="recommend-price-box">￥<span>{goodprice} </span><b> </b><em></em></div>
        </div>
      </div>
    </script>
    <script type="text/template" id="todaySpec">
      <div class="single-recommend-goods">
        <div class="single-recommend-top-area"><a href='detail-goods.html?id={shopsstoreid}'><img src="{goodpic}"></a></div>
        <div class="single-recommend-bottom-area">
          <div class="recommend-name-box"><span>{goodname}</span><em>已售<b>27295</b>件</em></div>
          <div class="recommend-price-box">￥<span>{goodprice}  <b class="favor-wrapper-01"></b></span><em></em><i>立即购买</i></div>
        </div>
      </div>
    </script>
    <div class="today-recommend-wrapper">
      <div class="today-recommend today-fav"></div>
    </div>
    <div class="special-title">
      <h3><span>每日超值特卖 CONWENIENTSTORE</span></h3>
    </div>
    <div class="today-recommend-wrapper">
      <div class="today-recommend today-spec"></div>
    </div>
    <footer>
      <div class="foot-serve">
        <div style="display:none" class="foot-serve-top clearfix">
          <div class="barcode"></div>
          <ul class="serve">
            <li>购物指南</li>
            <li>购物流程</li>
            <li>购物指南</li>
          </ul>
          <ul class="serve">
            <li>购物指南</li>
            <li>购物流程</li>
            <li>购物指南</li>
          </ul>
          <ul class="serve">
            <li>购物指南</li>
            <li>购物流程</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="foot-serve-bottom"><img src="../img/footer.png"></div>
      </div>
      <div class="foot-about-bg">
        <div class="foot-about">  <a>©2017 e+.RIGHT         </a><a>ICP备案号：豫ICP备15016705号-4         </a><a>         </a>
        </div>
      </div>
    </footer>
  </body>
</html>*/});

var compiled=ejs.render(tpl);
var koa=require('koa');
var app=new koa();

app.use(function *(next){
	
	console.log(this.query);
	this.body=compiled;
	
	
});

app.listen(80);

