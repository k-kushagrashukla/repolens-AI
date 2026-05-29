function detectComponents(files) {
  return files.filter(
    (file) =>
      file.endsWith('.jsx') || file.endsWith('.tsx')
  )
}

module.exports = detectComponents