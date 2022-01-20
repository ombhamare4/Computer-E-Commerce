import Head from 'next/head'
import Image from 'next/image'


//CSS Imports Here
import styles from '../styles/Home.module.css'
//Componensts Import Here
import Layout from '../components/Layout/Layout'
import Account from './account'
import $ from 'jquery';


export default function Home() {
  return (
    <div>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Jupiterfull.png" />
      </Head>
        <Layout>
          {/* <h1 className='text-red-500'>Talwind</h1> */}
          <Account/>
        </Layout>

    </div>
  )
}
