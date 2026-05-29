const fs = require('fs')
const path = require('path')

function scan(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const fullPath = path.join(dir, file)

    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      scan(fullPath, fileList)
    } else {
      fileList.push(fullPath)
    }
  })

  return fileList
}

module.exports = scan