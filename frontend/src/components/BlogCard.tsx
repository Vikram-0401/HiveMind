import { Link } from "react-router-dom";
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <article className="max-w-2xl mx-auto border-b border-gray-100 py-6 transition-all hover:bg-gray-50 px-4">
                <div className="flex items-center mb-3">
                    <Avatar name={authorName} />
                    <div className="ml-3 text-sm font-medium text-gray-700">{authorName}</div>
                    <Circle />
                    <div className="text-sm text-gray-500">
                        {publishedDate}
                    </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {title}
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-3">
                    {content.slice(0, 160) + "..."}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                    <span>{`${Math.ceil(content.length / 100)} min read`}</span>
                    <Circle />
                    <span className="text-gray-500 hover:text-gray-700">Read more</span>
                </div>
            </article>
        </Link>
    );
}

export function Circle() {
    return <div className="mx-2 h-1 w-1 rounded-full bg-gray-400"></div>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    const bgColors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-yellow-500", "bg-pink-500", "bg-indigo-500"];
    // Use the first letter of the name to deterministically pick a color
    const colorIndex = name.charCodeAt(0) % bgColors.length;
    const bgColor = bgColors[colorIndex];
    
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden ${bgColor} rounded-full ${size === "small" ? "w-8 h-8" : "w-10 h-10"}`}>
            <span className={`${size === "small" ? "text-xs" : "text-sm"} font-medium text-white`}>
                {name[0].toUpperCase()}
            </span>
        </div>
    );
}