import React from "react";

interface Props {
    icon: string;
    color?: string;
}

export function BootstrapIcon({ icon, color }: Props) {
    const bootstrapIcon = `bi bi-${icon}`;
    if (color) return <i className={bootstrapIcon} style={{ color }} ></i>;
    return <i className={bootstrapIcon} ></i>;
}
