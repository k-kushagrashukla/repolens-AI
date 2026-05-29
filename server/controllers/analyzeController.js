const analyzeRepo = async (req, res) => {
  try {
    const { repoUrl } = req.body

    console.log('Repo URL:', repoUrl)

    const fakeFiles = [
      'src/App.jsx',
      'src/components/Navbar.jsx',
      'src/components/Hero.jsx',
      'src/pages/Home.jsx',
      'server/index.js',
      'server/routes/userRoutes.js',
    ]

    const insights = [
      'React project detected',
      'Express backend detected',
      `Analyzed repository: ${repoUrl}`,
      `Total files detected: ${fakeFiles.length}`,
    ]

    const nodes = fakeFiles.map((file, index) => ({
      id: index.toString(),
      data: {
        label: file,
      },
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    }))

    const edges = [
      {
        id: 'e1',
        source: '0',
        target: '1',
      },
      {
        id: 'e2',
        source: '0',
        target: '2',
      },
    ]

    res.json({
      files: fakeFiles,
      insights,
      graph: {
        nodes,
        edges,
      },
    })
  } catch (err) {
    console.log(err)

    res.status(500).json({
      error: 'Server error',
    })
  }
}

module.exports = {
  analyzeRepo,
}