import React from "react";
import { BootstrapIcon } from "../Icons/Icon";
import { ContentOrNull } from "../Loaders";

interface TitleProps {
    title: string;
    icon?: string;
    description?: string;
}

export function AdminTitle({ title, icon, description }: TitleProps) {
    const finalIcon = icon ? icon : "unlock-fill";

    return (
        <header className="header-title flex start gap-medium">
            <div className="icon-container">
                <BootstrapIcon icon={finalIcon} />
            </div>
            <div className="title-group flex start astart column gap-5">
                <h1 className="page-title font-700 upper">{title}</h1>
                <ContentOrNull condition={description}>
                    <p className="subtitle-descriptor">{description}</p>
                </ContentOrNull>
            </div>
        </header>
    );
}
