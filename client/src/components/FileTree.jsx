import './FileTree.css'

function FileTree({ files }) {
  return (
    <div className="filetree-container">
      <h2>Project Files</h2>

      {files.map((file, index) => (
        <div key={index} className="file-item">
          {file}
        </div>
      ))}
    </div>
  )
}

export default FileTree