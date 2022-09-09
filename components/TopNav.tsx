import Link from "next/link"
import Router from 'next/router'
import { useState } from "react"
import { Button } from "react-bootstrap"
import { Navbar, Nav, Container } from "react-bootstrap"
import { toast } from "react-toastify"
import { pages, wsCall } from "./../helper"
import store from 'store'

export default function ({ dark = false, active = 'index' }: { dark: Boolean, active: String }) {

  const [loading, setLoading] = useState(false)

  const logout = () => {
    setLoading(true)
    wsCall({
      method: 'post',
      url: '/users/logout'
    }).then(res => {
      toast.success(res.data.msg)
      store.remove('user')
      Router.replace('/user/login')
    }).catch(err => {
      toast.error(err.message)
    }).finally(() => setLoading(false))
  }

  return (
    <Navbar bg={dark ? "dark" : "light"} expand="lg" id="top-nav"
      className="shadow-sm fixed-top" style={{ direction: 'rtl', height: 70 }}>
      <Container className={dark ? "bg-dark" : "bg-light"}>
        <Navbar.Brand href="/" className={`"me-0 ${dark && "invert"}`}>URL SHORTENER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={dark ? "invert" : ""} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            {store.get('user') && <>
              <Button variant="link" onClick={logout} disabled={loading}>خروج</Button>
              <span className="invert px-3 d-none d-sm-block">|</span>
            </>}
            {
              pages.map((page, i) => (
                <Link key={i} href={page.path}><a className={`px-3 ${page.active === active && 'bold'}`}>{page.title}</a></Link>
              ))
            }
            {store.get('user') ?
              <Link href="/user/profile">
                <a><Button className="px-4">پروفایل</Button></a>
              </Link> :
              <Link href="/user/login">
                <a><Button className="px-4">شروع کنید</Button></a>
              </Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}