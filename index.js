module.exports = function(id){
  var doc = window.document
  var cache = doc.getElementById(id)
  if(cache){
    return cache
  }

  var item = doc.createElement('div')
  item.id = id

  var container = doc.body
  container.appendChild(item)

  return item
}

