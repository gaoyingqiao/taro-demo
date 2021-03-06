import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './devices.scss'

@inject('devicesStore')
@observer
class Devices extends Component {

  config = {
    navigationBarTitleText: '设备'
  }

  componentWillMount () { 
    const { devicesStore } = this.props
    devicesStore.getDevices()
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { devicesStore: { devices, sort } } = this.props
    console.log('devicesStore', devices, sort)
    return (
      <View className='devices'>
        
        <Text>设备</Text>
      </View>
    )
  }
}

export default Devices 
