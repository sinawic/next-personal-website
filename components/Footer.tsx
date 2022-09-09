import { pages } from "./../helper"
import Link from 'next/link'
import Image from "next/image";
import appData from './../package.json'

export default function Layout() {
  return (
    <footer id="stats" className="bg-light pt-5">
      <div className="container py-5">
        <div className="row flex-row-reverse">
          <div className="col-sm-4 text-end ps-4">
            <strong className="fs-4">چرا ما</strong>
            <p className="text-justify pt-3">
              <strong>{appData.name} </strong>
              سعی بر آن دارد تا با فراهم آوردن امکانات
              مورد نیاز اکثریت مردم
              توانسته باشد کمکی در حال آنها کرده باشد.
              در صورت داشتن پیشنهاد بسیار خوش حال می شویم تا از شما خبری بشنویم.
              ممنون می شویم اگر حمایت شما را چه از لحاظ مالی و چه غیر مالی داشته باشیم.
              لطفا در صورت امکان ما را در صفحات اجتماعی دنبال کنید.
            </p>
          </div>

          <div className="col-sm-4 text-end">
            <strong className="fs-4">صفحات</strong>
            <div className="pt-3 d-flex flex-row-reverse justify-content-between">
              <ul>
                {
                  pages.map((page, i) => (
                    <li key={i}>
                      <Link href="/"><a>{page.title}</a></Link>
                    </li>
                  ))
                }
              </ul>

              <div>
                <a href="/"><i className="fs-4 px-3 mb-4 fab fa-telegram"></i></a>
                <a href="/"><i className="fs-4 px-3 mb-4 fab fa-instagram-square"></i></a>
                <a href="/"><i className="fs-4 px-3 mb-4 fab fa-github-square"></i></a>
                <a href="/"><i className="fs-4 px-3 mb-4 fab fa-stack-overflow"></i></a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 text-end">
            {/* <strong className="fs-4">header</strong> */}
            <div className="pt-5 d-flex justify-content-evenly">
              <Image src="/images/q.png" width={64} height={64} />
              <Image src="/images/q.png" width={64} height={64} />
              <Image src="/images/q.png" width={64} height={64} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary p-3 mt-5">
        <div className="container d-flex align-items-center">
          <p className="invert m-0 pe-2">
            @copyright.
            all rights reserved.
            made with
          </p>
          <i className="fas fa-heart text-danger"></i>
          <p className="invert m-0 ps-2">by <a className="text-danger" href="https://sinandro.ir" target="_blank">sinawic</a>.</p>
        </div>
      </div>
    </footer>
  )
}