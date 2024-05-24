"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className, end }) => {
  const pathname = usePathname();

  const isActive =
    (pathname.includes(href) && href.length > 1 && !end) || pathname === href;

  const classes = `${className || ""} ${isActive ? "bg-white text-[#24223E] font-extrabold" : "text-[#514B81]"}`;

  return (
    <Link href={href} passHref>
      <div
        className={`flex items-center gap-2 px-[11px] py-2  text-[13px] font-medium leading-5 ${classes}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavLink;
