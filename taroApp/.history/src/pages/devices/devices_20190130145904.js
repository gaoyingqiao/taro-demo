import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
// import { observer, inject } from '@tarojs/mobx'

import './index.scss'

// @inject('counterStore')
// @observer
class Devices extends Component {

  config = {
    navigationBarTitleText: '设备'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    // const { counterStore: { counter } } = this.props
    return (
      <View className='devices'>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>设备</Text>
      </View>
    )
  }
}

export default Devices 
