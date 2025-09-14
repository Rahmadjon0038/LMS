"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";

// Local user ma'lumotlari
const userData = {
    firstname: "Rahmadjon",
    lastname: "Abdullayev",
    role: "admin",
    email: "rahmadjon@example.com",
    avatar: "/you.jpg", // public papkadan
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
    outline: "none",
};

export default function UserProfileModal({ children }) {
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(true);
    const [userUpdate, setUserUpdate] = React.useState({
        firstname: userData.firstname,
        lastname: userData.lastname,
        role: userData.role,
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onchange = (e) => {
        const { name, value } = e.target;
        setUserUpdate({ ...userUpdate, [name]: value });
    };

    const saveUpdate = () => {
        Object.assign(userData, userUpdate);
        setEdit(true);
    };

    return (
        <div className="">
            <span onClick={handleOpen}>{children}</span>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <Avatar
                            src={userData.avatar}
                            alt="Avatar"
                            sx={{ width: 64, height: 64 }}
                        />
                        <div>
                            <Typography variant="h6">
                                {userData.firstname} {userData.lastname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {userData.email}
                            </Typography>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Typography variant="subtitle2">Ismi</Typography>
                            {edit ? (
                                <Typography className="bg-gray-100 p-2 rounded">
                                    {userData.firstname}
                                </Typography>
                            ) : (
                                <input
                                    type="text"
                                    name="firstname"
                                    value={userUpdate.firstname}
                                    onChange={onchange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            )}
                        </div>

                        <div>
                            <Typography variant="subtitle2">Familiya</Typography>
                            {edit ? (
                                <Typography className="bg-gray-100 p-2 rounded">
                                    {userData.lastname}
                                </Typography>
                            ) : (
                                <input
                                    type="text"
                                    name="lastname"
                                    value={userUpdate.lastname}
                                    onChange={onchange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            )}
                        </div>

                        <div>
                            <Typography variant="subtitle2">Role</Typography>
                            {edit ? (
                                <Typography className="bg-gray-100 p-2 rounded">
                                    {userData.role}
                                </Typography>
                            ) : (
                                <input
                                    type="text"
                                    name="role"
                                    value={userUpdate.role}
                                    onChange={onchange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            )}
                        </div>

                        <div>
                            <Typography variant="subtitle2">Email</Typography>
                            <Typography className="bg-gray-100 p-2 rounded">{userData.email}</Typography>
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex justify-between mt-6">
                        <button
                            variant="contained"
                            color="primary"
                            onClick={() => (edit ? setEdit(false) : saveUpdate())}
                            className="bg-[#9c0603] px-4 rounded-[4px] outline-0 text-white"
                        >
                            {edit ? "Yangilash" : "Saqlash"}
                        </button>
                        <Button variant="outlined" color="error" onClick={handleClose}>
                            Chiqish
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
