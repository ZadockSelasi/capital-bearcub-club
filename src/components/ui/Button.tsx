import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "btn-outline",
        ghost: "text-primary hover:bg-primary/5 px-6 py-2 rounded-full transition-all",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3",
        lg: "px-10 py-4 text-lg",
    };

    return (
        <button
            className={cn(variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
