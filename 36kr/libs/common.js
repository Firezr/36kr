export default {
  getTime(t){
    let now=Date.now()
    let temp=Math.floor((now-t)/1000)
    if(temp<60){
      return 'just now'
    }else if (temp<3600) {
      return `${Math.floor(temp/60)}分钟前`
    }else if (temp<86400) {
      return `${Math.floor(temp/3600)}小时前`
    }else if (temp<86400*30) {
      return `${Math.floor(temp/86400)}天前`
    }else {
      let date=new Date(t)
      return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }
  }
}
