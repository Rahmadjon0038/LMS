'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useGetNotify } from '@/hooks/notify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useRole } from '@/context/auth';
import { useLogin } from '@/hooks/auth';
import MiniLoader from '../miniLoader/MiniLoader';
import Loader from '../Loader/Loader';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 450,
    bgcolor: 'transparent',
    boxShadow: 'none',
    outline: 'none',
};

export default function Login({ children }) {
    const notify = useGetNotify();
    const loginMutation = useLogin()
    const { setRole, openLogin: open, setOpenLogin: setOpen, openRegis, setOpenregis } = useRole()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigateRegister = () => {
        setOpenregis(true)
        setOpenLogin(false)
    }

    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    });


    const router = useRouter();

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

    function handleSumbit(e) {
        e.preventDefault();

        loginMutation.mutate(formdata,
            {
                onSuccess: (data) => {
                    notify('ok', data?.message);
                    Cookies.set("role", data?.role);
                    Cookies.set("token", data?.token);
                    
                    setRole(data?.role)   // Role context 

                    const userRole = data?.role;
                    if (userRole === "admin" || userRole === "teacher" || userRole === "student") {
                        router.push(`/dashboard/${userRole}`);
                    } else {
                        router.push('/');
                    }
                },
                onError: (error) => {
                    notify('err', error?.response?.data?.message);
                }
            }
        )
    }




    return (
        <div>
            <button
                onClick={handleOpen}>
                {children}
            </button>

            {loginMutation.isLoading ? <Loader /> : <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 rounded-2xl shadow-2xl p-8 flex flex-col items-center relative">
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white text-xl font-bold hover:text-gray-200 transition">
                            &times;
                        </button>

                        {/* Header */}
                        <div className="text-center mb-6">
                            <h1 className="text-3xl font-bold text-white">Welcome Back!</h1>
                            <p className="text-purple-200 mt-2">Please login to continue</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSumbit} className="w-full flex flex-col gap-4">
                            <input
                                required
                                name="email"
                                onChange={handleChange}
                                type="text"
                                placeholder="First Name"
                                className="p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-sm transition"
                            />

                            <input
                                required
                                name="password"
                                onChange={handleChange}
                                type="password"
                                placeholder="Password"
                                className="p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-sm transition"
                            />

                            <button
                                type="submit"
                                className="bg-white text-purple-700 font-semibold p-3 rounded-lg hover:bg-purple-50 shadow-md flex justify-center items-center transition">
                                {loginMutation.isLoading ? <MiniLoader color={'purple'} /> : "Login"}
                                {/* sumbit */}
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="mt-6 text-purple-200 text-sm">
                            Don't have an account? <span onClick={navigateRegister} className="underline cursor-pointer hover:text-white">Register</span>
                        </div>
                    </div>
                </Box>
            </Modal>}
        </div>
    );
}
