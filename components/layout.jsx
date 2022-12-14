import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children}) => {


    return (
        <>
          <Head>
          <title>Home | COBRA.Kimonos</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"></link>
          <link href="https://fonts.cdnfonts.com/css/gellatio-personal-use" rel="stylesheet"></link>
          </Head>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )
}

export default Layout;