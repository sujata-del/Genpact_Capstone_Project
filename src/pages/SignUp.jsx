import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role
    const [fullName, setFullName] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await axios.post('http://localhost:8080/users', {
                userName,
                email,
                password,
                role,
                fullName
            });
            setSuccess('Signup successful!');
            setError('');
            navigate('/login'); // Navigate to login page after successful signup
        } catch (err) {
            if (err.response && err.response.status === 409) {
                setError(err.response.data.message || 'User already exists. Please login to continue.');
            } else {
                setError('Signup failed. Please try again.');
            }
            setSuccess('');
        }
    };

    // const handleLoginRedirect = () => {
    //     navigate('/login'); // Redirect to the login page
    // };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Sign Up</h2>
                <div className="mb-1">
                    <label htmlFor="userName" className="block text-gray-700 mb-1">Username</label>
                    <input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="fullName" className="block text-gray-700 mb-1">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="mb-1 relative">
                    <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                    <input
                        id="password"
                        type={passwordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="button"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="absolute right-2 top-2 text-green-500 focus:outline-none"
                    >
                        {passwordVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
                <div className="mb-1">
                    <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type={passwordVisible ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="role" className="block text-gray-700 mb-1">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors mb-1">
                    Sign Up
                </button>
             
                {error && <p className="text-red-500 text-center mt-1">{error}</p>}
                {success && <p className="text-green-500 text-center mt-1">{success}</p>}
                <p className="mt-1 text-center text-gray-600">
           <a href="/login" className="text-green-700 hover:text-green-800 font-medium">Login</a>
        </p>
            </form>
        </div>
    );
};

export default Signup;
