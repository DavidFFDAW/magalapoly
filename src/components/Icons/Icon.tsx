import React from "react";

interface Props {
    icon: string;
}

export function BootstrapIcon({ icon }: Props) {
    const bootstrapIcon = `bi bi-${icon}`;
    return <i className={bootstrapIcon}></i>;
}
