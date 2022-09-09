import Link from "next/link"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { Navbar, Nav, Container } from "react-bootstrap"
import { pages } from "./../helper"

export default function ({ dark = false, active = 'index' }: { dark: Boolean, active: String }) {

  return (
    <Navbar bg={dark ? "dark" : "light"} expand="lg" id="top-nav"
      className="shadow-sm fixed-top" style={{ height: 70 }}>
      <Container className={dark ? "bg-dark" : "bg-light"}>
        <Navbar.Brand href="/" className={`gracelya me-0 fs-2 me-5 ${dark && "invert"}`}>Sinawic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={dark ? "invert" : ""} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            {
              pages.map((page, i) => (
                <Link key={i} href={page.path}><a className={`px-3 ${page.active === active && 'bold'}`}>{page.title}</a></Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}