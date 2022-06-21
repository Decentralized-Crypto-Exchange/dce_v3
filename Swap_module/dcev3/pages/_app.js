import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { ProjectProvider } from '../context/ProjectContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl='https://mpqoz8oxuw9z.usemoralis.com:2053/server'
      appId='x6A2gstpTSCB7S99dRA4Kjjdz4gR86NBVDPXV09P'
    >
      <ProjectProvider>
        <Component {...pageProps} />
      </ProjectProvider>
    </MoralisProvider>
  )
}

export default MyApp