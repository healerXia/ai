//引入依赖的库
import Vue from "vue";
import VueRouter from "vuerouter";

//引入路由组件
import Ai from "../components/ai.vue";
import Test from "../components/test.vue";
import Test2 from "../components/test2.vue";
import Nlp from "../components/nlp.vue";
import Nlp_pages from "../components/nlp-pages.vue";
import Nlp1 from "../components/nlp1.vue";
import Nlp2 from "../components/nlp2.vue";
import Nlp3 from "../components/nlp3.vue";
import Nlp4 from "../components/nlp4.vue";
import Nlp5 from "../components/nlp5.vue";
import Nlp6 from "../components/nlp6.vue";

//component
import Layout from "../components/layout.vue";


var router = new VueRouter({
	routes:[
		{ 	//默认跳转的页面
			path: '/',
			redirect:"/home",
			name:"ai"
		},
		{
			path: '/',
			component: Layout,
			name:"ai",
			children:[

				{ 	//默认跳转的页面
					path: 'home',
					component: Ai,
					name:"ai"
				},

				{
					path: 'nlp/:id',			
					component: Nlp,
					name:"nlp"
				},
				// {
				// 	path: 'nlpPages/3',			
				// 	component: Nlp_pages,
				// 	name:"nlpPages3"
				// },
				{
					path: 'nlpPages/1',			
					component: Nlp1,
					name:"nlpPages1"
				},
				{
					path: 'nlpPages/2',			
					component: Nlp2,
					name:"nlpPages2"
				},
				{
					path: 'nlpPages/3',			
					component: Nlp3,
					name:"nlpPages3"
				},
				{
					path: 'nlpPages/4',		
					component: Nlp4,
					name:"nlpPages4"
				},
				{
					path: 'nlpPages/5',			
					component: Nlp5,
					name:"nlpPages5"
				},
				{
					path: 'nlpPages/6',			
					component: Nlp6,
					name:"nlpPages6"
				}


			]
		},

		{
			path: '/test',			
			component: Test,
			name:"test"
		},
		{
			path: '/test2',			
			component: Test2,
			name:"test2"
		}
		
	]
})

export default router;
