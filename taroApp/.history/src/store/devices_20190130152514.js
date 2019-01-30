import { observable } from 'mobx'

class devicesStore {
  @observable devices = []
  @observable sort = 'desc' // 创建时间排序 desc/asc

  @action getDevices() {
    const list = [
      {
        id: 1,
        status: 1,
        name: '厨房的净水器',
        type: 'BNT-ZDB01',
        img: ''
      }
    ]
    return list;
  }
}

export default new devicesStore()