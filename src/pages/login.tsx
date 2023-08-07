import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import { Icons } from "~/components/icons";
import { Layout } from "~/components/layout";
import { Button } from "~/components/ui/button";
import Typography from "~/components/ui/typography";

const Login: NextPage = () => {
  return (
    <Layout>
      <div>
        <Typography element="h2" as="h3">
          Choose an option to continue with
        </Typography>
        <div className="mt-5 flex flex-1 justify-center gap-5">
          <Button
            variant="outline"
            className="w-[140px]"
            onClick={() => signIn("github")}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button
            variant="outline"
            className="w-[140px]"
            onClick={() => signIn("google")}
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
