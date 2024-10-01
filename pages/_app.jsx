import React from 'react'
import Layout from '@/components/layout'
import Head from 'next/head'
import '@/styles/globals.css'
import '../i18n'
import { useTranslation } from 'react-i18next'

export default function App({ Component, pageProps }) {
  const { i18n } = useTranslation()

  React.useEffect(() => {
    if (window.LA) {
      window.LA.init({ id: '3JG50cSVuHLeRPeV', ck: '3JG50cSVuHLeRPeV' })
    }

    const language = localStorage.getItem('language')
    if (language) {
      i18n.changeLanguage(language)
    }
  }, [])

  return (
    <>
      <Head>
        <title>发现导航 - 轻量级导航网站</title>
        <meta
          name="description"
          content="发现导航是一个轻量级免费且强大的导航网站"
        />
        <meta
          name="keywords"
          content="导航网站,发现导航,创建导航,免费导航,开源导航"
        />
        <meta name="author" content="https://github.com/xjh22222228" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
