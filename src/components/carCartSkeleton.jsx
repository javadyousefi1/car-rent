import { Skeleton } from "@mui/material";

const CarCartSkeleton = () => {
  return (
    <>
      <div className="bg-white rounded-xl p-4 min-w-[260px] max-w-[280px] shadow-sm h-[316px]">
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <Skeleton
              animation="wave"
              sx={{ bgcolor: "grey.300" }}
              variant="text"
              width={100}
              height={20}
            />
            <Skeleton
              animation="wave"
              sx={{ bgcolor: "grey.300" }}
              variant="text"
              width={60}
              height={20}
            />
          </div>

          <Skeleton
            animation="wave"
            sx={{ bgcolor: "grey.300" }}
            variant="rounded"
            width={30}
            height={30}
          />
        </div>

        <div className="relative px-8 my-14">
          <Skeleton
            animation="wave"
            sx={{ bgcolor: "grey.300" }}
            variant="rounded"
            width={184}
            height={57}
          />
        </div>

        <div className="flex justify-between px-2 ">
          <div className="flex items-center gap-x-1">
            <Skeleton
              animation="wave"
              sx={{ bgcolor: "grey.300" }}
              variant="rounded"
              width={55}
              height={18}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <Skeleton
              animation="wave"
              sx={{ bgcolor: "grey.300" }}
              variant="rounded"
              width={55}
              height={18}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <Skeleton
              animation="wave"
              sx={{ bgcolor: "grey.300" }}
              variant="rounded"
              width={55}
              height={18}
            />
          </div>
        </div>

        <div className="flex justify-between px-1 mt-4">
          <div className="flex items-end gap-x-1">
            <Skeleton
              animation="wave"
              sx={{ bgcolor: "grey.300" }}
              variant="rounded"
              width={60}
              height={28}
            />

            <Skeleton
              animation="wave"
              sx={{ bgcolor: "grey.300" }}
              variant="rounded"
              width={22}
              height={15}
            />
          </div>

          <Skeleton
            animation="wave"
            sx={{ bgcolor: "grey.300" }}
            variant="rounded"
            width={100}
            height={41}
          />
        </div>
      </div>
    </>
  );
};

export default CarCartSkeleton;
