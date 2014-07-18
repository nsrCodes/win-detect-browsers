var detect = require('./')

detect(function(browsers){
  var format = "\n%s %s\n  @ %s"
  browsers.forEach(function(b){
    console.log(format, b.name, b.version, b.path)
  })
})