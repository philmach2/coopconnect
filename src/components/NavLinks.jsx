"use client";

import Link from "next/link";
import {
  BellAlertIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const links = [
  { name: "78 Charles", href: "/", icon: HomeIcon },
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
  const pathname = usePathname();
  return (
    <div className="bg-stone-200 h-full flex-col space-y-2 p-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-stone-100 p-3 text-sm font-medium hover:bg-emerald-50 hover:text-green-700 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            {/* hover color combos:
          bg-orange-50, text-amber-700
          bg-emerald-50, text-green-700
          bg-sky-100, text-blue-700 */}
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
