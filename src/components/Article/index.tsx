import classNames from 'classnames';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
interface props {
    className?: string;
    headings?: string[];
    texts?: string[];
    imgSrc?: string;
}


const Article:React.FC<props> = ( {className, headings, texts, imgSrc} ) => {
    // const {className, headings, text, imgSrc} = props;

    return (
        <div className={classNames(className, 'article')}>
            <div className="container">
                {/* Computer screen */}
                <div className="text-holder">
                    {/* exclamation mark: tells TypeScript that the headings prop will always be defined */}
                    {headings!.map((string, index) => (
                        <div className="text-section" key={index} style={{ textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                            <h2>{string}</h2>
                            <h3>{typeof texts !== 'undefined' ? texts[index] : "N/A"}</h3>
                        </div>
                    ))}
                </div>

                {/* Smaller screen */}
                <div className="md-text-holder">
                    {/* exclamation mark: tells TypeScript that the headings prop will always be defined */}
                    {headings!.map((string, index) => (
                        <div className="text-section" key={index}>
                            <h2>{string}</h2>
                            <h3>{typeof texts !== 'undefined' ? texts[index] : "N/A"}</h3>
                        </div>
                    ))}
                </div>

                <div className="image-holder">
                    <img src={imgSrc} alt={imgSrc} />
                </div>
            </div>
        </div>
    )
}

export default styled(Article)`
    &.article {
        width: 85%;
        margin: auto;
        padding: 100px 0 0;

        @media (max-width: 1023px) {
            padding: 50px 0;
        }

        @media (max-width: 767px) {
            width: 80%;
            padding: 80px 0 0;
        }

        @media (max-width: 508px) {
            padding: 50px 10px 0;
        }

        .container {
            display: flex;
            justify-content: space-between;
            flex-direction: row-reverse;

            @media (max-width: 767px) {
                flex-flow: row wrap;
                flex-direction: row;
            }
        }

        .text-holder {
            text-align: right;
            width: 50%;
            margin-top: 4rem;
        }

        @media (min-width: 767.0001px) {
            .md-text-holder {
                display: none;
            }
        }

        .text-section {
            margin-top: 2.5rem;
        }

        h2 {
            color: #fff;
            font-size: 4rem;
            margin-bottom: 0rem;
            font-weight: bold;

            @media (max-width: 767px) {
                /* color: #000; */
                margin: 0 0 25px;
            }
        }

        h3 {
            color: #fff;
            font-size: 2rem;
        }

        @media (max-width: 1023px) {
            &:nth-last-child(2) {
                .text-holder {
                    margin-top: 10rem;
                }
            }

            &:nth-last-child(3) {
                .text-holder {
                    margin-top: 8rem;
                }
            }

            &:nth-last-child(4) {
                .text-holder {
                    margin-top: 2rem;
                }
            }

            .text-section {
                margin-top: 3rem;
            }

            h2, h3 {
                color: #fff;
                
            }

            h2 {
                font-size: 3rem; 
            }

            &:nth-last-child(2) {
                h2,h3 {
                    color: #000;
                }
    
                margin-bottom: 1.5rem;
            }
            

            h3 {
                font-size: 1.6rem;
            }
        }

        @media (max-width: 914px) {
            .text-section {
                margin-top: 2rem;
            }
        }

        @media (max-width: 767px) {
            .text-holder {
                display: none;
            }

            .md-text-holder {
                width: 100%;
                display: block;
                text-align: center;
            }

            .text-section {
                margin: 1rem 0;
            }

            h2, h3 {
                color: #fff;
                font-size: 25px;
                display: inline;
            }
            

            h3 {
                margin-left: 0.5rem;
            }
        }

        .image-holder {
            width: 36.5%;

            @media (max-width: 767px) {
                width: 100%;
                max-width: 220px;
                margin: 0 auto;
                margin-top: 0.5rem;
            }

            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }

        &:nth-child(even) {
            .container {
                flex-direction: row;
            }

            .text-holder {
                text-align: left;

                @media (max-width: 767px) {
                    text-align: center;
                }
            }
        }

        &:nth-last-child(2) {
            h2,h3 {
                color: #000;
            }

            margin-bottom: 1.5rem;
        }
    }
`