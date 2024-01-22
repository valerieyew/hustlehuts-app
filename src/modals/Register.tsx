import classNames from 'classnames';
import React, { Fragment, useState } from 'react'
import styled from 'styled-components';
import Button from '../components/Button';
import Inputs from '../components/Inputs';
import { useFormik } from 'formik';
import Modal from '../components/Modal';
import ThankYou from './ThankYou';
import { CustomersSchema } from '../Yup';
import { createUserAPI } from '../api/user';
import {toast} from '../toaster'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/bootstrap.css";
 
interface props {
    className?: string;
    isOpen: boolean;
    modalHandler?: Function;
    closeHandler?: Function;
}

const Register:React.FC<props> = (props) => {

    const {className, isOpen, modalHandler, closeHandler} = props;
    const [modal1, setModal1] = useState(false);
    const formik = useFormik<any>({
        initialValues: {
            userType: 'customer',
            name: '',
            email: '',
            phone: '',
        },
       validateOnChange: false,
       // validateOnBlur: false,
        validationSchema: CustomersSchema,
        onSubmit: async (values) => {
            const obj = {
                userType: values?.userType,
                name: values?.name,
                email: values?.email,
                phone: `${values?.phone}`.toString(),
            }
            
           await createUserAPI(obj)
            .then((res:any) => {
                setModal1(true);
                closeHandler?.();
            })
            .catch((err:any) => {
                //alert(err.message)
                toast.error(err.message);
            })
        }
    });
    return (
        <Fragment>
        <Modal className={classNames(className, 'modal-register')} isOpen={isOpen} modalBody={
            <Fragment>
                <h2>Sign Up</h2>
                <span className="close" onClick={()=> closeHandler?.()}>x</span>
                <form action="#">
                    <ul className="list-radio">
                        <li>
                            <label className='fake-radio-label' >
                                <input type="radio" name='userType' checked={formik.values.userType === 'cafe'} onClick={()=>{
                                    formik.setFieldValue('userType','cafe');
                                    formik.setTouched({}, false);
                                }}/>
                                <span className="fake-radio-text">I'm a cafe!</span>
                            </label>
                        </li>
                        <li>
                            <label className='fake-radio-label' >
                                <input type="radio" name='userType' checked={formik.values.userType === 'customer'} onClick={()=>{
                                    formik.setFieldValue('userType','customer');
                                    formik.setTouched({}, false);
                                }}/>
                                <span className="fake-radio-text">I'm a customer!</span>
                            </label>
                        </li>
                    </ul>
                    {formik.errors.userType && `${formik.errors.userType}`}

                    <Inputs label='Name' placeholder='' type="text" name='name' id='name'
                        touched={formik.touched.name}
                        error={formik.errors.name}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="error">
                        {formik.errors.name && `${formik.errors.name}`}
                    </div>
                    
                    

                    <Inputs label='Email' placeholder='' type="email" name='email'  id='email'
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="error">
                        {formik.errors.email && `${formik.errors.email}`}
                    </div>
                    

                    <div >
                        <PhoneInput placeholder=''
                            country={"sg"}
                            inputProps={{
                                id: 'phone',
                                name: 'phone'
                            }}
                            containerClass={classNames("phoneform-control",  "num-holder")}
                            value={formik.values.phone}
                            onChange={(value) => formik.handleChange({
                                target: { 
                                    name: 'phone',
                                    id: 'phone',
                                    value:  value,
                                  }
                            })}
                            onBlur={(value) => formik.handleBlur({
                                target: { 
                                    name: 'phone',
                                    id: 'phone',
                                    value:  value,
                                  }
                            })}
                        />

                    </div>
                    {/* <div className="error">
                        {formik.errors.phone && `${formik.errors.phone}`}
                    </div> */} 

                    <Button type="submit" onClick={formik.handleSubmit} disabled={formik.isSubmitting}>Submit</Button>
                    <span className="helping-text">Don't worry, we're free!</span>
                </form>
            </Fragment>
        }/>
        <ThankYou isOpen={modal1} closeHandler={()=> setModal1(false)}/>
    </Fragment>
    )
}

export default styled(Register)`
    .list-radio {
        list-style: none;
        margin: 0;
        padding: 6px 7px;
        background: #4F3C36;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 18px;
        display: flex;
        margin: 0 0 15px;

        li {
            flex: 1;
        }
    }

    .fake-radio-label {
        position: relative;
        display: block;
        width: 100%;
        cursor: pointer;

        .fake-radio-text {
            font-size: 22px;
            line-height: 1;
            display: block;
            text-align: center;
            color: #fff;
            border-radius: 15px;
            padding: 11px;

            @media (max-width: 767px) {
                font-size: 16px;
            }
        }

        input[type="radio"] {
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            visibility: hidden;

            &:checked {
                + .fake-radio-text {
                    color: #462d2b;
                    background: #fff;
                    box-shadow: 0 10px 4px rgba(0, 0, 0, 0.25);
                }
            }
        }
    }

    .num-holder {
        display: flex;
        justify-content: space-between;
        
        .country-code {
            width: 98px;
            min-width: 98px;

            .form-control {
                text-align: center;
            }
        }

        .phone-num {
            flex-grow: 1;
            flex-basis: 0;
            min-width: 0;
            padding: 0 0 0 13px;
        }
    }

    .button-holder {
        width: 100%;
        margin: 0 0 12px;

        .primary {
            width: 100%;
        }
    }

    .helping-text {
        display: block;
        text-align: center;
        font-size: 16px;
        line-height: 1;
    }

    .error {
        font-size: 14px;
        position: relative;
          top: -15px;
        color: #FF0000 !important;
    }

    .phoneform-control {
        background: #fff;
        /* padding: 17px 24px 14px; */
        padding: 10px 20px 8px; 
        border-radius: 20px;
        border: 1px solid #d6d6d6;
        margin: 5px 0 20px 0;
    
        @media (max-width: 767px) {
          padding: 10px 20px 8px;
        }
    
        &.has-error {
          border-color: #f00;
          
        }
    
        label {
          display: block;
          font-size: 20px;
          line-height: 1;
          color: #462d2b;
          margin: 0 0 6px;
    
          @media (max-width: 767px) {
            font-size: 16px;
          }
        }
    
        .form-control {
          width: 100%;
          font-size: 20px;
          line-height: 1;
          border: 0;
          color: #000;
          outline: none;
          font-family: "Proxima Nova", "Arial", "Helvetica Neue", "Helvetica",
            sans-serif;
    
          @media (max-width: 767px) {
            font-size: 16px;
          }
    
          &::placeholder {
            color: #999999;
            opacity: 1;
          }
        }
      }

      &.react-tel-input input:focus {
        outline: "none !important",
        boxShadow: "0px 0px 0px 1px #69e781",  
     }

`