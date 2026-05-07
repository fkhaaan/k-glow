import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";

import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type ButtonProps = PropsWithChildren<
  SharedButtonProps & (ButtonAsButton | ButtonAsLink)
>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[var(--color-ink)] text-white shadow-[0_18px_40px_rgba(31,27,24,0.16)] hover:bg-[var(--color-cocoa)]",
  secondary:
    "border-[var(--color-line)] bg-white/80 text-[var(--color-ink)] hover:border-[var(--color-rosewood)] hover:bg-white",
  ghost:
    "border-transparent bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-soft)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-7 text-base",
};

export function Button({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = cn(
    "inline-flex items-center justify-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-rosewood)] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsLink;

    return (
      <Link className={buttonClassName} href={href} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
