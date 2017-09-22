<template>
	<div class="nlp4">
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
		<div class="show">
			<div class="wrapper">
				<div class="content">
					<span class="Block">示例</span>
					<span class="nlp_title">文本1</span>
					<div class="nlp_sentence">Root人工智能崛起暗示地球生命进入3.0时代</div>
					<span class="nlp_title">文本2</span>
					<div class="nlp_sentence">Root人工智能崛起暗示地球生命进入3.0时代</div>
					<span class="nlp_title">分析结果</span>
					<div class="show_result">
						
					</div>
				</div>
			</div>
		</div>
		<div class="demo">
			<div class="wrapper">
				<div class="content">
					<span class="Block">功能演示</span>
					<span class="nlp_title">文本1</span>
					<textarea class="nlp_sentence" v-model="sentence1"></textarea>
					<span class="nlp_title">文本2</span>
					<textarea class="nlp_sentence" v-model="sentence2"></textarea>
					<ButtonC class="W120 nlpBtn" @click="disResult()">计算相似度</ButtonC>
					<span class="nlp_title">分析结果</span>
					<div class="result nlp_sentence">
						{{score}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from "jquery";
import {Button} from "ui";
	export default{
		components:{ButtonC:Button},
		data(){
			return{
				nav_title:'文本相似度',
				nav_content:'依托全网海量优质数据和深度神经网络技术，实现对词汇的向量化表示，实现文本的可计算',
				bg: {
          backgroundImage: "url(" + require("../../images/nlp3.png") + ")"
        },
        nlp_introduce: '词向量是通过训练将某种语言中的每个词映射成一个固定的长度的短向量，将所有这些向量放在一起形成一个词向量空间，而每一向量则为该空间的一个点。通过此方法，使文本可计算',
        sentence1:'',
        sentence2:'',
        score:''
      }
    },
    
    methods:{
    	disResult(){
    		let vm = this;
  			if(vm.sentence1!=''&&vm.sentence2!=''){
  				$.ajax({
						url:"/naturalWordController/getSentenceSimilarityService",
						type:"post",
						data:{
							sentence:vm.sentence1,
							sentences:vm.sentence2,
							topK:9,
						}
					}).then(function(data){
						vm.score = data.result.dataList[0].score;
						console.log("33333"+vm.score);
					})
  			}
  			else if(vm.sentence1==''&&vm.sentence2!=''){
          vm.score = "文本1为空，不能计算";
        }
        else if(vm.sentence2==''&&vm.sentence1!=''){
          vm.score = "文本2为空，不能计算";
        }
        else{
        	vm.score = "请填写你要分析的两个文本";
        }
      }
    }
  }

</script>


