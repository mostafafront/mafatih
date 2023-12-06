import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap")
  },[])

  return <Component {...pageProps} />

}
