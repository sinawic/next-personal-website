import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Button, ProgressBar } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { services, tools } from '../helper'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Home: NextPage = () => {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    let func = (e: any) => {
      if (window.scrollY > 650)
        setDark(false)
      else setDark(true)
    }
    window.addEventListener('scroll', func)
    return () => { window.removeEventListener('scroll', func) }
  }, [])

  return (
    <Layout dark={dark}>
      <Head>
        <title>sinawic</title>
        <meta name="description" content="sinawic medium guy official website" />
        <link rel="icon" href="/fav.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/Home.module.css" />
        <link rel="stylesheet" href="/css/styles.css" />
      </Head>

      <section id="hero" className="hero bg-dark d-flex align-items-center" style={{ minHeight: '90vh' }}>

        <div className="container">
          <div className="row py-5">

            <div className="col-12 col-sm-6">
              <div className="hero-box rtl">
                <div className="profile-pic">
                  <img src="/images/sinawic.jpg" style={{
                    width: 256,
                    height: 256
                  }} alt="" />
                </div>
              </div>
            </div>

            <div className="invert col-12 col-sm-6">
              <span className="fs-4">I am</span>
              <h1>
                ~/$&gt; Sinawic
              </h1>
              <strong className="fs-4">I provide <span className="text-danger">#DevOps</span> as a service</strong>
              <br />
              <br />

              <div>
                <a href="#contact" className="me-4">
                  <Button size="lg" className="px-4 invert">Contact now!</Button>
                </a>

                <a href="#devops" className="invert">
                  <span>So what is DevOps anyway???</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="devops" className="bg-dark py-5 flipV">
        <div className="container flipV">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8">
              <div>
                <img src="/images/DevOps.png" />
              </div>
              <br />
              <div>
                <p className="fs-3 text-light">
                  DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from the Agile methodology.
                  <a href="https://en.wikipedia.org/wiki/DevOps" target="_blank">
                    Wikipedia
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-secondary py-5">
        <div className="container py-5">
          <div className="text-center pb-5">
            <h3>Things You Can Receive As A Service</h3>
          </div>
          <div className="row justify-content-center">

            {
              services.map((service, i) => (
                <div className="col-sm-5 mb-4" key={i}>
                  <ProgressBar style={{ height: 45 }} animated variant="dark" now={service.percentage}
                    label={service.title} className="fs-5 bg-dark" />
                </div>
              ))
            }

          </div>
        </div>
      </section>

      <section id="tools" className="bg-lightt px-3 py-5">
        <div className="container py-5">
          <div className="text-center pb-5">
            <h3>Some Tools You Can Have In Your Stack</h3>
          </div>
          <AliceCarousel
            mouseTracking
            items={tools.map((tool, i) => (
              <div className="item d-flex align-items-center flex-column p-3" data-value={i}>
                <img style={{ height: 128 }} src={"/images/tools/" + tool.src} alt="" />
                <br />
                <span>{tool.title}</span>
              </div>
            ))}
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              960: { items: 3 },
              1024: { items: 4 },
            }}
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
          />
        </div>
      </section>

    </Layout>
  )
}

export default Home
