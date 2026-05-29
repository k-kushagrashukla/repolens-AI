const cloneRepo = require('../services/cloneRepo')
const scanFiles = require('../services/scanFiles')
const detectRoutes = require('../services/detectRoutes')
const detectComponents = require('../services/detectComponents')
const generateInsights = require('../services/generateInsights')

const analyzeRepo = async (req, res) => {
  console.log('=== API HIT ===')

  try {
    const { repoUrl } = req.body

    console.log('Repo URL:', repoUrl)

    const repoPath = await cloneRepo(repoUrl)

    console.log('Repo cloned at:', repoPath)

    const files = scanFiles(repoPath)

    console.log('Files count:', files.length)

    const routes = detectRoutes(files)

    console.log('Routes detected')

    const components = detectComponents(files)

    console.log('Components detected')

    const insights = generateInsights(files)

    console.log('Insights generated')

    const nodes = []
    const edges = []

    files.slice(0, 20).forEach((file, index) => {
      nodes.push({
        id: index.toString(),
        data: {
          label: file.split(/[\\/]/).pop(),
        },
        position: {
          x: Math.random() * 500,
          y: Math.random() * 500,
        },
      })

      if (index > 0) {
        edges.push({
          id: `e${index}`,
          source: '0',
          target: index.toString(),
        })
      }
    })

    console.log('Sending response')

    res.json({
      files,
      routes,
      components,
      insights,
      graph: {
        nodes,
        edges,
      },
    })
  } catch (err) {
    console.log('===== FULL ERROR =====')
    console.log(err)
    console.log(err.message)
    console.log(err.stack)

    res.status(500).json({
      error: err.message,
    })
  }
}

module.exports = {
  analyzeRepo,
}