import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import '@/styles/globals.css'
import { useEffect } from 'react'
import HeaderC from '../../components/header'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap")
  },[])

  return(
    <>
      <HeaderC/>
    <Component {...pageProps} />
    </>
  ) 
}
