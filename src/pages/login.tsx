import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const Login: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && status === "authenticated") {
      router.push("/dashboard");
    }
  }, [router, session, status]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Signin with</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-6">
            <Button variant="outline" onClick={() => signIn("github")}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" onClick={() => signIn("google")}>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
