import ClipboardJS from "clipboard";
import { Button } from "react-bootstrap";

export default function Layout() {
  return (
    <footer className="bg-dark">
      <section id="contact">
        <div className="text-center container py-5">
          <div className="text-light pb-5">
            <h3>Finally, Let's Get In Touch. Shall We!</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-4 py-3">
              <div className="py-3">
                <span className="text-light">My Phone Number: </span>
                <strong className="fs-3"><a href="tel:+989352641726">09352641726</a></strong>
              </div>

              <div className="py-3">
                <span className="text-light">My Email: </span>
                <strong className="fs-3"><a href="mailto:sinawic9@gmail.com">sinawic9@gmail.com</a></strong>
              </div>
            </div>

            <div className="col-sm-4 py-3">
              <div className="py-3">
                <span className="text-light">My Linkedin: </span>
                <strong className="fs-3"><a href="https://www.linkedin.com/in/sinawic" target="_blank">Sina Mahmoodi</a></strong>
              </div>

              <div className="py-3">
                <span className="text-light">My Instagram: </span>
                <strong className="fs-3"><a href="https://www.instagram.com/sina.wic/" target="_blank">sina.wic</a></strong>
              </div>

              <div className="py-3">
                <span className="text-light">My Youtube: </span>
                <strong className="fs-3"><a href="https://www.youtube.com/channel/UC33nD8gkUUAJr36E9di1bDA" target="_blank">Medium Guy</a></strong>
              </div>

              <div className="py-3">
                <span className="text-light">My Stackoverflow: </span>
                <strong className="fs-3"><a href="https://stackoverflow.com/users/6038095/sinawic" target="_blank">Sinawic</a></strong>
              </div>

              <div className="py-3">
                <span className="text-light">My Github: </span>
                <strong className="fs-3"><a href="https://github.com/sinawic" target="_blank">Sinawic</a></strong>
              </div>
            </div>

            <div className="col-sm-6 pt-5 text-light">
              <h5>If You Ever Wanted To Support Me, Which Will Help Grow My Works And I'd Greatly Appreciate:</h5>
              <br />
              <p>
                <span>tether trc20 / tron: </span>
                <Button id="tron" variant="link" onClick={() => {
                  new ClipboardJS('#tron', { text: () => 'TSF5AKC9TYspjcJSDqaT3b22EfUq8Etyyh' })
                }}>TSF5AKC9TYspjcJSDqaT3b22EfUq8Etyyh <i className="fas fa-copy"></i></Button>

                <br />
                <span>ltc: </span>
                <Button id="ltc" variant="link" onClick={() => {
                  new ClipboardJS('#ltc', { text: () => 'ltc1qk27exedqyqppjs6ttl00zwg7r9ts7ffqp542qm' })
                }}>ltc1qk27exedqyqppjs6ttl00zwg7r9ts7ffqp542qm <i className="fas fa-copy"></i></Button>

                <br />
                <span>btc: </span>
                <Button id="btc" variant="link" onClick={() => {
                  new ClipboardJS('#btc', { text: () => 'bc1qzrc42nayymd5psfyrgqthft37tueg90kzpyy3p' })
                }}>bc1qzrc42nayymd5psfyrgqthft37tueg90kzpyy3p <i className="fas fa-copy"></i></Button>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-secondary py-3 mt-5">
        <div className="container d-flex align-items-center">
          <p className="invert m-0 pe-2">
            @2020.
            all rights reserved.
            made with
          </p>
          <i className="fas fa-heart text-danger"></i>
          <p className="invert m-0 ps-2">by <a className="text-danger" href="https://sinawic.ir" target="_blank">sinawic</a>.</p>
        </div>
      </div>
    </footer>
  )
}