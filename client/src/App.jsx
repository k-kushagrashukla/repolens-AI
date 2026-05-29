import { useState } from 'react'
import axios from 'axios'
import RepoForm from './components/RepoForm'
import GraphView from './components/GraphView'
import FileTree from './components/FileTree'
import Insights from './components/Insights'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const analyzeRepo = async (repoUrl) => {
    try {
      const res = await axios.post('https://repolens-ai-zlr6.onrender.com/api/analyze', {
        repoUrl,
      })

      setData(res.data)
    } catch (err) {
      console.log(err)
      alert('Error analyzing repo')
    }
  }

  return (
    <div className="app">
      <h1 className="title">RepoLens AI</h1>

      <RepoForm analyzeRepo={analyzeRepo} />

      {data && (
        <>
          <Insights insights={data.insights} />
          <FileTree files={data.files} />
          <GraphView graph={data.graph} />
        </>
      )}
    </div>
  )
}

export default App