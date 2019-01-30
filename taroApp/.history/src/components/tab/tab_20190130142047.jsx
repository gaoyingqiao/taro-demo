import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import './tab.scss'

class Tab extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
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
        current={this.state.current}
      />
    )
  }  
}

export default Tab