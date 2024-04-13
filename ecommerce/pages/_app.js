import "@/styles/globals.css";
import { Layout } from '../components';
import React from 'react';
import { StateContext } from "../context/StateContext";
import toast, { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
