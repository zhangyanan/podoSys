import dashboardPage from '@/pages/dashboard'
import noticePage from '@/pages/dashboard/notice'
import loginPage from '@/pages/auth/login'
import signoutPage from '@/pages/auth/signout'
import wheatListPage from '@/pages/wheat/wheatlist'
import errorPage from '@/pages/common/error'
import myItemPage from '@/pages/userDetail/myItem'
import userItemPage from '@/pages/userDetail/userItem'
import userListPage from '@/pages/userDetail/userlist'
import ggFilePage from '@/pages/wheat/ggfile'
import allListPage from '@/pages/wheat/alllist'
import activityItemsPage from '@/pages/activityspaces/activityItems'
import ggStatusPage from '@/pages/wheat/ggstatus'
import searchListPage  from '@/pages/wheat/searchList'
// zyn
import panelPage from '@/pages/dashboard/panel'
import inputformPage from '@/pages/dashboard/inputform'
import quickPage from '@/pages/dashboard/quick'
import ggPage from '@/pages/wheat/gg'
import gglibrary from '@/pages/wheat/gglibrary'
import itemPage from '@/pages/wheat/item'

export default [
  {
    path: '/',
    component: dashboardPage,
    routes: [
      {
        path: 'inputform/',
        component: inputformPage
      },
      {
        path: 'quick/',
        component: quickPage
      },
      {
        path: 'gg/',
        component: ggPage
      },
      {
        path: 'gglibrary/',
        component: gglibrary
      },
      {
        path: 'item/',
        component: itemPage
      },
      {
        path: 'panel/',
        component: panelPage
      },
      {
        path: 'login/',
        component: loginPage
      },
      {
        // page: 5.2 8.1
        path: 'gglist/',
        component: ggFilePage
      },
      {
        path: 'signout/',
        component: signoutPage
      },
      {
        // page: 6.2
        path: '21ItemList/',
        component: wheatListPage
      },
      {
        path: 'notice/',
        component: noticePage
      },
      {
        path: 'error/',
        component: errorPage
      },
      {
        // page: 4.1
        path: 'myItem/',
        component: myItemPage
      },
      {
        // page: 2.3
        path: 'userItem/',
        component: userItemPage
      },
      {
        // page: 2.1
        path: 'allList/',
        component: allListPage
      },
      {
        // page: 3.4
        path: 'searchList/',
        component: searchListPage
      },
      {
        // page: 8.2
        path: 'activityItems/',
        component: activityItemsPage
      },
      {
        // page: 5.4
        path: 'ggStatus/',
        component: ggStatusPage
      },
      {
        // page: 2.4
        path: 'userList/',
        component: userListPage
      },
      {
        path: '',
        component: dashboardPage
      }
    ]
  }
]
