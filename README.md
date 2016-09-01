# single-dom
Tiny function for insert or find dom element for virtual dom container ( e.g. ReactDom.render )

# Usage

```js
var singletonDom = require('singleton-dom')

singletonDom('my-container') // insert <div id="my-container"></div> and return element
singletonDom('my-container2') // insert <div id="my-container2"></div> and return element
singletonDom('my-container2') // Not insert and return my-container2 element
```

## with react

```js
import ReactDom from 'react'
import singletonDom from 'singleton-dom'

const App = () => (
  <div>Hello World</div>
)

ReactDom.render(<App />, singletonDom('my-container'))
```