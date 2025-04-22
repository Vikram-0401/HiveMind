import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            <Appbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Write your story</h1>
                    
                    <input 
                        onChange={(e) => setTitle(e.target.value)} 
                        type="text" 
                        className="w-full text-3xl font-bold border-0 border-b border-gray-200 pb-2 mb-6 focus:ring-0 focus:border-gray-400 font-serif" 
                        placeholder="Title" 
                    />

                    <TextEditor onChange={(e) => setDescription(e.target.value)} />
                    
                    <div className="mt-6 flex justify-end">
                        <button 
                            onClick={async () => {
                                try {
                                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                        title,
                                        content: description
                                    }, {
                                        headers: {
                                            Authorization: localStorage.getItem("token")
                                        }
                                    });
                                    navigate(`/blog/${response.data.id}`);
                                } catch (error) {
                                    alert("Failed to publish your story");
                                }
                            }} 
                            disabled={!title.trim() || !description.trim()}
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-black rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className="relative">
            <textarea 
                onChange={onChange} 
                id="editor" 
                rows={15} 
                className="w-full p-4 text-gray-800 bg-white border border-gray-200 rounded-md focus:ring-0 focus:border-gray-400 resize-none" 
                placeholder="Tell your story..." 
                required 
            />
            <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-white px-2 py-1 rounded-md">
                Markdown supported
            </div>
        </div>
    );
}