import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  id?: string;
  className?: string;
  title?: string;
  tabIndex?: number;
  name?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  variant?: ButtonVariants;

  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void | Promise<void> | React.MouseEvent<HTMLButtonElement>;

  onBlur?: () => void;
  onFocus?: () => void;
};

const Button = forwardRef<HTMLButtonElement, Readonly<ButtonProps>>(
  (
    {
      id,
      className,
      title,
      tabIndex,
      variant = ButtonVariants.Dark,
      name,
      type = "button",
      disabled = false,
      children,
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ) => (
    <button
      ref={ref}
      id={id}
      className={twMerge(
        "px-5 py-1 text-nowrap rounded-md text-md focus-visible:outline focus-visible:outline-offset-2 transition-colors duration-100 select-none",
        ButtonVariantClasses[variant],
        className
      )}
      title={title}
      tabIndex={tabIndex}
      name={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {children}
    </button>
  )
);

export default Button;

export enum ButtonVariants {
  Dark,
  Light,
}

export const ButtonVariantClasses: Record<ButtonVariants, string> = {
  [ButtonVariants.Dark]:
    "bg-black text-white hover:bg-gray-800 border-2 border-gray-700",
  [ButtonVariants.Light]:
    "bg-white text-black hover:bg-gray-100 border-2 border-gray-700",
} as const;
