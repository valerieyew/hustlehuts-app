import classNames from 'classnames';
import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Register from '../../modals/Register';
import ThankYou from '../../modals/ThankYou';
interface props {
    className?: string;
    closeHandler?: Function;
}

const Header:React.FC<props> = (props) => {
    const [modal, setModal] = useState(false);
    const {className, closeHandler} = props;
    return (
        <div className={classNames(className, 'header')}>
            <div className="container">
                <strong className='logo'><Link to='/'><img src='/assets/images/logo.svg'/></Link></strong>
                <span className="nav-opener" onClick={()=> document.body.classList.toggle("nav-active")}><span></span></span>
                <div className="nav-drop">
                    <ul className="menu">
                        <li>
                            <Link to='https://hustlehuts.com/'>Home</Link>
                        </li>
                        <li>
                            <Link to='mailto:admin@hustlehuts.com'>Email Us</Link>
                        </li>
                        <li>
                            <Link to='https://forms.gle/WvHLdzQuUnwWpT2M7'>Career</Link>
                        </li>
                        <li>
                            <Button onClick={()=> setModal(true)}> Register</Button>
                            {/* <span className="helping-text"><span className='text'>Sign up as a Cafe or Customer</span> <span className='arrow'><img src="/assets/images/arrow-right.svg" alt="arrow right" /></span></span> */}
                        </li>
                    </ul>
                </div>
            </div>
            <Register isOpen={modal}  closeHandler={()=> setModal(false)}/>
        </div>
    )
}


export default styled(Header)`
    &.header {
        width: 100%;
        background: #fff;
        padding: 50px 0;

        @media (max-width: 1023px) {
            padding: 25px 0;
        }

        @media (max-width: 767px) {
            padding: 15px 0;
        }

        .container {
            max-width: 1120px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .logo {
        width: 290px;
        min-width: 290px;
        display: block;

        @media (max-width: 1023px) {
            width: 220px;
            min-width: 220px;
        }

        @media (max-width: 767px) {
            width: 170px;
            min-width: 170px;
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

    .nav-opener {
        display: none;
        width: 36px;
        height: 36px;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        z-index: 10;

        @media (max-width: 767px) {
            display: flex;
            flex-direction: column;
        }

        &:before,
        &:after,
        span {
            width: 24px;
            height: 2px;
            background: #000;
            content: '';
            margin: 5px 0 0;
            transition: all 0.3s ease-in-out;
        }

        &:before {
            margin: 0;

            .nav-active & {
                @media (max-width: 767px) {
                    transform: rotate(45deg);
                    background: #fff;
                }
            }
        }

        &:after {
            .nav-active & {
                @media (max-width: 767px) {
                    margin: -2px 0 0;
                    transform: rotate(-45deg);
                    background: #fff;
                }
            }
        }

        span {
            .nav-active & {
                @media (max-width: 767px) {
                    display: none;
                }
            }
        }
    }

    .nav-drop {
        @media (max-width: 767px) {
            position: fixed;
            right: 0;
            top: 0;
            bottom: 0;
            width: 290px;
            background: #a98c67;
            z-index: 9;
            transform: translateX(100%);
            transition: all 0.3s ease-in-out;
        }

        .nav-active & {
            @media (max-width: 767px) {
                transform: none;
            }
        }
    }

    .menu {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        font-size: 22px;
        line-height: 1;

        @media (max-width: 1023px) {
            font-size: 18px;
        }

        @media (max-width: 767px) {
            display: block;
            padding: 60px 20px;
        }

        li {
            margin: 0 30px;
            position: relative;

            @media (max-width: 1199px) {
                margin: 0 30px;
            }

            @media (max-width: 1023px) {
                margin: 0 15px;
            }

            @media (max-width: 767px) {
                margin: 0;
                padding: 15px 0;
            }

            &:last-child {
                margin-right: 0 !important;
            }

            a {
                &:not(.primary) {
                    color: #462D2B;

                    @media (max-width: 767px) {
                        color: #fff;
                    }
                }
            }

            .primary {
                @media (max-width: 767px) {
                    width: 100%;
                    background: #462d2b;
                }
            }
        }
    }

    .helping-text {
        position: absolute;
        right: -23px;
        bottom: -25px;
        font-size: 16px;
        line-height: 1;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        @media (max-width: 1199px) {
            right: 0;
        }

        @media (max-width: 767px) {
            right: auto;
            left: 0;
            color: #fff;
        }

        .text {
            display: block;
        }

        .arrow {
            min-width: 23px;
            font-size: 0;
            line-height: 0;
            margin-left: 8px;
        }
    }
`