import SSRProvider from 'react-bootstrap/SSRProvider'

import TopNav from './TopNav'
import Footer from './Footer'

export default function Layout({ children, ntopNav, nfooter = false, dark = false, active = 'index' }: any) {
  return (
    <SSRProvider>
      {!ntopNav && <TopNav dark={Boolean(dark)} active={active} />}
      <main id="main">{children}</main>
      {!nfooter && <Footer />}
    </SSRProvider>
  )
}