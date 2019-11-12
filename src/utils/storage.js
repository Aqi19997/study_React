//存储到localStorage
function setItem(key,value){
  window.localStorage.setItem(key,JSON.stringify(value))
}


//获取localStorage中的数据
function getItem(key){
  return JSON.parse(window.localStorage.getItem(key))
}

//删除数据的操作
function removeItem(key){
  window.localStorage.removeItem(key)
}
export{
  setItem,
  getItem,
  removeItem
}