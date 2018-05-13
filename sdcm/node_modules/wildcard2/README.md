#Wildcard2

A wildcard match module.

# Quickstart

### Install
```sh
    npm install -s wildcard2
```
### Examples

```
    var wMatch = require('wildcard2');
    console.log(wMatch('abcdefghijk', 'abc*?k'); //true
    console.log(wMatch('abcdefghijk', 'abc*?ki'); //false
```

That's it!

### Contribute
- let me know how it can be improved in the [github
  issues](https://github.com/tyleryang/wildcard2/issues)
- [fork](https://github.com/tyleryang/wildcard2) and pull-request

# Credits
built with ❤ by [Tyler Yang](http://tyleryang.com)
