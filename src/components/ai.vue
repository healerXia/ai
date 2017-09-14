<template>
  <div>
  	<div class="bg" :style ="bg"><div class="nav-span"><span>让产品更智能 更懂用户</span></div></div>
    <div class="enterance wrapper">
      <div class="enter-title"><span>快速接入AI入口</span></div>
      <ul>
        <router-link :to="item.path" v-for="item in enterUl">
      	<li>
      		<div><img :src="item.imgUrl" alt=""></div>
      		<span>{{item.name}}</span>
      	</li>
        </router-link>
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
  </div>
</template>

<script>

	export default{

		data(){
			return{
				bg: {
          backgroundImage: "url(" + require("../images/bg.png") + ")"
        },
				enterUl:[
					{
						imgUrl:require('../images/language.svg'),
						name:'自然语言处理',
            id:1,
            path:'/nlp/1'
					},
					{
						imgUrl:require('../images/zhishi.svg'),
						name:'知识图谱',
            id:2,
            path:''
					},
					{
						imgUrl:require('../images/ai.svg'),
						name:'AI',
            id:3,
            path:''
					},
					{
						imgUrl:require('../images/huaxiang.svg'),
						name:'用户画像',
            id:4,
            path:''
					},
					{
						imgUrl:require('../images/shuju.svg'),
						name:'智能推荐',
            id:5,
            path:''
					},
					{
						imgUrl:require('../images/shujufenxi.svg'),
						name:'数据智能',
            id:6,
            path:''
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
		}
	}
</script>

