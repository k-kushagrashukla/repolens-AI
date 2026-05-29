import './Insights.css'

function Insights({ insights }) {
  return (
    <div className="insights-container">
      <h2>Smart Insights</h2>

      {insights.map((item, index) => (
        <div key={index} className="insight-card">
          {item}
        </div>
      ))}
    </div>
  )
}

export default Insights