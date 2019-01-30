import { observable } from 'mobx'

// const devicesStore = observable({
//   devices: [],
//   sort: 'desc', // 创建时间排序 desc/asc
// })

class devicesStore {
  @observable devices = []
  @observable sort = 'desc' // 创建时间排序 desc/asc
}

export default new devicesStore()