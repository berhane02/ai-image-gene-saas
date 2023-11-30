"use client";

import { Empty } from "@/components/empty";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { Loader } from "@/components/loader";

import axios from "axios";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Video, icons } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useProModal } from "@/hooks/use-pro-modal";

const VideoPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);
      const response = await axios.post("/api/video", values);
      setVideo(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        //toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Video Generation"
        description="Turn you promt into video"
        icon={Video}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg
                        border
                        w-full
                        p-4
                        px-3
                        md:px-6
                        focus-within:shadow-sm
                        grid
                        grid-cols-12
                        gap-2"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 utline-non focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="fish swimming"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="col-span-12 lg:col-span-2 w-full"
              disabled={isLoading} type="submit" size="icon"
            >
              Generate
            </Button>
          </form>
        </Form>

        {isLoading && (
          <div className="p-20">
            <Loader />
          </div>
        )}
        {!video && !isLoading && (
          <div>
            <Empty label="No video started" />
          </div>
        )}
        {video && (
          <video
            controls
            className="w-full aspect-video mt-8 rounded-lg border bg-black"
          >
            <source src={video} />
          </video>
        )}
      </div>
    </div>
  );
};
export default VideoPage;
