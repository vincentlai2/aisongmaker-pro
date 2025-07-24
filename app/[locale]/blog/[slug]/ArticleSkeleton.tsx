export default function ArticleSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Tags skeleton */}
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
        <div className="h-6 bg-gray-200 rounded-full w-14"></div>
      </div>
      
      {/* Title skeleton */}
      <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
      
      {/* Description skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-6 bg-gray-200 rounded w-full"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
      </div>
      
      {/* Meta info skeleton */}
      <div className="flex gap-6 mb-6">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-4 bg-gray-200 rounded w-16"></div>
        <div className="h-4 bg-gray-200 rounded w-18"></div>
      </div>
      
      {/* Share button skeleton */}
      <div className="h-8 bg-gray-200 rounded w-20 mb-8"></div>
      
      {/* Featured image skeleton */}
      <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
      
      {/* Content skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        
        <div className="h-6 bg-gray-200 rounded w-1/2 mt-8 mb-4"></div>
        
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        
        <div className="h-6 bg-gray-200 rounded w-1/3 mt-8 mb-4"></div>
        
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
      
      {/* Footer tags skeleton */}
      <div className="mt-12 pt-8 border-t">
        <div className="flex gap-2">
          <div className="h-4 bg-gray-200 rounded w-10"></div>
          <div className="h-6 bg-gray-200 rounded-full w-12"></div>
          <div className="h-6 bg-gray-200 rounded-full w-16"></div>
          <div className="h-6 bg-gray-200 rounded-full w-14"></div>
        </div>
      </div>
    </div>
  );
}
