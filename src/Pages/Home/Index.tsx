import classNames from 'classnames';
import React, { useState } from 'react'
import styled from 'styled-components';
import Article from '../../components/Article';
import Footer from '../../components/Footer';
import Register from '../../modals/Register';
import Header from '../../modules/Header';
import HelpBlock from '../../modules/HelpBlock';
import VisualBlock from '../../modules/VisualBlock';
interface props {
    className?: string;
}
const Home:React.FC<props> = (props) => {
    const {className} = props;
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const TeleUrl = 'https://t.me/hustlehuts';

  return (
    <div className={classNames(className, 'home')}>
        <Header />
        <VisualBlock 
            heading={<>Work <span className='underline'>anywhere, anytime</span></>}
            description="Access conducive cafes at discounted prices"
            btnText='Take a peek'
            ratingText='Loved by 100+ cafes (and more!)'
            modalopener={() => { window.location.href = TeleUrl; }}
            starRating={
                <>
                    <li><img src="/assets/images/star.png" alt="star.png" /></li>
                    <li><img src="/assets/images/star.png" alt="star.png" /></li>
                    <li><img src="/assets/images/star.png" alt="star.png" /></li>
                    <li><img src="/assets/images/star.png" alt="star.png" /></li>
                    <li><img src="/assets/images/star.png" alt="star.png" /></li>
                </>
            }
            // imgSrc="/assets/images/Top Banner.gif"
            imgSrc="/assets/images/App Home Page 1.png"
        />
        <div className="articles-block">
            <Article headings={["Discover", "Unearth"]} texts={["aesthetic and conducive cafes", "hidden gems all over"]} imgSrc="/assets/images/App Home Map 2.png"/>
            <Article headings={["Secure", "Instant"]} texts={["seats with ease", "reservations for a fixed time"]} imgSrc="/assets/images/App Booking Page 3.png"/>
            <Article headings={["Redeem", "Unlock"]} texts={["exclusive discounts and deals", "various rewards from different cafes"]} imgSrc="/assets/images/App Rewards Page 4.png"/>
            <img src="../assets/images/ellipses2.png" className="ellipse2" />
        </div>
        {/* <HelpBlock 
            heading='HustleHuts helps you hustle with ease. '
            btnText='I want to try it out'
            text="Don't worry, it's free!"
            btnClick={()=> setModal(true)}
        /> */}
        <div>
        <HelpBlock 
            heading='HustleHuts helps you hustle with ease. '
            btnText='Keep me in the loop'
            text="Don't worry, it's free!"
            btnClick={() => (window.location.href = TeleUrl)}
        />
        </div>
        <Footer />
        <Register isOpen={modal}  closeHandler={()=> setModal(false)}/>
    </div>
  )
}

export default styled(Home)`
.ellipse2 {
    position: absolute;
    overflow: hidden;
    width: fit-content;
    height: fit-content;
    z-index: -1;
    top: 40%;
    right: 30%
}
    .articles-block {
        
        width: 100%;
        position: relative;
        
        &:after {
            position: absolute;
            left: 0;
            bottom: 16%;
            height: 1391px;
            width: 90.3%;
            content: '';
            background-image: url('../assets/images/bg-shape02.png'); 
            background-repeat: no-repeat;
            background-size: 90% 90%;
            z-index: -2;

            @media (max-width: 1023px) {
                height: 1000px;
            }

            @media (max-width: 767px) {
                /* display: none; */
                height: 780px;
                bottom: 40%;
                width: auto;
                right: -80px;
                left: 0;
            }
            
        }

        
    }
`
