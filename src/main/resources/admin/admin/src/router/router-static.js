import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import huanzhe from '@/views/modules/huanzhe/list'
    import guahaoxinxi from '@/views/modules/guahaoxinxi/list'
    import keshi from '@/views/modules/keshi/list'
    import yaopinxinxi from '@/views/modules/yaopinxinxi/list'
    import menu from '@/views/modules/menu/list'
    import users from '@/views/modules/users/list'
    import quxiaoguahao from '@/views/modules/quxiaoguahao/list'
    import chuzhenyisheng from '@/views/modules/chuzhenyisheng/list'
    import yisheng from '@/views/modules/yisheng/list'
    import config from '@/views/modules/config/list'
    import wenzhenjilu from '@/views/modules/wenzhenjilu/list'
    import chufangkaiju from '@/views/modules/chufangkaiju/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '医院公告',
        component: news
      }
      ,{
	path: '/huanzhe',
        name: '患者',
        component: huanzhe
      }
      ,{
	path: '/guahaoxinxi',
        name: '挂号信息',
        component: guahaoxinxi
      }
      ,{
	path: '/keshi',
        name: '科室',
        component: keshi
      }
      ,{
	path: '/yaopinxinxi',
        name: '药品信息',
        component: yaopinxinxi
      }
      ,{
	path: '/menu',
        name: '菜单列表',
        component: menu
      }
      ,{
	path: '/users',
        name: '管理员',
        component: users
      }
      ,{
	path: '/quxiaoguahao',
        name: '取消挂号',
        component: quxiaoguahao
      }
      ,{
	path: '/chuzhenyisheng',
        name: '出诊医生',
        component: chuzhenyisheng
      }
      ,{
	path: '/yisheng',
        name: '医生',
        component: yisheng
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/wenzhenjilu',
        name: '问诊记录',
        component: wenzhenjilu
      }
      ,{
	path: '/chufangkaiju',
        name: '处方开具',
        component: chufangkaiju
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
