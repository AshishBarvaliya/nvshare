import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const ProtectedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, session, status]);

  return (
    <div className="container mx-auto flex min-h-screen w-full">
      {status === "authenticated" ? children : null}
    </div>
  );
};
