import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThemeToggleButton } from "./theme-button";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && status === "authenticated") {
      router.push("/dashboard");
    }
  }, [router, session, status]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="absolute right-0 top-0 flex justify-end p-5">
        <ThemeToggleButton />
      </div>
      {children}
    </div>
  );
};
