import { observable } from 'mobx'

class devicesStore {
  @observable devices = []
  @observable sort = 'desc' // 创建时间排序 desc/asc
}

export default new devicesStore()