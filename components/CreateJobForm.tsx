"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomFormField, CustomFormSelect } from "./FormComponents";
import {
  JobMode,
  JobStatus,
  createAndEditJobSchema,
  createAndEditJobType,
} from "@/utils/types";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobAction } from "@/utils/actions";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function CreateJobForm() {
  // 1. Define your form.
  const form = useForm<createAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: createAndEditJobType) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "there was an error" });
        return;
      }
      toast({
        description: "job created",
      });
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
      queryClient.invalidateQueries({
        queryKey: ["stats"],
      });
      queryClient.invalidateQueries({
        queryKey: ["charts"],
      });
      router.push("/jobs");
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: createAndEditJobType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CustomFormField
            name="position"
            control={form.control}
          ></CustomFormField>
          <CustomFormField
            name="company"
            control={form.control}
          ></CustomFormField>
          <CustomFormField
            name="location"
            control={form.control}
          ></CustomFormField>
          <CustomFormSelect
            list={Object.values(JobStatus)}
            name="status"
            labelText="job status"
            control={form.control}
          ></CustomFormSelect>
          <CustomFormSelect
            list={Object.values(JobMode)}
            name="mode"
            labelText="job mode"
            control={form.control}
          ></CustomFormSelect>
          <Button
            type="submit"
            className="self-end capitalize"
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Create Job"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default CreateJobForm;
