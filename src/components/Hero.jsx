import screeMockups from '../assets/images/screen-mockups.svg';
import iconCommunities from '../assets/images/icon-communities.svg';
import iconMessages from '../assets/images/icon-messages.svg';

export const Hero = () => {
  return (
    <>
        <section className=" hero__main container">
            <div className="hero__texts">
                <h1 className="hero__title">Build The Community Your Fans Will Love</h1>
                <p className="hero__paragraph">Huddle re-imagines the way we build communities. You have a voice, but so does 
            your audience. Create connections with your users as you engage in genuine discussion.</p>
            <a href="#" className="cta">Get Started For Free</a>
            </div>

            <figure className="hero__picture">
                <img src={screeMockups} alt="imagen" className="hero__img" />
            </figure>
            <div className="hero__numbers">
                <div className="hero__item">
                    <img src={iconCommunities} alt="imagen" className="hero__icon" />
                    <h3 className="hero__number">1.4k+</h3>
                    <p className="hero__community">Communities Formed</p>
                </div>

                <div className="hero__item">
                    <img src={iconMessages} alt="imagen" className="hero__icon" />
                    <h3 className="hero__number">2.7m+</h3>
                    <p className="hero__community">Messages Sent</p>
                </div>
            </div>

          
        </section>
        <div className="wave wave--bottom"></div>
    </>
  )
}
