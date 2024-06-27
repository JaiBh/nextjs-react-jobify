"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { PropsWithChildren } from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import { Toast } from "@radix-ui/react-toast";

function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000 * 5,
        },
      },
    });
  });
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster></Toaster>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
export default Providers;
