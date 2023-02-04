import React , { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// notify
import { errorNotify , successNotify } from '../Helper/toastify.js';

// import context
import { HouseContext } from '../Context/Houses';

const Modal = ({modal , setModal , id}) => {
    // use context
    const {updateData , setUpdateData } = useContext(HouseContext);

    // navigate
    const navigate = useNavigate();

    // delete data
    const deleteHandler = () => {
        const deleteData = async () => {
            await axios.delete(`http://localhost:3004/comments/${id}`)
            .then(res => {
                successNotify('آیتم مورد نظر با موفقیت حذف شد');
                setUpdateData(!updateData);
                navigate('/');
            })
            .catch(err => {
                errorNotify('خطایی رخ داده است');
            })
        }
        deleteData()
    }
    
    return (
        <div className={`absolute top-0 left-0 flex justify-center 
        items-center w-full h-screen bg-slate-300 dark:bg-zinc-600
        transition-all duration-700 ${modal == false && "opacity-0 pointer-events-none"}`}>
            <div className='flex flex-col items-center gap-y-4
            p-4 rounded-lg bg-slate-100 dark:bg-zinc-800'>
                <h1>آیا مطمئن هستید؟</h1>
                <div className='flex items-center gap-x-5'>
                    <button className='modal-btn'
                    onClick={deleteHandler}>
                        حذف
                    </button>
                    <button className='modal-btn'
                    onClick={() => setModal(false)}>
                        انصراف
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;