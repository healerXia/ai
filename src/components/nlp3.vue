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
					<textarea v-model="demo_title"></textarea>
					<span class="demo_title">向量结果</span>
					<textarea v-model="demo_title"></textarea>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				nav_title:'词向量表示',
				nav_content:'依托全网海量优质数据和深度神经网络技术，实现对词汇的向量化表示，实现文本的可计算',
				bg: {
          backgroundImage: "url(" + require("../images/nlp3.png") + ")"
        },
        nlp_introduce: '词向量是通过训练将某种语言中的每个词映射成一个固定的长度的短向量，将所有这些向量放在一起形成一个词向量空间，而每一向量则为该空间的一个点。通过此方法，使文本可计算',
        demo_title:'',
        demo_title:''
      }
    },
    
    methods:{

    }
  }

</script>
