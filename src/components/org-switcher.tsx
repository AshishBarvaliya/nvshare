import * as React from "react";
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "~/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const organizations: Organization[] = [
  {
    label: "Acme Inc.",
    value: "acme-inc",
  },
  {
    label: "Monsters Inc.",
    value: "monsters",
  },
];

interface Organization {
  label: string;
  value: string;
}

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

type OrganizationSwitcherProps = PopoverTriggerProps;

export const OrganizationSwitcher: React.FC<OrganizationSwitcherProps> = ({
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const [showNewOrgDialog, setShowNewOrgDialog] = React.useState(false);
  const [selectedOrg, setselectedOrg] = React.useState<
    Organization | undefined
  >(organizations[0]);

  return (
    <Dialog open={showNewOrgDialog} onOpenChange={setShowNewOrgDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select an organization"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedOrg?.value}.png`}
                alt={selectedOrg?.label}
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            {selectedOrg?.label}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search organization..." />
              <CommandEmpty>No organization found.</CommandEmpty>
              <CommandGroup>
                {organizations.map((org) => (
                  <CommandItem
                    key={org.value}
                    onSelect={() => {
                      setselectedOrg(org);
                      setOpen(false);
                    }}
                    className="text-sm"
                  >
                    <Avatar className="mr-2 h-5 w-5">
                      <AvatarImage
                        src={`https://avatar.vercel.sh/${org.value}.png`}
                        alt={org.label}
                        className="grayscale"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    {org.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedOrg?.value === org.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      setShowNewOrgDialog(true);
                    }}
                  >
                    <PlusCircledIcon className="mr-2 h-5 w-5" />
                    Create Organization
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create organization</DialogTitle>
          <DialogDescription>
            Add a new organization to manage projects and members.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Organization name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewOrgDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
