import JobsList from "@/components/JobsList";
import SearchForm from "@/components/SearchForm";
import { getAllJobsAction } from "@/utils/actions";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

async function JobsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["jobs", "", "all", 1],
    queryFn: () => getAllJobsAction({}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm></SearchForm>
      <JobsList></JobsList>
    </HydrationBoundary>
  );
}
export default JobsPage;
