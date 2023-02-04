import React, { useEffect, useState } from 'react';
import { Formik , Form } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { errorNotify , successNotify } from '../Helper/toastify';

// components
import AdsInput from '../Formik/AdsInput';
import TextArea from '../Formik/TextArea';
import Map from '../Components/Map';

// formik
import { initialValues3 , validationSchema3 } from '../Formik/FormikData';

// export context
export const CoordinatesContext = React.createContext();

const SetAds = () => {
    // navigate
    const navigate = useNavigate();

    // use state
    const [coordinates  , setCoordinates] = useState(null);
    const [disabled , setDisabled] = useState(true);

    const onSubmit = (values , submitProps) => {
        let ads = {
            tel: values.phone,
            address: values.address,
            description: values.description,
            position: coordinates,
        }
        const sendData = async () => {
            await axios.post("http://localhost:3004/comments" , ads)
            .then(res => {
                submitProps.setSubmitting(false);
                submitProps.resetForm();
                successNotify('آگهی با موفقیت ثبت  شد')
                navigate('/');
            })
            .catch(err => {
                submitProps.setSubmitting(false);
                errorNotify('مجددا تلاش کنید')
            })
        }
        sendData();
    }

    // useEffect
    useEffect(() => {
        if(coordinates){
            setDisabled(false);
        }
        else{
            setDisabled(true)
        }
    } , [coordinates])

    return (
        <Formik
        initialValues={initialValues3}
        onSubmit={onSubmit}
        validationSchema={validationSchema3}
        validateOnChange={true}
        validateOnMount
        enableReinitialize
        >
            {
                formik => {
                    return(
                        <Form className='flex flex-col items-center gap-y-6 w-[350px] h-[500px]
                        p-4 shadow-lg mt-8 rounded-lg bg-gray-300 dark:bg-gray-700'>
                            <AdsInput name="phone" type="tel" label="شماره تماس (بدون صفر)"/>
                            <AdsInput name="address" type="text" label="آدرس"/>
                            <TextArea name="description" label="توضیحات"/>
                            <CoordinatesContext.Provider value={{setCoordinates}}>
                                <Map />
                            </CoordinatesContext.Provider>
                            <button disabled={!formik.isValid || disabled} 
                            className={`form-btn ${(!formik.isValid || disabled) && "opacity-50"}`}>
                                ثبت
                            </button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
};

export default SetAds;