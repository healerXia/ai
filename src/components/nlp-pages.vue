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
					<textarea></textarea>
					<span class="demo_title">向量结果</span>
					<textarea></textarea>
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
          backgroundImage: "url(" + require("../images/haha.png") + ")"
        },
        nlp_introduce: 'lalallalaalllalalkldjalvjklahviohriovhiohqviohivohaoih',
      }
    }
  }

</script>

<style lang="scss">
.ai{
  .nlpBg{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 547px;
    position: relative;
    .wrapper{
      height: 547px;
      position: relative;
      .nav-span{
        position: absolute;
        left:50px;
        top:340px;
        width:300px;
        text-align:left;
        span{
          inline-height:66px;
          font-family:PingFangHK-Thin;
          font-size:48px;
          color:#000;
          text-align:left;
        }
        div{
					font-family:PingFangSC-Medium;
					font-size:16px;
					color:#2b3540;
					text-align:left;
        }
      } 
    }  
  }
  .Block{
  	margin-top:100px;
  	font-family:PingFangSC-Medium;
		font-size:28px;
		color:#484e58;
		text-align:center;
  }
  .introduce{
  	.wrapper{
			.content{
				margin-left:48px;
				.nlp_introduce{
					width: 1102px;
					display: flex;
					justify-content: space-around;
					
					font-family:MicrosoftYaHei;
					font-size:12px;
					color:#737580;
					line-height:18px;
					padding: 12px 0;
				}
				.introduce_div{
					width: 1102px;
					height: 400px;
					background: #ccc;
				}
			}
		}
  }
  .demo{
		.wrapper{
			.content{
				margin-left:48px;
				.demo_title{
					display:block;
			  	font-family:PingFangSC-Medium;
					font-size:16px;
					color:#2b3540;
					text-align:left;
					padding:6px 0 12px 0;
				}
				textarea{
					width: 1102px;
					height: 120px;
					margin-bottom:50px;
				}
			}
		}
  }
}
</style>