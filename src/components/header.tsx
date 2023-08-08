import { OrganizationSwitcher } from "~/components/org-switcher";
import { ThemeToggleButton } from "~/components/theme-button";
import { UserNav } from "~/components/user-nav";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import Link from "next/link";

export default function Header() {
  // const { organizations, setOrganization } = useOrganization();

  // useEffect(() => {
  //   const data = api.organization.getAll.useQuery();
  //   console.log(data);
  //   // setOrganization(data.data);
  // }, [setOrganization]);

  return (
    <div className="flex h-16 flex-1 items-center justify-between border-b px-4">
      <OrganizationSwitcher />
      <Link
        href="/projects"
        className="ml-6 text-sm font-medium transition-colors hover:text-primary"
      >
        Projects
      </Link>
      <Link
        href="/members"
        className="ml-6 text-sm font-medium transition-colors hover:text-primary"
      >
        Members
      </Link>
      <Link
        href="/settings"
        className="ml-6 text-sm font-medium transition-colors hover:text-primary"
      >
        Settings
      </Link>
      <div className="ml-auto flex items-center space-x-4">
        <Button variant="outline" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem] transition-all" />
        </Button>
        <ThemeToggleButton />
        <UserNav />
      </div>
    </div>
  );
}
