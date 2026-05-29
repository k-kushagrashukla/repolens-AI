const simpleGit = require('simple-git')
const path = require('path')
const fs = require('fs-extra')

const git = simpleGit()

async function cloneRepo(repoUrl) {
  try {
    const repoName = `repo-${Date.now()}`

    const repoPath = path.join(
      __dirname,
      '..',
      'temp',
      repoName
    )

    await fs.ensureDir(repoPath)

    console.log('Cloning repo...')

    await git.clone(repoUrl, repoPath)

    console.log('Clone complete')

    return repoPath
  } catch (error) {
    console.log('CLONE ERROR:')
    console.log(error)

    throw error
  }
}

module.exports = cloneRepo