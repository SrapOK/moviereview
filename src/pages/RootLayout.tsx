import { Outlet } from "react-router-dom"

import Header from "widgets/Header"
import Footer from "components/Footer"

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
