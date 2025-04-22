import { Avatar } from "./BlogCard"
import { Link, useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

export const Appbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    
    // Get user name from localStorage if available
    const token = localStorage.getItem("token");
    const userName = token ? localStorage.getItem("userName") || "User" : "User";
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        navigate("/");
    };
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="border-b shadow-sm bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to={'/blogs'} className="font-serif text-2xl font-bold text-gray-900 hover:text-gray-700 transition">
                        HiveMind
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link to={`/publish`}>
                            <button 
                                type="button" 
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                            >
                                Write
                            </button>
                        </Link>
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="flex items-center focus:outline-none"
                                aria-expanded={showDropdown}
                                aria-haspopup="true"
                            >
                                <Avatar size="big" name={userName} />
                            </button>
                            
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5">
                                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                                        Signed in as <span className="font-medium">{userName}</span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}