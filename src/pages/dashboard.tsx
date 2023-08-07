import { OrganizationSwitcher } from "~/components/org-switcher";
import { ProtectedLayout } from "~/components/protected-layout";
import { UserNav } from "~/components/user-nav";

export default function Home() {
  // const { organizations, setOrganization } = useOrganization();

  // useEffect(() => {
  //   const data = api.organization.getAll.useQuery();
  //   console.log(data);
  //   // setOrganization(data.data);
  // }, [setOrganization]);

  return (
    <ProtectedLayout>
      <div className="flex h-16 flex-1 items-center justify-between border-b px-4">
        <OrganizationSwitcher />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </ProtectedLayout>
  );
}
