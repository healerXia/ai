<template>
  <div class="ai">
    <div>
      <div class="nav">
        <div class="header">
          <div class="wrapper">
            <div class="logo Dis">
              <span>易车 | AI平台</span>
            </div>
            <div class="header-ul">
              <ul class="Dis">
                <li v-for="item in ulHerder" :value="item.value">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg" :style ="bg"><canvas id="canvas"></canvas></div>
        <div class="nav-span"><span>让产品更智能 更懂用户</span></div>
      </div>
      <div class="enterance wrapper">
        <div class="enter-title"><span>快速接入AI入口</span></div>
        <ul>
        	<li v-for="item in enterUl">
        		<div><img :src="item.imgUrl" alt=""></div>
        		<span>{{item.name}}</span>
        	</li>
        </ul>
      </div>
      <div class="solve wrapper">
        <div class="solve-title"><span>用AI解决业务场景问题  轻松获得提升</span></div>
        <div class="form">
	        <div class='container'>
					  <ul>
					    <li v-for="item in solveUl" :class="item.class">
					      <span class="form-title">{{item.title}}</span>
          			<div class="form-content">{{item.content}}</div>
					      <div class='info'>
					        <h3>{{item.title}}</h3>
				        	<p>{{item.content}}</p>
					      </div>
	    				</li>
	    			</ul>
	    		</div>
        </div>
      </div>
      <div class="footer wrapper">
        <div class="contact"><span>联系我们：QQ4545908</span></div>
      </div>
    </div>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				bg: {
          backgroundImage: "url(" + require("../images/nav1x.png") + ")"
        },
				ulHerder:[
					{
						value:1,
						name:'首页',
						onOk: () => {
              this.$router.push('');
          	}
					},
					{
						value:2,
						name:'产品服务'
					},
					{
						value:3,
						name:'新闻中心'
					},
					{
						value:4,
						name:'SDK下载'
					},
					{
						value:5,
						name:'文档与支持'
					}
				],
				enterUl:[
					{
						imgUrl:require('../images/language.svg'),
						name:'自然语言处理'
					},
					{
						imgUrl:require('../images/zhishi.svg'),
						name:'知识图谱'
					},
					{
						imgUrl:require('../images/ai.svg'),
						name:'AI'
					},
					{
						imgUrl:require('../images/huaxiang.svg'),
						name:'用户画像'
					},
					{
						imgUrl:require('../images/shuju.svg'),
						name:'智能推荐'
					},
					{
						imgUrl:require('../images/shujufenxi.svg'),
						name:'数据智能'
					}
				],
				solveUl:[
					{
						title:'个性化推荐',
						content:'基于用户画像，并融合推荐技术，内容分析技术，为网站，App用户产品提供个性化内容推荐服务，提高产品流量和用户粘性，提升用户体验。',
						class:'BR BB'
					},
					{
						title:'精准广告投放',
						content:'凭借实时的大数据处理、自然语言处理、人群画像、机器学习等技术，帮助广告主精准匹配用户，优化广告投放效果，提升点击转化。',
						class:'BR BB'
					},
					{
						title:'搜索',
						content:'为用户提供内容，服务，知识搜索的整体解决方案，提升用户体验，提高点击转化。',
						class:'BR BB'
					},
					{
						title:'图像识别',
						content:'立足于自有云端深度学习平台，提供实时物体检测、风格转换、人脸识别等服务，快速准确定位问题，帮助提升产品效果。',
						class:'BB'
					},
					{
						title:'商业线索挖掘',
						content:'依托于强大的用户画像、实时数据处理、数据分析能力、机器学习技术帮助客户挖掘潜在客户，提供销售转化预测服务，缩短转化周期。',
						class:'BR'
					},
					{
						title:'智能问答',
						content:'智能问答是基于自然语言处理、机器学习、深度学习、语言识别、语音合成、人机交互、知识图谱等技术为用户提供全方位的购车决策信息服务。',
						class:'BR'
					},
					{
						title:'目标客户分析',
						content:'目标客户分析是基于易车全平台用户画像和用户意图识别能力，提供群体用户描述的分析服务，帮助客户深度理解客户群特征，涵盖人口属性、行为属性、兴趣偏好等维度。',
						class:'BR'
					},
					{
						title:'舆情监控与分析',
						content:'通过整合新闻资讯、社交媒体等互联网公开数据，通过深度学习技术和复杂模型算法，智能挖掘、追溯舆情事件脉络，为销售、企业决策提供数据支撑。'
					}
				]
			}
		},
		mounted(){
			window.onload = function(){
			//获取画布对象
				var canvas = document.getElementById("canvas");
				//获取画布的上下文
				var context =canvas.getContext("2d");
				//获取浏览器屏幕的宽度和高度
				var W = window.innerWidth;
				var H = window.innerHeight;
				//设置canvas的宽度和高度
				canvas.width = W;
				canvas.height = H;
				//每个文字的字体大小
				var fontSize = 16;
				//计算列
				var colunms = Math.floor(W /fontSize);	
				//记录每列文字的y轴坐标
				var drops = [];
				//给每一个文字初始化一个起始点的位置
				for(var i=0;i<colunms;i++){
					drops.push(0);
				}

				//运动的文字
				var str ="javascript html5 canvas";
				//4:fillText(str,x,y);原理就是去更改y的坐标位置
				//绘画的函数
				function draw(){
					context.fillStyle = "rgba(0,0,0,0.05)";
					context.fillRect(0,0,W,H);
					//给字体设置样式
					context.font = "700 "+fontSize+"px  微软雅黑";
					//给字体添加颜色
					context.fillStyle ="#00cc33";//可以rgb,hsl, 标准色，十六进制颜色
					//写入画布中
					for(var i=0;i<colunms;i++){
						var index = Math.floor(Math.random() * str.length);
						var x = i*fontSize;
						var y = drops[i] *fontSize;
						context.fillText(str[index],x,y);
						//如果要改变时间，肯定就是改变每次他的起点
						if(y >= canvas.height && Math.random() > 0.99){
							drops[i] = 0;
						}
						drops[i]++;
					}
				};

				function randColor(){
					var r = Math.floor(Math.random() * 256);
					var g = Math.floor(Math.random() * 256);
					var b = Math.floor(Math.random() * 256);
					return "rgb("+r+","+g+","+b+")";
				}

				draw();
				setInterval(draw,30);
			};



			// 

			var nodes  = document.querySelectorAll('li'),
			    _nodes = [].slice.call(nodes, 0);

			var getDirection = function (ev, obj) {
			    var w = obj.offsetWidth,
			        h = obj.offsetHeight,
			        x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1.7)),
			        y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 0.6)),
			        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
			  
			    return d;
			};

			var addClass = function ( ev, obj, state ) {
			    var direction = getDirection( ev, obj ),
			        class_suffix = "";
			    
			    obj.className = "";
			    
			    switch ( direction ) {
			        case 0 : class_suffix = '-top';    break;
			        case 1 : class_suffix = '-right';  break;
			        case 2 : class_suffix = '-bottom'; break;
			        case 3 : class_suffix = '-left';   break;
			    }
			    
			    obj.classList.add( state + class_suffix );
			};

			// bind events
			_nodes.forEach(function (el) {
			    el.addEventListener('mouseover', function (ev) {
			        addClass( ev, this, 'in' );
			    }, false);

			    el.addEventListener('mouseout', function (ev) {
			        addClass( ev, this, 'out' );
			    }, false);
			});
		}
	}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Bree+Serif);
