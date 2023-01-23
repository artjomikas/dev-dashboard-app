import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonArticles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-white pt-8 mx-4 gap-x-4 gap-y-6 place-content-center place-items-center">
      {[...Array(10).keys()].map((i) => {
        return (
          <div
            key={i}
            className="bg-[#1C1F26] rounded-2xl flex flex-col h-full p-3 max-w-[310px] max-h-[380px] w-full border-[1px] border-solid border-[#383D47] hover:border-[#898c92] shadow-lg shadow-[#111214]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Skeleton
                containerClassName="avatar-skeleton"
                baseColor="#1F232C"
                highlightColor="#212633"
                circle
                width={24}
                height={24}
              />
              <Skeleton
                className="rounded-xs"
                baseColor="#1F232C"
                highlightColor="#212633"
                width={60}
                height={10}
              />
            </div>

            <Skeleton
              className="rounded-full leading-[27px] mb-1"
              baseColor="#1F232C"
              highlightColor="#212633"
              width="90%"
              height="50%"
            />

            <Skeleton
              className="rounded-full leading-[27px] mb-1"
              baseColor="#1F232C"
              highlightColor="#212633"
              width="90%"
              height="50%"
            />

            <Skeleton
              className="rounded-full leading-[27px] mb-1"
              baseColor="#1F232C"
              highlightColor="#212633"
              width="70%"
              height="50%"
            />

            <Skeleton
              className="mt-6 rounded-xl"
              baseColor="#1F232C"
              highlightColor="#212633"
              width="100%"
              height={160}
            />

            <Skeleton
              className="mt-4 rounded-full"
              baseColor="#1F232C"
              highlightColor="#212633"
              width="20%"
              height={10}
            />
          </div>
        );
      })}
    </div>
  );
};
export default SkeletonArticles;
