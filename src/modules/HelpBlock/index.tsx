import classNames from 'classnames';
import React from 'react'
import styled from 'styled-components';
import Button from '../../components/Button';
interface props {
    className?: string;
    heading?: string;
    btnText?: string;
    text?: string;
    btnClick?: Function;
}
const HelpBlock:React.FC<props> = (props) => {
    const {className, heading, btnText, text, btnClick} = props;
    return (
        <div className={classNames(className, 'help-block')}>
            <div className="container">
                <div className="text-box">
                    <h2><span>{heading}</span></h2>
                    <Button onClick={()=> btnClick?.()}>{btnText}</Button>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default styled(HelpBlock)`
    &.help-block {
        width: 100%;
        text-align: center;
        overflow: hidden;
        padding: 158px 0 0;
        margin-bottom: -147px;

        @media (max-width: 1023px) {
            padding: 100px 0 0;
            margin-bottom: -100px;
        }

        @media (max-width: 767px) {
            padding: 75px 0 0;
        }

        h2 {
            font-size: 48px;
            line-height: 1;
            max-width: 570px;
            margin: 0 auto 28px;
            position: relative;

            @media (max-width: 1023px) {
                font-size: 38px;
                max-width: 450px;
            }

            @media (max-width: 767px) {
                font-size: 28px;
                max-width: 300px;
            }

            &:before {
                position: absolute;
                left: 50%;
                top: 65%;
                transform: translate(-50%, -50%);
                content: '';
                width: 9999px;
                height: 1px;
                background: #000;
            }

            span {
                background: #fff;
                padding: 0 50px;
                display: block;
                text-align: center;
                position: relative;
                z-index: 1;

                @media (max-width: 1023px) {
                    padding: 0 30px;
                }

                @media (max-width: 767px) {
                    padding: 0 15px;
                }
            }
        }

        .button-holder {
            margin: 0 0 13px;
        }

        .primary {
            min-width: 314px;
        }

        p {
            font-size: 20px;
            line-height: 1;
            margin: 0;
        }
    }
`