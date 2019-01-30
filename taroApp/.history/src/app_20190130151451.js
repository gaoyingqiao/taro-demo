import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {
  // 项目配置
  config = {
    pages: [
      'pages/devices/devices',
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      // custom: true,
      color: '#333333',
      selectedColor: '#78A4FA',
      backgroundColor: '#ffffff',
      borderColor: 'white',
      list: [
        {
          pagePath: 'pages/devices/devices',
          text: '设备',
        },
        {
          pagePath: 'pages/index/index',
          text: '数据',
        }
      ]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
