import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css'
import './GraphView.css'

function GraphView({ graph }) {
  return (
    <div className="graph-container">
      <ReactFlow
        nodes={graph.nodes}
        edges={graph.edges}
        fitView
      />
    </div>
  )
}

export default GraphView