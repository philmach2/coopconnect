"use client";
import { useState } from "react";
import {
  BellAlertIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Announcements",
    href: "/dashboard/Announcements",
    icon: BellAlertIcon,
  },
];

const documentLinks = [
  {
    name: "Alterations",
    href: "/dashboard/AlterationAgreement",
    icon: DocumentDuplicateIcon,
  },
  { name: "By Laws", href: "/dashboard/ByLaws", icon: DocumentDuplicateIcon },
  {
    name: "COI Example",
    href: "/dashboard/COI",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "House Rules",
    href: "/dashboard/HouseRules",
    icon: DocumentDuplicateIcon,
  },
  // {
  //   name: "Proprietary Lease",
  //   href: "/dashboard/Lease",
  //   icon: DocumentDuplicateIcon,
  // },
  // {
  //   name: "Meeting Minutes",
  //   href: "/dashboard/MeetingMinutes",
  //   icon: DocumentDuplicateIcon,
  // },
];

const profileLink = {
  name: "Profile",
  href: "/dashboard/Profile",
  icon: UserIcon,
};

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="flex flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-stone-100 p-3 text-base font-medium hover:bg-sky-50 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <DocumentDuplicateIcon className="w-6" />
          <p className="hidden md:block">Documents</p>
          {isOpen ? (
            <ChevronUpIcon className="w-5" />
          ) : (
            <ChevronDownIcon className="w-5" />
          )}
        </button>
        {isOpen && (
          <div className="flex flex-col space-y-2 mt-2 pl-3">
            {documentLinks.map((link) => {
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
        )}
      </div>
      <Link
        key={profileLink.name}
        href={profileLink.href}
        className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-stone-100 p-3 text-base font-medium hover:bg-sky-50 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <UserIcon className="w-6" />
        <p className="hidden md:block">{profileLink.name}</p>
      </Link>
    </div>
  );
};

export default NavLinks;
