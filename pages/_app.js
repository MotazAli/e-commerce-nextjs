import '../styles/globals.css'
import Layout from '../components/layout'
import { useState } from 'react'
import UserContext from './src/storage';

export default function MyApp({ Component, pageProps }) {

  const [user,setUser] = useState(null);


  return (
    <UserContext.Provider value={[user,setUser]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
    
  )
}