<template>
	<div>
		<div class="nlpBg" :style ="bg">
      <div class="wrapper">
        <div class="nav-span">
          <span class="Dis">{{nav_title}}</span>
          <div>{{nav_content}}</div>
        </div>
      </div>
    </div>
		<div class="introduce">
			<div class="wrapper">
				<div class="content">
					<span class="Block">功能介绍</span>
					<div class="nlp_introduce">{{nlp_introduce}}</div>
					<div class="introduce_div"></div>
				</div>
			</div>
		</div>
		<div class="demo">
			<div class="wrapper">
				<div class="content">
					<span class="Block">功能演示</span>
					<span class="demo_title">示例</span>
					<textarea class="eg" v-model="eg"></textarea>
					<span class="demo_title">向量结果</span>
					<textarea v-model="result" readonly="readonly"></textarea>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from "jquery";
	export default{
		data(){
			return{
				nav_title:'依存句法分析',
				nav_content:'将连续的自然语言文本 切分成具有语义合理性和完整性的词汇序列',
				bg: {
          backgroundImage: "url(" + require("../images/haha.png") + ")"
        },
        nlp_introduce: '依托全网海量优质数据和深度神经网络技术，通过词语向量化来计算两个词之间的相似度',
        eg:'',
        result:''
      }
    },
    mounted(){
    	let vm = this;
    		$(".eg").on("blur",function(){
    			if(vm.eg!=''){
    				$.ajax({
							url:"/naturalWordController/getAnalysisWordsBaseOnExistsService",
							type:"post",
							data:{
								sentence:vm.eg,
								mode:1,
								// topK:'',
							}
						}).then(function(data){
							console.log(data);
						})
    			}
	    	})
    },
    methods:{

    }
  }

</script>

