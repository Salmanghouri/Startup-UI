import '../styles/globals.css'
import Navbar from './Components/Navbar/index'
import Footer from './Components/Footer/index'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
