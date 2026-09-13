import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  showArrow = true,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-heading font-extrabold rounded-full transition-all duration-300 group overflow-hidden select-none active:scale-95 cursor-pointer border z-10";

  const variants = {
    primary: {
      btn: "bg-tiffany text-dark-gray border-tiffany shadow-[0_4px_15px_-3px_rgba(33,241,168,0.35)] hover:shadow-[0_12px_28px_-4px_rgba(33,241,168,0.65)] hover:-translate-y-0.5",
      fill: "bg-dark-gray",
      text: "group-hover:text-tiffany",
    },
    secondary: {
      btn: "bg-dark-gray text-white border-dark-border shadow-md hover:shadow-[0_10px_25px_-5px_rgba(23,23,23,0.5)] hover:-translate-y-0.5",
      fill: "bg-tiffany",
      text: "group-hover:text-dark-gray",
    },
    outline: {
      btn: "bg-white text-dark-gray border-2 border-dark-gray shadow-sm hover:shadow-md hover:-translate-y-0.5",
      fill: "bg-dark-gray",
      text: "group-hover:text-tiffany",
    },
    dark: {
      btn: "bg-dark-card text-tiffany border-dark-border hover:border-tiffany/50 hover:shadow-[0_0_20px_rgba(33,241,168,0.25)] hover:-translate-y-0.5",
      fill: "bg-tiffany",
      text: "group-hover:text-dark-gray",
    },
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs gap-2",
    md: "px-7 py-3.5 text-sm gap-2.5",
    lg: "px-8 py-4 text-base gap-3",
  };

  const selectedVariant = variants[variant];

  const content = (
    <>
      {/* UIverse 45-degree Skewed Horizontal Expand Fill Layer */}
      <span
        className={cn(
          "absolute -left-[20%] -right-[20%] top-0 bottom-0 z-0 -skew-x-[45deg] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-center pointer-events-none",
          selectedVariant.fill
        )}
      />

      <span className={cn("relative z-10 transition-colors duration-300", selectedVariant.text)}>
        {children}
      </span>

      {showArrow && (
        <ArrowRight
          className={cn(
            "w-4 h-4 relative z-10 transition-all duration-300 ease-out group-hover:translate-x-1.5 shrink-0",
            selectedVariant.text
          )}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, selectedVariant.btn, sizes[size], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, selectedVariant.btn, sizes[size], className)} {...props}>
      {content}
    </button>
  );
}


