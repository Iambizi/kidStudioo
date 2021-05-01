import Head from 'next/head';
import Layout from '../components/layout';
import Info from '../components/infoContent/infoWarpImg'

export default function info():JSX.Element{
    return(
        <>
            <Head>
                <title>Kid. Studio | info</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Info />
            </Layout>
        </>
    )
}