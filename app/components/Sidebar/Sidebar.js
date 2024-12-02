// Add this line to mark the component as a client component
"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUser, FaCog } from "react-icons/fa"; // Add icons for Profile and Settings

const Sidebar = () => {
    // State to track active menu item
    const [active, setActive] = useState("dashboard");

    // Handle setting active state
    const handleActive = (button) => {
        setActive(button);
    };

    return (
        <div className="shadow-sm">
            <div>
                <img
                    className="w-52 mx-auto mt-2"
                    src="/assets/bg-img.png"
                    alt="Background"
                />
            </div>
            <div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mx-2">Menu</h3>
                    <div className="w-11/12 mx-auto">
                        {/* Dashboard Link */}
                        <Link
                            className={`w-full flex justify-between items-center rounded-none my-4 py-4 px-4 ${active === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-300"}`}
                            href="/"
                            onClick={() => handleActive("dashboard")}
                        >
                            <span className="flex items-center space-x-2">
                                <MdOutlineDashboard />
                                <span>Dashboard</span>
                            </span>
                        </Link>
                        {/* Profile Link */}
                        <Link
                            className={`w-full flex justify-between items-center rounded-none my-4 py-4 px-4 ${active === "profile" ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-300"}`}
                            href="/"
                            onClick={() => handleActive("profile")}
                        >
                            <span className="flex items-center space-x-2">
                                <FaUser />
                                <span>Profile</span>
                            </span>
                        </Link>
                        {/* Settings Link */}
                        <Link
                            className={`w-full flex justify-between items-center rounded-none  my-4 py-4 px-4 ${active === "settings" ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-300"}`}
                            href="/"
                            onClick={() => handleActive("settings")}
                        >
                            <span className="flex items-center space-x-2">
                                <FaCog />
                                <span>Settings</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
