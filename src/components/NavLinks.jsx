// "use client";

import {
  BellAlertIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
// import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Announcements",
    href: "/dashboard/announcements",
    icon: BellAlertIcon,
  },
  {
    name: "Bylaws",
    href: "/dashboard/bylaws",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "House Rules",
    href: "/dashboard/houserules",
    icon: DocumentDuplicateIcon,
  },
  { name: "Lease", href: "/dashboard/lease", icon: DocumentDuplicateIcon },
  {
    name: "Meeting Minutes",
    href: "/dashboard/meetingminutes",
    icon: DocumentDuplicateIcon,
  },

  { name: "Profile", href: "/dashboard/profile", icon: UserIcon },
];

const NavLinks = () => {
  // const pathname = usePathname();
  return (
    <div className="bg-stone-200 h-full flex-col space-y-2 p-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-stone-100 p-3 text-base font-medium hover:bg-sky-50 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
