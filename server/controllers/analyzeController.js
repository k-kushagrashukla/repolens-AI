const cloneRepo = require('../services/cloneRepo')
const scanFiles = require('../services/scanFiles')
const detectRoutes = require('../services/detectRoutes')
const detectComponents = require('../services/detectComponents')
const generateInsights = require('../services/generateInsights')

const analyzeRepo = async (req, res) => {
  try {
    console.log('Request received')

    const { repoUrl } = req.body

    console.log('Repo URL:', repoUrl)

    const repoPath = await cloneRepo(repoUrl)

    console.log('Repo cloned')

    const files = scanFiles(repoPath)

    console.log('Files scanned')

    const routes = detectRoutes(files)

    const components = detectComponents(files)

    const insights = generateInsights(files)

    const nodes = []
    const edges = []

    files.slice(0, 20).forEach((file, index) => {
      nodes.push({
        id: index.toString(),
        data: {
          label: file.split('\\').pop(),
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
    console.log('ERROR:')
    console.log(err)

    res.status(500).json({
      error: 'Failed to analyze repo',
    })
  }
}

module.exports = {
  analyzeRepo,
}