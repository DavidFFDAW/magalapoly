import React from "react";

interface LoadersProps {
    condition: any;
    children: React.ReactNode;
}

export function ContentOrNull({ condition, children }: LoadersProps) {
    return <>{Boolean(condition) && children}</>;
}
