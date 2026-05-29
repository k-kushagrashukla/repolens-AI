const simpleGit = require('simple-git')
const path = require('path')
const fs = require('fs-extra')

const git = simpleGit()

async function cloneRepo(repoUrl) {
  const repoName = `repo-${Date.now()}`

  const repoPath = path.join(__dirname, '..', 'temp', repoName)

  await fs.ensureDir(repoPath)

  await git.clone(repoUrl, repoPath)

  return repoPath
}

module.exports = cloneRepo