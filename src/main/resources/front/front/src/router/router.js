import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import huanzheList from '../pages/huanzhe/list'
import huanzheDetail from '../pages/huanzhe/detail'
import huanzheAdd from '../pages/huanzhe/add'
import keshiList from '../pages/keshi/list'
import keshiDetail from '../pages/keshi/detail'
import keshiAdd from '../pages/keshi/add'
import yishengList from '../pages/yisheng/list'
import yishengDetail from '../pages/yisheng/detail'
import yishengAdd from '../pages/yisheng/add'
import chuzhenyishengList from '../pages/chuzhenyisheng/list'
import chuzhenyishengDetail from '../pages/chuzhenyisheng/detail'
import chuzhenyishengAdd from '../pages/chuzhenyisheng/add'
import guahaoxinxiList from '../pages/guahaoxinxi/list'
import guahaoxinxiDetail from '../pages/guahaoxinxi/detail'
import guahaoxinxiAdd from '../pages/guahaoxinxi/add'
import quxiaoguahaoList from '../pages/quxiaoguahao/list'
import quxiaoguahaoDetail from '../pages/quxiaoguahao/detail'
import quxiaoguahaoAdd from '../pages/quxiaoguahao/add'
import wenzhenjiluList from '../pages/wenzhenjilu/list'
import wenzhenjiluDetail from '../pages/wenzhenjilu/detail'
import wenzhenjiluAdd from '../pages/wenzhenjilu/add'
import yaopinxinxiList from '../pages/yaopinxinxi/list'
import yaopinxinxiDetail from '../pages/yaopinxinxi/detail'
import yaopinxinxiAdd from '../pages/yaopinxinxi/add'
import chufangkaijuList from '../pages/chufangkaiju/list'
import chufangkaijuDetail from '../pages/chufangkaiju/detail'
import chufangkaijuAdd from '../pages/chufangkaiju/add'
import menuList from '../pages/menu/list'
import menuDetail from '../pages/menu/detail'
import menuAdd from '../pages/menu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'huanzhe',
					component: huanzheList
				},
				{
					path: 'huanzheDetail',
					component: huanzheDetail
				},
				{
					path: 'huanzheAdd',
					component: huanzheAdd
				},
				{
					path: 'keshi',
					component: keshiList
				},
				{
					path: 'keshiDetail',
					component: keshiDetail
				},
				{
					path: 'keshiAdd',
					component: keshiAdd
				},
				{
					path: 'yisheng',
					component: yishengList
				},
				{
					path: 'yishengDetail',
					component: yishengDetail
				},
				{
					path: 'yishengAdd',
					component: yishengAdd
				},
				{
					path: 'chuzhenyisheng',
					component: chuzhenyishengList
				},
				{
					path: 'chuzhenyishengDetail',
					component: chuzhenyishengDetail
				},
				{
					path: 'chuzhenyishengAdd',
					component: chuzhenyishengAdd
				},
				{
					path: 'guahaoxinxi',
					component: guahaoxinxiList
				},
				{
					path: 'guahaoxinxiDetail',
					component: guahaoxinxiDetail
				},
				{
					path: 'guahaoxinxiAdd',
					component: guahaoxinxiAdd
				},
				{
					path: 'quxiaoguahao',
					component: quxiaoguahaoList
				},
				{
					path: 'quxiaoguahaoDetail',
					component: quxiaoguahaoDetail
				},
				{
					path: 'quxiaoguahaoAdd',
					component: quxiaoguahaoAdd
				},
				{
					path: 'wenzhenjilu',
					component: wenzhenjiluList
				},
				{
					path: 'wenzhenjiluDetail',
					component: wenzhenjiluDetail
				},
				{
					path: 'wenzhenjiluAdd',
					component: wenzhenjiluAdd
				},
				{
					path: 'yaopinxinxi',
					component: yaopinxinxiList
				},
				{
					path: 'yaopinxinxiDetail',
					component: yaopinxinxiDetail
				},
				{
					path: 'yaopinxinxiAdd',
					component: yaopinxinxiAdd
				},
				{
					path: 'chufangkaiju',
					component: chufangkaijuList
				},
				{
					path: 'chufangkaijuDetail',
					component: chufangkaijuDetail
				},
				{
					path: 'chufangkaijuAdd',
					component: chufangkaijuAdd
				},
				{
					path: 'menu',
					component: menuList
				},
				{
					path: 'menuDetail',
					component: menuDetail
				},
				{
					path: 'menuAdd',
					component: menuAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
