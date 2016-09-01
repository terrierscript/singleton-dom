module.exports = function(id){
  var cache = document.getElementById(id)
  if(cache){
    return cache
  }
  var item = document.createElement('div')
  item.id = id
  return item
}
