
const { info, warn, error } = require('./utils/logger')
const { seek, fileSeekerEventEmitter } = require('./utils/FileSeeker')
const EventEmitter = require('events')
const process = require('process')
const path = require('path')

fileSeekerEventEmitter.addListener('success', targetPath => {
  info('Target has been found by path: ', targetPath)
})

fileSeekerEventEmitter.addListener('fail', message => {
  error(message)
})

process.argv.forEach((val, index) => {
  if(index >= 2) seek(path.basename(val), path.dirname(val))
})
