const fs = require('fs')

function detectRoutes(files) {
  const routes = []

  files.forEach((file) => {
    if (file.endsWith('.js')) {
      const content = fs.readFileSync(file, 'utf-8')

      const matches = content.match(/router\.(get|post|put|delete)/g)

      if (matches) {
        routes.push({
          file,
          routes: matches,
        })
      }
    }
  })

  return routes
}

module.exports = detectRoutes