<template>
	<div class="nlp2">
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
						<TableC height="200" :columns="show_columns" :data="show_data"></TableC>
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
					<span class="nlp_title">向量结果</span>
					<div class="result">
						<TableC class="demo_result" height="200" :columns="demo_columns" :data="demo_data"></TableC>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from "jquery";
import {Table} from "ui";
	export default{
		components:{TableC:Table},
		props: {id:String},
		data(){
			return{
				nav_title:'依存句法分析',
				nav_content:'将连续的自然语言文本 切分成具有语义合理性和完整性的词汇序列',
				bg: {
          backgroundImage: "url(" + require("../../images/haha.png") + ")"
        },
        nlp_introduce: '依托全网海量优质数据和深度神经网络技术，通过词语向量化来计算两个词之间的相似度',
        eg:'',
        show_columns:[
        	{
        		title:'NAME',
        		key:'show_name'
        	},
        	{
        		title:'DEPREL',
        		key:'show_deprel'
        	},
        	{
        		title:'LEMMA',
        		key:'show_lemma'
        	}
        ],
        show_data:[
        	{
        		show_name:'Root',
        		show_deprel:'HBV',
        		show_lemma:'崛起'
        	},
        	{
        		show_name:'人工智能',
        		show_deprel:'SBV',
        		show_lemma:'崛起'
        	},
        	{
        		show_name:'暗示',
        		show_deprel:'COO',
        		show_lemma:'崛起'
        	},
        	{
        		show_name:'地球',
        		show_deprel:'SBV',
        		show_lemma:'进入'
        	},
        	{
        		show_name:'进入',
        		show_deprel:'VOB',
        		show_lemma:'时代'
        	},
        	{
        		show_name:'生命',
        		show_deprel:'ATT',
        		show_lemma:'3.0'
        	},
        	{
        		show_name:'3.0',
        		show_deprel:'ATT',
        		show_lemma:'时代'
        	}
        ],
        demo_columns:[
        	{
        		title:'NAME',
        		key:'name'
        	},
        	{
        		title:'DEPREL',
        		key:'deprel'
        	},
        	{
        		title:'LEMMA',
        		key:'lemma'
        	}
        ],
        demo_data:[]
      }
    },
    mounted(){
    	this.getDemoData();
      $(".demo_result").hide();
    },

    methods:{
    	getDemoData(){
    		let vm = this;
    		$(".nlp_sentence").on("blur",function(){
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
              $(".demo_result").show();
							vm.demo_data = data.result.dataList;
							let demo_data = [];
              demo_data = vm.demo_data;
							for(let i=0;i<demo_data.length;i++){
							  
							  console.log("1111");
								demo_data[i].name = data.result.dataList[i].NAME;
								demo_data[i].deprel = data.result.dataList[i].DEPREL;
								demo_data[i].lemma = data.result.dataList[i].HEAD.LEMMA;
								//this.toParam();

							}
							
						})
    			}else{
            $(".demo_result").hide();
          }
	    	})
    	}
    	// toParam(objs){
     //    var str=""
     //    for(let item in objs){
     //      if(objs[item]){
     //        let a=objs[item]
     //        a=(a+"").replace(/(^\s*)|(\s*$)/g,"")
     //        str=str+item+"="+a+'&';
     //      }
     //    }
     //    str=str.substring(0,str.length-1) ;
     //    return str;
     //  },

    }
  }

</script>

