import { QueryClient, QueryClientProvider } from 'react-query'

// styles
import '../styles/globals.css'
// components
import { Navbar } from '../components/navbar'

// react queryclient
const queryClient = new QueryClient()

function MyApp ({ Component, pageProps }) {
  return (
    <QueryClientProvider QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
