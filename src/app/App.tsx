import Header from '../components/header'
import projectLogo from '/logo.png'

function App() {
  return (
    <>
      <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={projectLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Portfolio</h1>
    </>
  )
}

export default App