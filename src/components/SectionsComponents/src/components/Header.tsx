"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
  isAnchor?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about", isAnchor: true },
  { name: "Skills", href: "#skills", isAnchor: true },
  { name: "Workflow", href: "#workflow", isAnchor: true },
  { name: "Projects", href: "#portfolio", isAnchor: true },
  { name: "FAQ", href: "#faq", isAnchor: true },
  { name: "Contact", href: "#contact", isAnchor: true },
];

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:flex items-end h-full">
        {menuItems.map((item) => (
          <div key={item.href} className="relative group">
            <a
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "cursor-pointer px-3 py-1 text-sm font-medium transition-colors hover:text-[#F63D3C]",
                pathname === item.href && "text-[#F63D3C] font-semibold"
              )}
            >
              {item.name}
            </a>
            <span
              className={cn(
                "absolute left-3 right-3 h-0.5 bg-[#F63D3C] transition-transform duration-300 ease-in-out transform scale-x-0",
                "group-hover:scale-x-100",
                "-bottom-0.5 z-10 rounded",
                "origin-left"
              )}
            ></span>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2 text-lg",
                      pathname === item.href && "font-semibold text-[#F63D3C]"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  return (
    <section className="flex items-end justify-between mt-8 md:mt-16 mb-8">
      <Link href="/" className="pb-1">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
          {config.blog.name}
        </h1>
      </Link>
      <Navigation />
    </section>
  );
};