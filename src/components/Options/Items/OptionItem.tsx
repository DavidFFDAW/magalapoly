import Link from "next/link";
import { BootstrapIcon } from "../../Icons/Icon";
import { ContentOrNull } from "../../Loaders";

interface Props {
    text: string;
    icon?: string;
    type: string;
    href: string;
}

export function OptionItem({ text, icon, type, href }: Props) {

    const classname = `option-item action-${type}`;

    return (
        <Link href={href} className="w1 unlink">
            <div className={classname}>
                <div className="flex start acenter gap-small">
                    <ContentOrNull condition={icon} >
                        <div className="icon-wrapper">

                            <BootstrapIcon icon={icon || ''} />
                        </div>
                    </ContentOrNull>

                    <p className="action-option-text pointer">
                        {text}
                    </p>
                </div>
            </div>
        </Link>
    )
}