.ai{
	$duration: 300ms;
	$timing-fn: ease;
	$turquoise: #1ABC9C;
	$wet-asphalt: #34495E;
	$midnight-blue: #2C3E50;

	.nav{
		height:598px;
    .header{
      background:#171e2e;
      width:100%;
      height:56px;
      .wrapper{
      	height:56px;
      	.logo{
          margin-left:50px;
          width: 100px;
          height: 56px;
          float:left;
        }
        span,ul{
          float:left;
          line-height:56px;
          font-family:PingFangHK-Regular;
          font-size:14px;
          color:#e5e5e5;
          text-align:left;
        }
        .header-ul{
          ul{   
          	margin-left:80px;
            li{
							cursor:pointer;
            	float:left;
              margin-left:127px;
            }
          }
        }
      }
    }
    .bg{
    	background-repeat: no-repeat;
			background-size: auto;
    	background-position: center;
  		width: 100%;
			height: 542px;
			position: relative;
    }
    #canvas{
    	filter: alpha(opacity=40);
      opacity:0.4;
    	width: 100%;
    	height: 100%;
    }
    .nav-span{
    	position: relative;
    	z-index:99;
      margin:0 auto;
      margin-top:-222px;
      text-align:center;
      width: 496px;
      height: 66px;
      span{
        inline-height:66px;
        font-family:PingFangHK-Thin;
        font-size:48px;
        color:#ffffff;
        text-align:left;
      }
    }
	}
	.enterance{
      height: 380px;
      padding-top:68px;
      .enter-title{
        width: 200px;
        height: 40px;
        margin: 0 auto;
        span{
          font-family:PingFangSC-Medium;
          font-size:28px;
          color:#484e58;
          text-align:left;
        }
      }
      ul{
        margin: 60px 0 0 -60px;
        li{
          width: 100px;
          height: 100px;
          float: left;
          margin-left: 100px;
          cursor:pointer;
          div{
            width: 100px;
            height: 50px;
            img{
            	width: 50px;
            	height: 50px;
              display: inline-block;
              margin-left: 25px;
            }
          }
          span{
            margin-top: 16px;
            width: 100px;
            height: 22px;
            display: inline-block;
            inline-height:22px;
            font-family:PingFangSC-Medium;
            font-size:16px;
            color:#2b3540;
            text-align:center;
          }
        }
      }
  }
  .solve{
    height: 530px;
    margin-top: 10px;
    .solve-title{
      font-family:PingFangSC-Medium;
      font-size:28px;
      color:#484e58;
      text-align:center;
    } 
    .form{
      ul{
        margin-top:60px;
        padding:0;

        &:after {
			    content: "";
			    display: table;
			    clear: both;
			  }
        li{
        	position: relative;
				  float: left;

        	cursor:pointer;
          vertical-align: top;
          display: inline-block;
          width: 210px;
          padding:26px 42px 20px 42px;
          .form-title{
            font-family:PingFangSC-Medium;
            font-size:16px;
            color:#2b3540;
            text-align:center;
          }
          .form-content{
            width: 210px;
            margin-top:12px;
            font-family:MicrosoftYaHei;
            font-size:12px;
            color:#737580;
            line-height:22px;
            text-align:justify;
          }
          h3 {
				    margin: 0;
				    font-size: 16px;
				    color: transparentize(#fff, .1);
				  }
				  p  {
				    font-size: 12px;
				    line-height: 1.5;
				    color: transparentize(#fff, .2);
				  }
        }
      }
    }
  }
  .footer{
    border:1px solid #e5e5e5;
    width:1102px;
    height:74px;
    margin-bottom:30px;
    .contact{
      height: 22px;
      font-family:MicrosoftYaHei;
      font-size:12px;
      color:#737580;
      line-height:74px;
      text-align:center;
    }
  }
	

	.info {
	  // hide-initial-state
	  transform: rotate3d(1,0,0, 90deg);
	  
	  width: 100%;
	  height: 100%;
	  padding: 0px;
	  position: absolute;
	  top: 0;
	  left: 0;
	  border-radius: 4px;
	  pointer-events: none;
	  background-color: transparentize($turquoise, .1);
	}

	.in-top .info {
	   transform-origin: 50% 0%;
	   animation: in-top $duration $timing-fn 0ms 1 forwards;
	}
	.in-right .info {
	  transform-origin: 100% 0%;
	  animation: in-right $duration $timing-fn 0ms 1 forwards;
	}
	.in-bottom .info {
	  transform-origin: 50% 100%;
	  animation: in-bottom $duration $timing-fn 0ms 1 forwards;
	}
	.in-left .info {
	  transform-origin: 0% 0%;
	  animation: in-left $duration $timing-fn 0ms 1 forwards;
	}

	.out-top .info {
	  transform-origin: 50% 0%;
	  animation: out-top $duration $timing-fn 0ms 1 forwards;
	}
	.out-right .info {
	  transform-origin: 100% 50%;
	  animation: out-right $duration $timing-fn 0ms 1 forwards;
	}
	.out-bottom .info {
	  transform-origin: 50% 100%;
	  animation: out-bottom $duration $timing-fn 0ms 1 forwards;
	}
	.out-left .info {
	  transform-origin: 0% 0%;
	  animation: out-left $duration $timing-fn 0ms 1 forwards;
	}

	@keyframes in-top {
	  from {transform: rotate3d(-1,0,0, 90deg)}
	  to   {transform: rotate3d(0,0,0, 0deg)}}
	@keyframes in-right {
	  from {transform: rotate3d(0,-1,0, 90deg)}
	  to   {transform: rotate3d(0,0,0, 0deg)}}
	@keyframes in-bottom {
	  from {transform: rotate3d(1,0,0, 90deg)}
	  to   {transform: rotate3d(0,0,0, 0deg)}}
	@keyframes in-left {
	  from {transform: rotate3d(0,1,0, 90deg)}
	  to   {transform: rotate3d(0,0,0, 0deg)}}

	@keyframes out-top {
	  from {transform: rotate3d(0,0,0, 0deg)}
	  to   {transform: rotate3d(-1,0,0, 90deg)}}
	@keyframes out-right {
	  from {transform: rotate3d(0,0,0, 0deg)}
	  to   {transform: rotate3d(0,-1,0, 90deg)}}
	@keyframes out-bottom {
	  from {transform: rotate3d(0,0,0, 0deg)}
	  to   {transform: rotate3d(1,0,0, 90deg)}}
	@keyframes out-left {
	  from {transform: rotate3d(0,0,0, 0deg)}
	  to   {transform: rotate3d(0,1,0, 90deg)}}

}
</style>
