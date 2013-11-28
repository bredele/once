
# once

  Make a function callable once

## Installation

  Install with [component(1)](http://component.io):

    $ component install bredele/once

## Usage


```js
var once = require('once');
var fn = once(function(){
	console.log('Oh Canada!');
});

fn();
//Oh Canada!

fn();
//undefined
```

## License

  MIT
