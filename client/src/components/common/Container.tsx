import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

type ContainerProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    size?: "default" | "narrow" | "wide";
  }
>;

const sizes = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[90rem]",
};

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
