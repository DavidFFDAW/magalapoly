import { BootstrapIcon } from "../Icons/Icon";
import { ContentOrNull } from "../Loaders";

interface Props {
    text: string;
    icon?: string;
    type: string;
}

export function OptionItem({ text, icon, type }: Props) {

    const classname = `option-item ${type}`;

    return (
        <div className={classname}>
            <div className="flex">
                <ContentOrNull condition={icon} >
                    <div className="icon">

                        <BootstrapIcon icon={icon || ''} />
                    </div>
                </ContentOrNull>

                <div className="text pointer">
                    {text}
                </div>
            </div>
        </div>
    )
}