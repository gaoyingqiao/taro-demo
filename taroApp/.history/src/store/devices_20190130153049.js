import { observable, action } from 'mobx'

class devicesStore {
  @observable devices = []
  @observable numPages = 3
  @observable page = 0
  @observable perPage = 10
  @observable sort = 'desc' // 创建时间排序 desc/asc

  @action getDevices({page, numPages}) {
    const list = [
      {
        id: 1,
        status: 1,
        name: '厨房的净水器',
        type: 'BNT-ZDB01',
        img: ''
      }
    ]
    console.log(this.page)
    if (this.page < this.numPages) {
      this.devices = this.devices.concat(list)
      this.page++
    }
  }
}

export default new devicesStore()