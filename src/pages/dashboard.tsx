import Header from "~/components/header";
import { ProtectedLayout } from "~/components/protected-layout";

export default function Home() {
  return (
    <ProtectedLayout>
      <Header />
    </ProtectedLayout>
  );
}
