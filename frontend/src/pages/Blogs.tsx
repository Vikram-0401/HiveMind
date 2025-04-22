import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Appbar /> 
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="space-y-8">
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    // Sort blogs by "id" in descending order to simulate newest first
    // In a real app, you would sort by an actual date field
    const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

    // Format the date in a professional way
    const formatPublishedDate = (date: Date) => {
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

    return (
        <div className="min-h-screen bg-gray-50">
            <Appbar />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold font-serif text-gray-900 mb-6">Recent Stories</h1>
                
                {blogs.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">No stories published yet.</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        {sortedBlogs.map((blog, index) => {
                            // Create a date for each blog
                            // First blog (newest) is today, and then subtract days based on position
                            const publishDate = new Date();
                            
                            // For the first few blogs (newest), create very recent dates
                            if (index === 0) {
                                // Today
                            } else if (index === 1) {
                                publishDate.setDate(publishDate.getDate() - 1); // Yesterday
                            } else if (index < 5) {
                                publishDate.setDate(publishDate.getDate() - (index + 1)); // Last few days
                            } else {
                                // Older blogs spread over the last few weeks
                                publishDate.setDate(publishDate.getDate() - (index * 2 + 5));
                            }
                            
                            return (
                                <BlogCard
                                    key={blog.id}
                                    id={blog.id}
                                    authorName={blog.author.name || "Anonymous"}
                                    title={blog.title}
                                    content={blog.content}
                                    publishedDate={formatPublishedDate(publishDate)}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

