import { JobType } from "@/utils/types";
import {
  MapPin,
  Briefcase,
  CalendarDays,
  RadioTower,
  Radio,
} from "lucide-react";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import JobInfo from "./JobInfo";
import DeleteJobBtn from "./DeleteJobBtn";
import { getSingleJobAction } from "@/utils/actions";

function JobCard({ job }: { job: JobType }) {
  const date = new Date(job.createdAt).toLocaleDateString();
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator></Separator>
      <CardContent className="mt-4 grid grid-cols-2 gap-4">
        <JobInfo text={job.mode} icon={<Briefcase></Briefcase>}></JobInfo>
        <JobInfo text={job.location} icon={<MapPin></MapPin>}></JobInfo>
        <JobInfo text={date} icon={<CalendarDays></CalendarDays>}></JobInfo>
        <Badge className="w-32 justify-center">
          <JobInfo
            icon={<RadioTower className="w-4 h-4"></RadioTower>}
            text={job.status}
          ></JobInfo>
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/${job.id}`}>edit</Link>
        </Button>
        <DeleteJobBtn id={job.id}></DeleteJobBtn>
      </CardFooter>
    </Card>
  );
}
export default JobCard;
