import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App!</h1>
          <p>
            Name: Kristine Navarro<br />
            Email: kristinevineonavarro@gmail.com<br />
            Other info: <a href="https://github.com/Metalxr/maquilan-webprog">GitHub Repository</a>
          </p>


        </header>
       
      </div>
 
    </>
  )
}
