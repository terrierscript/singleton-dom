const assert = require('assert')
const singletonDom = require('../')

const jsdom = require("jsdom").jsdom

function test(){
  jsdom.env(
    '<body></body>',
    function(err, window){
      global.window = window
      singletonDom("foo")
      singletonDom("foo")
      singletonDom("baz")
      assert.equal(
        window.document.body.innerHTML,
        '<div id="foo"></div><div id="baz"></div>'
      )
    }
  )
}

test()