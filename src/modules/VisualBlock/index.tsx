import classNames from 'classnames';
import React, {  ReactElement, ReactNode } from 'react'
import styled from 'styled-components';
import Button from '../../components/Button';
interface props {
    className?: string;
    heading?: ReactElement | ReactNode;
    description?: string;
    btnText?: string;
    ratingText?: string;
    starRating?: ReactElement | ReactNode;
    imgSrc?: string;
    modalopener?: Function;
}
const VisualBlock:React.FC<props> = (props) => {
    const {className, heading, description, btnText, starRating, imgSrc, modalopener} = props;
  return (
    <div className={classNames(className, 'visual-block')}>
        <div className="container">
            <img src="../assets/images/ellipses.png" className="ellipse" />
            <div className="text-holder">
                <h1>{heading}</h1>
                <p>{description}</p>
                <Button className='outline' onClick={()=> modalopener?.()}>{btnText}</Button>
                <div className="rating-box">
                    <div className="text">Loved by 100+ cafes (and more!)</div>
                    <ul className="star-rating">{starRating}</ul>
                </div>
            </div>
            <div className="image-holder">
                <img src={imgSrc} alt={imgSrc} />
            </div>
        </div>
    </div>
  )
}

export default styled(VisualBlock)`
    &.visual-block {
        width: 100%;
        padding: 44px 0 0;
        position: relative;

        @media (max-width: 767px) {
            text-align: center;
            padding: 25px 0 0;
        }

        &:after {
            position: absolute;
            right: 0;
            top: 16px;
            bottom: -930px;
            width: 100%;
            content: '';
            background: url('../assets/images/bg-shape01.png') no-repeat;
            background-size: 100% 100%;
            z-index: -2;

            @media (max-width: 1023px) {
                bottom: -700px;
            }

            @media (max-width: 767px) {
                /* display: none; */
                top: 0;
                bottom: -560px;
                width: auto;
                left: -80px;
                right: -300px;
            }
        }

        .container {
            width: 90%;
            max-width: 1120px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            @media (max-width: 1023px) {
                width: 80%;
            }

            @media (max-width: 767px) {
                flex-flow: row wrap;
            }
        }

        .ellipse {
            position: absolute;
            overflow: hidden;
            width: fit-content;
            height: fit-content;
            z-index: -1;
        }

        .text-holder {
            width: 40%;
            padding: 10.4% 0 0;

            @media (max-width: 1199px) {
                width: 45%;
                padding: 0;
            }

            @media (max-width: 767px) {
                width: 100%;
                padding: 0;
                margin: 0 0 30px;
            }

            h1 {
                margin: 0 0 26px;

                .underline {
                    text-decoration: underline;
                }
            }

            p {
                font-size: 32px;
                line-height: 1;
                margin: 0 0 27px;

                @media (max-width: 1023px) {
                    font-size: 24px;
                }

                @media (max-width: 767px) {
                    font-size: 18px;
                }
            }
            
            .button-holder {
                margin: 0 0 30px;
            }
        }

        .star-rating {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;

            @media (max-width: 767px) {
                justify-content: center;
            }

            li {
                img {
                    width: 17px;
                    height: 17px;
                }
            }
        }

        .image-holder {
            width: 28%;
            margin: 0 8% 0 0;

            @media (max-width: 1023px) {
                margin: 0;
                width: 35%
            }

            @media (max-width: 767px) {
                width: 100%;
                max-width: 240px;
                margin: 0 auto;
            }

            

            img {
                width: 100%;
                height: auto;
                display: block;
            }
        }
    }
`