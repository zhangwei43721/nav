import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
