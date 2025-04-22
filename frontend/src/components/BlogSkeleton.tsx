
export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse bg-white rounded-lg shadow-sm p-6">
            <div className="max-w-2xl mx-auto">
                {/* Author info skeleton */}
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="ml-3 w-24 h-4 bg-gray-200 rounded"></div>
                    <div className="mx-2 h-1 w-1 rounded-full bg-gray-200"></div>
                    <div className="w-32 h-4 bg-gray-200 rounded"></div>
                </div>
                
                {/* Title skeleton */}
                <div className="h-7 bg-gray-200 rounded mb-3 w-3/4"></div>
                
                {/* Content skeleton */}
                <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
                
                {/* Footer skeleton */}
                <div className="flex items-center">
                    <div className="w-16 h-3 bg-gray-200 rounded"></div>
                    <div className="mx-2 h-1 w-1 rounded-full bg-gray-200"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}