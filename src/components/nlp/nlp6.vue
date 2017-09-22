<template>
	<div class="nlp6">
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
					<span class="nlp_title">原句</span>
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
					<span class="nlp_title">示例</span>
					<textarea class="nlp_sentence" v-model="eg"></textarea>
					<ButtonC class="W120 nlpBtn" @click="disResult()">情感倾向判断</ButtonC>
					<span class="nlp_title">判断结果</span>
					<div class="result">
						
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
				nav_title:'情感倾向判断',
				nav_content:'将连续的自然语言文本 切分成具有语义合理性和完整性的词汇序列',
				bg: {
          backgroundImage: "url(" + require("../../images/nlp6.png") + ")"
        },
        nlp_introduce: '依托全网海量优质数据和深度神经网络技术，通过词语向量化来计算两个词之间的相似度',
        eg:''
      }
    }
  }

</script>


