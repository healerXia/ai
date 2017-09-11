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
        <div id="container" class="bg" :style ="bg"></div>
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
          <ul>
          	<li v-for="item in solveUl" :class="item.class">
          		<div>
          			<span class="form-title">{{item.title}}</span>
          			<div class="form-content">{{item.content}}</div>
          		</div>
          	</li>
          </ul>
        </div>
      </div>
      <div class="footer wrapper">
        <div class="contact"><span>联系我们：QQ4545908</span></div>
      </div>
    </div>
  </div>
</template>

<script type="module">
	import PIXI from "../js/pixi.js";
  import Stats from "../js/Stats.js";

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
      var stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.bottom = '-48px';
      stats.domElement.style.right = "0px";
      stats.domElement.style.zIndex = 100;
      document.getElementById('container').appendChild(stats.domElement);
      /*
       * Shader Start
       */
      var startTime = Date.now();
      PIXI.PerlinFilter = function () {
          var pnoiseChunk = [
              "vec3 mod289(vec3 x)",
              "{",
              " return x - floor(x * (1.0 / 289.0)) * 289.0;",
              "}",
              "vec4 mod289(vec4 x)",
              "{",
              " return x - floor(x * (1.0 / 289.0)) * 289.0;",
              "}",
              "vec4 permute(vec4 x)",
              "{",
              " return mod289(((x * 34.0) + 1.0) * x);",
              "}",
              "vec4 taylorInvSqrt(vec4 r)",
              "{",
              "return 1.79284291400159 - 0.85373472095314 * r;",
              "}",
              "vec3 fade(vec3 t)",
              "{",
              "return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);",
              "}",
              "// Classic Perlin noise, periodic variant",
              "float pnoise(vec3 P, vec3 rep)",
              "{",
              " vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period",
              " vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period",
              " Pi0 = mod289(Pi0);",
              " Pi1 = mod289(Pi1);",
              " vec3 Pf0 = fract(P); // Fractional part for interpolation",
              " vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0",
              " vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);",
              " vec4 iy = vec4(Pi0.yy, Pi1.yy);",
              " vec4 iz0 = Pi0.zzzz;",
              " vec4 iz1 = Pi1.zzzz;",
              " vec4 ixy = permute(permute(ix) + iy);",
              " vec4 ixy0 = permute(ixy + iz0);",
              " vec4 ixy1 = permute(ixy + iz1);",
              " vec4 gx0 = ixy0 * (1.0 / 7.0);",
              " vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;",
              " gx0 = fract(gx0);",
              " vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);",
              " vec4 sz0 = step(gz0, vec4(0.0));",
              " gx0 -= sz0 * (step(0.0, gx0) - 0.5);",
              " gy0 -= sz0 * (step(0.0, gy0) - 0.5);",
              " vec4 gx1 = ixy1 * (1.0 / 7.0);",
              " vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;",
              " gx1 = fract(gx1);",
              " vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);",
              " vec4 sz1 = step(gz1, vec4(0.0));",
              " gx1 -= sz1 * (step(0.0, gx1) - 0.5);",
              " gy1 -= sz1 * (step(0.0, gy1) - 0.5);",
              " vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);",
              " vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);",
              " vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);",
              " vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);",
              " vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);",
              " vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);",
              " vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);",
              " vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);",
              " vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));",
              " g000 *= norm0.x;",
              " g010 *= norm0.y;",
              " g100 *= norm0.z;",
              " g110 *= norm0.w;",
              " vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));",
              " g001 *= norm1.x;",
              " g011 *= norm1.y;",
              " g101 *= norm1.z;",
              " g111 *= norm1.w;",
              " float n000 = dot(g000, Pf0);",
              " float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));",
              " float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));",
              " float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));",
              " float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));",
              " float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));",
              " float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));",
              " float n111 = dot(g111, Pf1);",
              " vec3 fade_xyz = fade(Pf0);",
              " vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);",
              " vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);",
              " float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);",
              " return 2.2 * n_xyz;",
              "}",
              "float turb(vec3 P, vec3 rep, float lacunarity, float gain)",
              "{",
              " float sum = 0.0;",
              " float sc = 1.0;",
              " float totalgain = 1.0;",
              " for (float i = 0.0; i < 6.0; i++)",
              " {",
              " sum += totalgain * pnoise(P * sc, rep);",
              " sc *= lacunarity;",
              " totalgain *= gain;",
              " }",
              " return abs(sum);",
              "}"
          ].join("\n");
          var godrayChunk = [
              "vec4 godray(float time)",
              "{",
              " float angle = 30.0;",
              " float xx = cos(radians(angle));",
              " float yy = sin(radians(angle));",
              " vec3 dir = vec3((xx * vTextureCoord.x) + (yy * vTextureCoord.y), (xx * vTextureCoord.x) + (yy * vTextureCoord.y), 0.0);",
              " float noise = turb(dir + vec3(time, 0.0, 62.1 + time), vec3(480.0, 320.0, 480.0), 2.0, 0.5);",
              " noise = mix(noise, 0.0, 0.3);",
              " //fade vertically.",
              " vec4 mist = vec4(noise, noise, noise, 1.0) * vTextureCoord.y; mist.a = 1.0;",
              " return mist;",
              "}"
          ].join("\n");

          PIXI.AbstractFilter.call(this);

          this.passes = [this];

          // set the uniforms
          this.uniforms = {
              time: {
                  type: '1f',
                  value: 0.0
              },
          };

          this.fragmentSrc = [
              'precision mediump float;',
              'varying vec2 vTextureCoord;',
              'varying vec4 vColor;',
              'uniform float time;',
              'uniform sampler2D uSampler;',
              pnoiseChunk,
              godrayChunk,
              'void main(void) {',
              ' gl_FragColor = texture2D(uSampler, vTextureCoord);',
              'gl_FragColor += godray(time);',
              '}'
          ];
      };

      PIXI.PerlinFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
      PIXI.PerlinFilter.prototype.constructor = PIXI.PerlinFilter;
      Object.defineProperty(PIXI.PerlinFilter.prototype, 'time', {
          get: function () {
              return this.uniforms.time.value;
          },
          set: function (value) {
              this.uniforms.time.value = value;
          }
      });

      /*
       * Pixi Start
       */
      PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST;
      var stage = new PIXI.Stage(0xaa0322);
      var renderer = new PIXI.WebGLRenderer(960, 640);
      document.getElementById('container').appendChild(renderer.view);

      var container = new PIXI.DisplayObjectContainer();
      container.scale.x = container.scale.y = 2;
      stage.addChild(container);

      var tex = new PIXI.Graphics();
      tex.beginFill(0x000000);
      tex.drawRect(0, 0, 480, 320);
      tex.endFill();
      var filter = new PIXI.PerlinFilter();
      container.filters = [filter];
      container.addChild(tex);                                

      requestAnimFrame(animate);

      function animate() {
          filter.time = 0.00002 * (Date.now() - startTime);
          requestAnimFrame(animate);
          renderer.render(stage);
          stats.update();
      }
    }
	}
</script>

<style lang="scss">
.ai{
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
    #container{
    	display: flex;
		  align-items: center;
		  justify-content: center;
      #stats{
        filter: alpha(opacity=0);
        opacity:0;
      }
      canvas{
        z-index:99;
        filter: alpha(opacity=40);
        opacity:0.4;
        width: 100%;
        height: 542px;
      }
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
        li{
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
}
</style>
