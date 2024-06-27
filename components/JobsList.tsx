"use client";
import JobCard from "./JobCard";
import { useSearchParams } from "next/navigation";
import { getAllJobsAction } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import CustomButtonContainer from "./CustomButtonContainer";

function JobsList() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";
  const pageNumber = Number(searchParams.get("page")) || 1;

  const { data, isPending } = useQuery({
    queryKey: ["jobs", search, jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
  });
  const jobs = data?.jobs || [];
  const count = data?.count || 0;
  const page = data?.page || 0;
  const totalPages = data?.totalPages || 0;
  if (isPending) {
    return <h2 className="text-xl">Please wait...</h2>;
  }
  if (jobs.length < 1) {
    return <h2 className="text-xl">No jobs found...</h2>;
  }
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold capitalize">{count} jobs found</h2>
        {totalPages < 2 ? null : (
          <CustomButtonContainer
            currentPage={page}
            totalPages={totalPages}
          ></CustomButtonContainer>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job}></JobCard>;
        })}
      </div>
    </>
  );
}
export default JobsList;
