import { useState } from 'react'
import './RepoForm.css'

function RepoForm({ analyzeRepo }) {
  const [repoUrl, setRepoUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    analyzeRepo(repoUrl)
  }

  return (
    <form onSubmit={handleSubmit} className="repo-form">
      <input
        type="text"
        placeholder="Paste GitHub Repo URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />

      <button>Analyze</button>
    </form>
  )
}

export default RepoForm