import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import MiniLoader from '../miniLoader/MiniLoader';
import { useGetNotify } from '@/hooks/notify';
import { useRole } from '@/context/auth';

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

export default function Register({ children }) {
    const notify = useGetNotify();

    // const [open, setOpen] = useState(false);
    const { openLogin, setOpenLogin, openRegis: open, setOpenregis: setOpen } = useRole()


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigateLogin = () => {
        setOpen(false)
        setOpenLogin(true)
    }

    const [loading, setLoading] = useState(false);

    const [formdata, setFormdata] = useState({
        password: "",
        firstname: "",
        lastname: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

    function handleSumbit(e) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log(formdata);
            notify('ok', "Ro'yhatdan o'tish muvaffaqiyatli");
            handleClose();
            setOpenLogin(true)
        }, 2000);
    }

    return (
        <div>
            <button
                onClick={handleOpen}>
                {children}
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 rounded-2xl shadow-2xl p-8 flex flex-col items-center relative">
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white text-xl font-bold hover:text-gray-200 transition"
                        >
                            &times;
                        </button>

                        {/* Header */}
                        <div className="text-center mb-6">
                            <h1 className="text-3xl font-bold text-white">Create Account</h1>
                            <p className="text-purple-200 mt-2">Please register to continue</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSumbit} className="w-full flex flex-col gap-4">
                            <input
                                required
                                name="firstname"
                                onChange={handleChange}
                                type="text"
                                placeholder="First Name"
                                className="p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-sm transition"
                            />
                            <input
                                required
                                name="lastname"
                                onChange={handleChange}
                                type="text"
                                placeholder="Last Name"
                                className="p-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-sm transition"
                            />
                            <input
                                required
                                name="email"
                                onChange={handleChange}
                                type="email"
                                placeholder="Email"
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
                                className="bg-white text-purple-700 font-semibold p-3 rounded-lg hover:bg-purple-50 shadow-md flex justify-center items-center transition"
                            >
                                {loading ? <MiniLoader color={'purple'} /> : "Register"}
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="mt-6 text-purple-200 text-sm text-center">
                            Already have an account? <span onClick={navigateLogin} className="underline cursor-pointer hover:text-white">Login</span>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
