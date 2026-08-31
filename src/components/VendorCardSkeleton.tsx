interface VendorCardSkeletonProps {
  count?: number;
}

export default function VendorCardSkeleton({ count = 6 }: VendorCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden border-card">
          <div className="skeleton aspect-[4/3] rounded-none rounded-t-[3rem]" />
          <div className="p-5 space-y-3">
            <div className="skeleton h-5 w-3/4" />
            <div className="skeleton h-4 w-1/2" />
            <div className="skeleton h-4 w-1/4" />
          </div>
        </div>
      ))}
    </>
  );
}
