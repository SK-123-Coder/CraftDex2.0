// Imports of dependencies
import { useEffect, useState } from "react";
import socket from '../config/socket.js'
import React from "react";
import { useNavigate } from "react-router-dom";

// Supabase config
import supabase from '../config/supabaseConfig.js';

function DashboardPage(){
    const API = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    // =======================================================================================================

    // For user analytics fetching live user count and daily active users count from backend using socket.io
    const [users, setUsers] = useState(0);
    const [dailyUsers, setDailyUsers] = useState(0);

    useEffect(() => {
        socket.on("connect", () => {
            socket.emit("getUserStats");
        });

        socket.on("userCount", setUsers);
        socket.on("dailyActiveUsers", setDailyUsers);

        if (socket.connected) {
            socket.emit("getUserStats");
        }

        return () => {
            socket.off("userCount", setUsers);
            socket.off("dailyActiveUsers", setDailyUsers);
        };
    }, []);

    // =======================================================================================================

    // fetch registered user data from supbase.
    const [registeredUsers, setRegisteredUsers] = useState(0);

    useEffect(() => {
        const fetchRegisteredUsers = async () => {
            try {
                const res = await fetch(
                    "http://localhost:3000/api/dashboard/registered-users"
                );

                const data = await res.json();

                setRegisteredUsers(data.registeredUsers);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRegisteredUsers();
    }, []);

    // =======================================================================================================

    return(
        <div>
            {/* Dashboard Section */}
            <section className="min-h-screen px-6 py-10">
                <div className="mx-auto max-w-7xl">

                    {/* Top Navbar */}
                    <div className="mb-10 flex items-center border border-[#1B2B45] bg-[#050B18] px-5 py-4 rounded-lg">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-sm font-medium text-[#CBD5E1] hover:text-white transition"
                        >
                            ← Back
                        </button>
                    </div>

                    {/* Dashboard Stats */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {/* Live Users */}
                        <div className="rounded-xl border border-[#1B2B45] bg-[#050B18] p-8 text-center">
                            <p className="text-[#94A3B8] text-sm">
                                Live Users
                            </p>

                            <h2 className="mt-4 text-5xl font-bold text-[#3B82F6]">
                                {users}
                            </h2>

                            <p className="mt-3 text-green-400 text-sm">
                                ● Online Now
                            </p>
                        </div>

                        {/* Daily Active Users */}
                        <div className="rounded-xl border border-[#1B2B45] bg-[#050B18] p-8 text-center">
                            <p className="text-[#94A3B8] text-sm">
                                Daily Active Users
                            </p>

                            <h2 className="mt-4 text-5xl font-bold text-[#3B82F6]">
                                {dailyUsers}
                            </h2>

                            <p className="mt-3 text-[#94A3B8] text-sm">
                                Last 24 Hours
                            </p>
                        </div>

                        {/* Registered Users */}
                        <div className="rounded-xl border border-[#1B2B45] bg-[#050B18] p-8 text-center">
                            <p className="text-[#94A3B8] text-sm">
                                Registered Users
                            </p>

                            <h2 className="mt-4 text-5xl font-bold text-[#3B82F6]">
                                {registeredUsers}
                            </h2>

                            <p className="mt-3 text-[#94A3B8] text-sm">
                                Total Registered
                            </p>
                        </div>

                    </div>

                    {/* Updates */}
                    <div className="mt-12 rounded-xl border border-[#1B2B45] bg-[#050B18] p-8">

                        <h2 className="mb-6 text-3xl font-bold text-white">
                            Updates Section
                        </h2>

                        <div className="space-y-5">

                            <div>
                                <label className="mb-2 block text-sm font-medium text-white">
                                    Heading
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter heading..."
                                    className="w-full rounded-lg border border-[#1B2B45] bg-[#0B1220] px-4 py-3 text-white outline-none focus:border-[#3B82F6]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-white">
                                    Description
                                </label>

                                <textarea
                                    rows={4}
                                    placeholder="Enter description..."
                                    className="w-full rounded-lg border border-[#1B2B45] bg-[#0B1220] px-4 py-3 text-white outline-none focus:border-[#3B82F6]"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button className="rounded-lg bg-[#3B82F6] px-6 py-3 font-medium text-white transition hover:bg-[#2563EB]">
                                    Send
                                </button>
                            </div>

                        </div>

                    </div>

                    {/* Feedback */}
                    <div className="mt-12">

                        <h2 className="mb-6 text-3xl font-bold text-white">
                            Feedback
                        </h2>

                        <div className="space-y-6">

                            {/* Card */}
                            <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-6">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6] text-white font-bold">
                                        S
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Sarang
                                        </h3>

                                        <p className="text-sm text-[#64748B]">
                                            2 minutes ago
                                        </p>
                                    </div>

                                </div>

                                <p className="mt-5 leading-7 text-[#CBD5E1]">
                                    Great dashboard! Everything looks clean and responsive.
                                    The monitoring system is easy to understand and works
                                    smoothly.
                                </p>

                            </div>

                            {/* Card */}
                            <div className="rounded-2xl border border-[#1B2B45] bg-[#050B18] p-6">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6] text-white font-bold">
                                        A
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Alex
                                        </h3>

                                        <p className="text-sm text-[#64748B]">
                                            10 minutes ago
                                        </p>
                                    </div>

                                </div>

                                <p className="mt-5 leading-7 text-[#CBD5E1]">
                                    Add response time charts and uptime history. That would
                                    make this dashboard even better.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default DashboardPage