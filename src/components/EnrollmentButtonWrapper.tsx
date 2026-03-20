"use client";

import React, { useState } from "react";
import EnrollmentModal from "./EnrollmentModal";

interface Props {
    targetId: string;
    targetTitle: string;
    type: "PROGRAM" | "EVENT";
    buttonText?: string;
    className?: string;
}

export default function EnrollmentButtonWrapper({ targetId, targetTitle, type, buttonText = "Enroll Now", className }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <EnrollmentModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                type={type}
                targetId={targetId}
                targetTitle={targetTitle}
            />
            <button onClick={() => setIsOpen(true)} className={className || "btn-primary"}>
                {buttonText}
            </button>
        </>
    );
}
