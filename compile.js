// const { exec } = require('pkg')
// exec([ './bin/echobot.js', '--target', 'host', '--output', 'release/discord-forwarder.exe' ])

const { compile } = require('nexe')
compile({
    input: 'bin/echobot.js',
    output: 'release/echobot',
    build: true, //required to use patches
    ico: './logo.ico', 
    target: 'windows-x64-12.9.1',
    verbose: true, 
    // clean: true,
    resources: [
      './bin/*',
      './node_modules/**/*'
    ]
  }).then(() => {
    console.log('success')
  }).catch(err=>{
      console.log(err)
  })