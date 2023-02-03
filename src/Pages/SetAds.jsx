import React from 'react';
import { Formik , Form } from 'formik';

// components
import AdsInput from '../Formik/AdsInput';
import TextArea from '../Formik/TextArea';

// formik
import { initialValues3 , validationSchema3 } from '../Formik/FormikData';

const SetAds = () => {

    const onSubmit = () => {
        
    }

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
                    console.log(formik.values);
                    return(
                        <Form className='flex flex-col items-center gap-y-6 w-[350px]
                        p-6 shadow-lg mt-8 rounded-lg bg-gray-300 dark:bg-gray-700'>
                            <AdsInput name="phone" type="tel" label="شماره تماس"/>
                            <AdsInput name="address" type="text" label="آدرس"/>
                            <TextArea name="description" label="توضیحات"/>
                        </Form>
                    )
                }
            }
        </Formik>
    );
};

export default SetAds;