import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import './style.css'
import MiniLoader from '../miniLoader/MiniLoader';
import { useGetNotify } from '@/hooks/notify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: 600,
    maxWidth: 1000,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 'none',
    p: 0,
};

export default function Login({ children }) {
    const notify = useGetNotify()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [loading, setLoading] = useState(false)

    const [formdata, setFormdata] = useState({
        firstname: "",
        password: "",
        email: ""
    })
    const router = useRouter()

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    function handleSumbit(e) {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            console.log(formdata)
            notify('ok', "Login mofaqqiyatli")
            Cookies.set('role', 'admin')
            router.push('/dashboard')
        }, 1000);
    }

    return (
        <div>
            <button onClick={handleOpen}>{children}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className="formContainer flex flex-col items-center justify-center  bg-gray-100">
                        <div className="forminfo mb-4 text-center">
                            <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
                            <p className="text-gray-600">Please login to continue</p>
                        </div>

                        <form onSubmit={handleSumbit} className="rounded-lg shadow-md w-full max-w-md flex flex-col gap-6">
                            <h1 className="text-2xl font-semibold mb-2 text-white text-center">Register</h1>

                            <input
                                required
                                name='firstname'
                                onChange={handleChange}
                                type="text"
                                placeholder="First Name"
                                className="border border-white rounded p-2 focus:outline-none focus:ring-2  outline-0 text-white "
                            />
                            <input
                                required
                                name='password'
                                onChange={handleChange}
                                type="text"
                                placeholder="password"
                                className="border border-white rounded p-2 focus:outline-none focus:ring-2  outline-0 text-white "
                            />
                            <input
                                required
                                name='email'
                                onChange={handleChange}
                                type="text"
                                placeholder="Email"
                                className="border border-white rounded p-2 focus:outline-none focus:ring-2  outline-0 text-white "
                            />


                            <button
                                type="btn"
                                className="bg-[#af0d53] text-white p-2 rounded  transition flex justify-center">
                                {loading ? <MiniLoader color={'white'} /> : "Register"}
                            </button>
                        </form>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}
