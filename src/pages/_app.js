import Head from 'next/head';
import { useState } from 'react';
 import AppContext from '../context/contextapi';
 
 
 
export default function MyApp({ Component, pageProps }) {
 const [ListDirPhotos, setListDirPhotos] = useState("");
 const [Category, setCategory] = useState("");

 const Photos = { ListDirPhotos, setListDirPhotos,Category, setCategory }
 
  return (
   <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />  
      <link async href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"   crossOrigin="anonymous"/>
      </Head>
      
      <div className="container">
          <div className="col">
            <AppContext.Provider value={{ Photos }}>
                <Component {...pageProps} />
            </AppContext.Provider>            
           
          </div>    
      </div>
    
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"/>
      </>
  )
}
  