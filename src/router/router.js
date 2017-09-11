//引入依赖的库
import Vue from "vue";
import VueRouter from "vuerouter";

//引入路由组件

import Ai from "../components/ai.vue";
import Test from "../components/test.vue";
import Test2 from "../components/test2.vue";
import Nlp from "../components/nlp.vue";
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
