import * as yup from "yup";

export const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const initialValues2 = {
    loginEmail: "",
    loginPassword: ""
}

export const onSubmit = (values , submitProps) => {
 
}

export const onSubmit2 = (values , submitProps) => {
  
}

export const validationSchema = yup.object({
    name: yup.string().required("لطفا فیلد را پر کنید").min(3 , 'نام کاربری کوتاه است').max(60 , "نام کاربری بیش از حد مجاز است"),
    email: yup.string().required('لطفا فیلد را پر کنید').email("ایمیل نامعتبر است"),
    password: yup.string().required('لطفا فیلد را پر کنید').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ , "رمز حداقل هشت کارکتر و شامل حروف بزرگ و اعداد باشد"),
    confirmPassword: yup.string().required('لطفا فیلد را پر کنید').oneOf([yup.ref('password'), null], 'تکرار رمز عبور صحیح نمی باشد'),
})

export const validationSchema2 = yup.object({
    loginEmail: yup.string().required("لطفا فیلد را پر کنید").email("ایمیل نامعتبر است"),
    loginPassword: yup.string().required("لطفا فیلد را پر کنید"),
})