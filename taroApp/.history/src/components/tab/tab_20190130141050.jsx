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
          { title: '待办事项',  iconType: 'bullet-list', text: 'new' },
          { title: '拍照', iconType: 'camera' },
          { title: '通讯录', iconType: 'folder', text: '100', max: '99' }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }  
}

export default Tab