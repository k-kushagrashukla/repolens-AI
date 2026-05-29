function generateInsights(files) {
  const insights = []

  const jsxFiles = files.filter((f) =>
    f.endsWith('.jsx')
  )

  const jsFiles = files.filter((f) =>
    f.endsWith('.js')
  )

  insights.push(
    `Total files detected: ${files.length}`
  )

  insights.push(
    `React components found: ${jsxFiles.length}`
  )

  insights.push(
    `JavaScript files found: ${jsFiles.length}`
  )

  if (files.length > 200) {
    insights.push('Large project detected')
  }

  return insights
}

module.exports = generateInsights