import _ from 'lodash'
const localStorage = window.localStorage
export default{
  staticPath: 'http://statics.zhuishushenqi.com',
  /*
  将item转换成对象取出
  */
  getLocalData (item) {
    return _.isEmpty(JSON.parse(localStorage.getItem(item))) ? null : JSON.parse(localStorage.getItem(item))
  },
  /*
  JSON.stringify() 方法将 JavaScript 对象转换为字符串
  */
  setLocalData (item, obj) {
    localStorage.setItem(item, JSON.stringify(obj))
  }

}
