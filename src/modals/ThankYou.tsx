import classNames from 'classnames';
import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components';
import Button from '../components/Button';
import Inputs from '../components/Inputs';
import Modal from '../components/Modal';
 
interface props {
    className?: string;
    isOpen: boolean;
    closeHandler?: Function;
}
const ThankYou:React.FC<props> = (props) => {
    const {className, isOpen, closeHandler} = props;
    
    return (
        <Modal className={classNames(className, 'modal-thanks')} isOpen={isOpen} modalBody={
            <Fragment>
                <h2>Thanks for your interest!</h2>
                <span className="close" onClick={()=> closeHandler?.()}>x</span>
                <p>We'll send you more details on your email.</p>
                {/* <Button className='button-full'>Open Mail App</Button> */}
                <div className="more-info">
                    <div className="more-info-text">More stuff</div>
                </div>
                <ul className="list-btns">
                    <li><a href="https://www.instagram.com/hustlehutssg/?hl=en" target="_blank" rel="noopener noreferrer"><Button icon={<img src='/assets/images/instagram.png' alt='Instagram icon'/>} >Food and Cafe Reviews</Button></a></li>
                    <li><a href="https://t.me/hustlehuts" target="_blank" rel="noopener noreferrer"><Button icon={<img src='/assets/images/telegram.png' alt='Telegram icon'/>} >App Updates</Button></a></li>
                </ul>
                <span className="helping-text">Don't worry, we don't spam!</span>
            </Fragment>
        }/>
    )
}

export default styled(ThankYou)`
    &.modal-thanks {
        h2, p {
            text-align:center;
        }

        p {
            font-size: 18px;
            margin: 0 0 15px;
        }

        .button-full {
            width: 100%;
            margin: 0 0 35px;

            .primary {
                width: 100%;
                font-size: 18px;
                height: 54px;
            }
        }

        .more-info {
            position: relative;
            text-align: center;
            margin: 3rem 0 20px;

            &:before {
                position: absolute;
                left: -35px;
                right: -35px;
                top: 50%;
                transform: translateY(-50%);
                height: 1px;
                background: #462D2B;
                content: '';
                opacity: 0.5;

                @media (max-width: 767px) {
                    left: -15px;
                    right: -15px;
                }
            }

            .more-info-text {
                display: inline-block;
                vertical-align: top;
                font-size: 25px;
                line-height: 1.3;
                color: #462D2B;
                background: #fff;
                padding: 0 20px;
                position: relative;
                z-index: 1;
                font-weight: 700;
            }
        }

        .list-btns {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                text-align: center;
                margin: 0 0 13px;

                button {
                    font-size: 16px;
                    line-height: 1;
                    background: #462D2B;

                    img {
                        width: 30px;
                        margin: 0 0.9rem 0 0;
                    }
                }
            }
        }

        .helping-text {
            display: block;
            text-align: center;
            font-size: 12px;
            line-height: 1;
            padding-top: 10px;
        }
    }
`