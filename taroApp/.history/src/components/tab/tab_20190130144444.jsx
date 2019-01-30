import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import './tab.scss'

class Tab extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      tabList: [
        '/pages/devices/devices',
        '/pages/index/index',
        '/pages/index/index',
        '/pages/index/index'
      ]
    }
  }

  componentWillMount() {

  }

  handleClick (value) {
    const { tabList } = this.state;
    if (value === this.props.current) return;
    Taro.redirectTo({
      url: tabList[value]
    })
  }

  render () {
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '设备',  iconType: 'iphone' },
          { title: '数据', iconType: 'analytics', text: 'new' },
          { title: '水质地图', iconType: 'map-pin' },
          { title: '我的', iconType: 'user' }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.props.current}
      />
    )
  }  
}

export default Tab