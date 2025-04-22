import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@vikram0401/hivemind-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            
            // Store user name in localStorage
            if (type === "signup") {
                localStorage.setItem("userName", postInputs.name || postInputs.username.split('@')[0]);
            } else {
                // For signin, we need to fetch the user's name
                try {
                    const userResponse = await axios.get(`${BACKEND_URL}/api/v1/user/me`, {
                        headers: {
                            Authorization: jwt
                        }
                    });
                    
                    if (userResponse.data && userResponse.data.name) {
                        localStorage.setItem("userName", userResponse.data.name);
                    } else {
                        // If name is not available, use the username
                        localStorage.setItem("userName", postInputs.username.split('@')[0]);
                    }
                } catch (error) {
                    // If fetching user details fails, use username as fallback
                    localStorage.setItem("userName", postInputs.username.split('@')[0]);
                }
            }
            
            navigate("/blogs");
        } catch(e) {
            alert("Error while signing up")
            // alert the user here that the request failed
        }
    }
    
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                <div className="text-center">
                    <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                        {type === "signin" ? "Welcome back" : "Join HiveMind"}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                        <Link to={type === "signin" ? "/signup" : "/signin"} className="ml-1 text-black font-medium hover:underline">
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </p>
                </div>
                
                <div className="space-y-4">
                    {type === "signup" && (
                        <LabelledInput 
                            label="Name" 
                            placeholder="Your full name" 
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                })
                            }} 
                        />
                    )}
                    
                    <LabelledInput 
                        label="Email" 
                        placeholder="you@example.com" 
                        onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value
                            })
                        }} 
                    />
                    
                    <LabelledInput 
                        label="Password" 
                        type="password" 
                        placeholder="••••••••" 
                        onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }} 
                    />
                    
                    <button 
                        onClick={sendRequest} 
                        type="button" 
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
                    >
                        {type === "signup" ? "Create account" : "Sign in"}
                    </button>
                </div>
                
                <div className="mt-6 text-sm text-center text-gray-500">
                    By signing up, you agree to our <a href="#" className="text-black hover:underline">Terms</a> and <a href="#" className="text-black hover:underline">Privacy Policy</a>.
                </div>
            </div>
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input 
                onChange={onChange} 
                type={type || "text"} 
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black text-sm" 
                placeholder={placeholder} 
                required 
            />
        </div>
    );
}