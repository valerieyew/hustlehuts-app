import classNames from 'classnames';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface props {
    className?: string;
}

const pageLinks = [{
    title: "Home",
    link: "#"
},{
    title: "About Us",
    link: "#"
},{
    title: "Contact",
    link: "#"
}];

const socialLinks = [
{
    title: "Instagram",
    link: "https://www.instagram.com/hustlehutssg/?hl=en",
    src: "/assets/images/instagram.png"
},
{
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100089365754412",
    src: "/assets/images/facebook.png"
},
{
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/hustlehuts/",
    src: "/assets/images/linkedin.jpg"
}
];

const helpingLinks = [{
    title: "We're Hiring!",
    link: "#"
},{
    title: "Terms",
    link: "#"
},{
    title: "Privacy",
    link: "#"
}];

const Footer:React.FC<props> = (props) => {
    const {className} = props;

    return (
        <div className={classNames(className, 'footer')}>
            <div className="container">
                <strong className='f-logo'><Link to='/'><img src='/assets/images/logo-w.svg'/></Link></strong>
                <div className="links-area">
                    
                    {/* {socialLinks.map((i)=>(
                        <div className="col">
                            <ul className="footer-menu">
                                <li key={i.link}>
                                    <Link to={i.link}>{i.title}</Link>
                                </li>
                            </ul>
                        </div>
                    ))} */}
                    
                    {/* <div className="col">
                        <ul className="footer-menu">
                            {pageLinks.map((i)=>(
                                <li key={i.link}>
                                    <Link to={i.link}>{i.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div className="col">
                        <ul className="footer-menu">
                            {socialLinks.map((i)=>(
                                <div>
                                    <img className="icons" src={i.src} />
                                    <li key={i.link}>
                                        <Link to={i.link} target="_blank" rel="noopener noreferrer">{i.title}</Link>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    {/* <div className="col">
                        <ul className="footer-menu">
                            {helpingLinks.map((i)=>(
                                <li key={i.link}>
                                    <Link to={i.link}>{i.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default styled(Footer)`
    &.footer {
        padding: 350px 0 60px 16rem;
        background: linear-gradient(188deg, #FFFFFF 25.03%, #BB9C71 52.78%, #462D2B 89.72%);

        @media (max-width: 1023px) {
            padding-top: 200px;
        }

        @media (max-width: 767px) {
            padding: 200px 0 35px;
        }

        .container {
            max-width: 990px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            @media (max-width: 767px) {
                flex-flow: row wrap;
            }
        }
    }

    .col {
        margin-right: 4rem;

        @media (max-width: 767px) {
            margin: 0 auto;
        }
    }

    
    .f-logo {
        width: 290px;
        min-width: 290px;
        display: block;

        @media (max-width: 1023px) {
            width: 220px;
            min-width: 220px;
        }

        @media (max-width: 767px) {
            margin: 0 auto 50px;
        }

        a {
            display: block;
        }

        img {
            width: 100%;
            height: auto;
            display: block;
        }
    }

    .icons {
        max-width: 1.5rem;
        display: inline;
        margin-right: 1rem;
        border-radius: 0.2rem;
    }

    .links-area {
        flex-grow: 1;
        flex-basis: 0;
        min-width: 0;
        display: flex;
        align-items: flex-start;
        padding-left: 10rem;

        @media (max-width: 1023px) {
            padding-left: 4rem;
        }

        @media (max-width: 767px) {
            flex-grow: inherit;
            flex-basis: auto;
            width: 100%;
            padding: 0;
        }
    }

    .footer-menu {
        font-size: 20px;
        line-height: 1;
        list-style: none;
        padding: 0;
        margin: 0;

        @media (max-width: 1023px) {
            font-size: 18px;
        }

        @media (max-width: 767px) {
            font-size: 16px;
        }

        li {
            margin: 0 0 35px;
            display: inline-block;

            a { 
                color: #fff;

                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }
`