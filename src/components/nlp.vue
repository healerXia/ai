<template>
  <div>
    <div class="nlp">
      <div class="wrapper">
        <ul>
          <li v-for="item in nlpUl">
            <div class="nlp-img"><img :src="item.imgUrl" alt=""></div>
            <div class="nlp-content">
              <div class="nlp-title">{{item.title}}</div>
              <div class="nlp-introduce">{{item.introduce}}</div>
            </div>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="ccase">
      <div class="wrapper">
        <div class="ccase-title"><span>合作案例</span></div>
        <div class="form">
          <ul>
            <li v-for="item in caseUl" :class="item.class">
              <div>
                <div class="form-title">{{item.title}}</div>
                <div class="form-content">{{item.content}}</div>
              </div>
            </li>
          </ul>
        </div>
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
        nlpUl:[
          {
            title:'分词',
            introduce:'将连续的自然语言文本，切分成具有语意合理性和完整性的词汇序列'
          },
          {
            title:'依存句法分析',
            introduce:'将连续的自然语言文本，切分成具有语意合理性和完整性的词汇序列，实现对自然语言的精准理解'
          },
          {
            title:'词向量表示',
            introduce:'依托全网海量优质数据和深度神经网络技术，实现对词汇的向量化表示，实现文本的可计算'
          },
          {
            title:'文本相似度',
            introduce:'依托全网海量优质数据和深度神经网络技术，通过词语向量化来计算两个词之间的相似度'
          },
          {
            title:'观点抽取',
            introduce:'自动分析评论内容，提取用户观点'
          },
          {
            title:'情感倾向判断',
            introduce:'对含主观信息的文本进行情感极性判断，支持产品优化和营销决策'
          }
        ],
        caseUl:[
          {
            title:'易车APP',
            content:'基于用户画像，并融合推荐技术，内容分析技术，为网站，App用户产品提供个性化内容推荐服务，提高产品流量和用户粘性，提升用户体验。'
          },
          {
            title:'智能广告投放系统',
            content:'凭借实时的大数据处理、自然语言处理、人群画像、机器学习等技术，帮助广告主精确匹配用户，优化广告投放效果，提升点击转化。'
          },
          {
            title:'智能导购',
            content:'为用户提供内容，服务，知识搜索的整体解决方案，提升用户体验，提高点击转化。'
          }
        ]
      }
    },
    created(){
      // this.$http.post(config.urlList.getSegmentWord+"?sentence="+"&mode=",
      //   {emulateJSON:true}
      //   ).then((res)=>{//获取
      //     if(res.data.errorCode===0){
      //       console.log(res.data.result);
      //     }
      //     else {
      //       this.$Modal.info({
      //           title: '提示',
      //           content: res.data.errorMsg
      //       });
      //     }
      //     }).catch((res)=>{
      // })
    },
    methods:{

    }
  }
</script>

