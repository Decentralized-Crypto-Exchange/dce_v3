import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { ProjectProvider } from '../context/ProjectContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://87a6ie6ayajt.usemoralis.com:2053/server'
      appId='YfBPfPIUnLbfrz6wtmE6xk2sj348KzK6PntKhMT9'
    >
      <ProjectProvider>
        <Component {...pageProps} />
      </ProjectProvider>
    </MoralisProvider>
  )
}

export default MyApp