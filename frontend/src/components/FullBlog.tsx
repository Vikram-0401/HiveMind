import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    // Format the date in a professional way
    const formatPublishedDate = () => {
        const date = new Date();
        const randomDays = Math.floor(Math.random() * 14); // Random date within last 2 weeks
        date.setDate(date.getDate() - randomDays);
        
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 1) {
            return 'Today';
        } else if (diffDays === 1) {
            return 'Yesterday';
        } else if (diffDays < 7) {
            return `${diffDays} days ago`;
        } else {
            return date.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        }
    };
    
    const publishDate = formatPublishedDate();
    
    return (
        <div className="min-h-screen bg-white">
            <Appbar />
            <main className="pt-8 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Article header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                            <time dateTime={new Date().toISOString()}>{publishDate}</time>
                            <span>•</span>
                            <span>{Math.ceil(blog.content.length / 500)} min read</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Main content */}
                        <article className="flex-1">
                            <div className="prose prose-lg max-w-none">
                                <p className="whitespace-pre-wrap text-gray-800 leading-relaxed text-lg">
                                    {blog.content}
                                </p>
                            </div>
                            
                            {/* Author info at the bottom of content on mobile */}
                            <div className="mt-12 p-6 bg-gray-50 rounded-lg md:hidden">
                                <div className="flex items-center">
                                    <Avatar size="big" name={blog.author.name || "Anonymous"} />
                                    <div className="ml-4">
                                        <h4 className="font-medium text-gray-900">
                                            {blog.author.name || "Anonymous"}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {`${blog.author.name || "Anonymous"}'s profile`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Author sidebar - visible only on desktop */}
                        <aside className="hidden md:block md:w-64 shrink-0">
                            <div className="sticky top-24 bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the author</h3>
                                <div className="flex items-start">
                                    <Avatar size="big" name={blog.author.name || "Anonymous"} />
                                    <div className="ml-4">
                                        <h4 className="font-medium text-gray-900">
                                            {blog.author.name || "Anonymous"}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Writer and contributor at HiveMind
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
}