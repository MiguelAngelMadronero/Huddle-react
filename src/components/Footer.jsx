
import { Input } from "./Input";
import white from '../assets/images/logo-white.svg';
import phone from '../assets/images/icon-phone.svg';
import email from '../assets/images/icon-email.svg';
import fb from '../assets/images/fb.svg';
import ing from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';


export const Footer = () => {
  

  return (
    <>
        <footer className="footer">
            <div className="footer__container container">
                <section className="footer__newsletter">
                    <h2 className="footer__title">Newsletter</h2>
                    <p className="footer__paragraph">To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                        send you spam or pass on your email address</p>
                    {/* <form  className="footer__form" onSubmit={event=>onSubmit(event)}>
                        <input type="email" className="footer__input" />
                        <Input/>

                        <input type="submit" className="footer__cta" value="Subscribe"/>
                    </form> */}
                    <Input/>
                </section>

                <section className="footer__content">
                    <img src={white} alt="logo2" className="footer__logo" />
                    <p className="footer__paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
                        vestibulum a, ultrices quis sem.</p>
                    <div className="footer__contact">
                        <img src={phone} alt="imagen" className="footer__img" />
                    </div>
                    <div className="footer__contact footer__contact--email">
                        <img src={email} alt="imagen" className="footer__img" />
                    </div>
                    <div className="footer__social">
                        <a href="#" className="footer__link">
                            <img src={fb} alt="facebook" className="footer__icon" />
                        </a>
                        <a href="#" className="footer__link">
                            <img src={ing} alt="instagram" className="footer__icon" />
                        </a>
                        <a href="#" className="footer__link">
                            <img src={twitter} alt="Twitter" className="footer__icon" />
                        </a>
                    </div>

                    


                </section>
            </div>
        </footer>
    </>
  )
}
