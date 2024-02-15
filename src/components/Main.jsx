import growTogether from '../assets/images/illustration-grow-together.svg';
import flowingConversation from '../assets/images/illustration-flowing-conversation.svg';
import users from '../assets/images/illustration-your-users.svg';


export const Main = () => {
  return (
    <>
        <main className="main">
            <section className="section">
                <div className="section__container container">
                    <figure className="section__picture">
                        <img src={growTogether} alt="imagen" className="section__img" />
                    </figure>
                    <div className="section__texts">
                        <h2 className="subtitle">Grow Together</h2>
                        <p className="section__paragraph"> Generate meaningful discussions with your audience and build a strong, loyal community. 
                            Think of the insightful conversations you miss out on with a feedback form.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section--white">
                <div className="section__container section__container--inverse container">
                    <figure className="section__picture">
                        <img src={flowingConversation} alt="imagen2" className="section__img" />
                    </figure>
                    <div className="section__texts">
                        <h2 className="subtitle">Flowing Conversations</h2>
                        <p className="section__paragraph">You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                         just-in-time loading for a more natural flow.</p>

                    </div>
                </div>

                <div className="wave wave--top"></div>
                <div className="wave wave--bottom"></div>
            </section>

            <section className="section">
                <div className="section__container container">
                    <figure className="section__picture">
                        <img src={users} alt="imagen3" className="section__img" />
                    </figure>
                    <div className="section__texts">
                        <h2 className="subtitle">Your Users</h2>
                        <p className="section__paragraph">  It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                         once signed in to your app, your users can start chatting immediately.</p>
                    </div>
                </div>
            </section>

            <section className="question">
                <div className="question__texts container">
                    <h2 className="subtitle">Ready To Build Your Community?</h2>
                    <a href="#" className="cta">Get Started For Free</a>
                </div>
                <div className="wave wave--top"></div>
                <div className="wave wave--bottom"></div>
            </section>
        </main>
    </>
  )
}
