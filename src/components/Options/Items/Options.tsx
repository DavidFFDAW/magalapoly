import { OptionItem } from "./OptionItem";

interface Props {
    text: string;
    to: string;
    icon?: string;
}

export function SuccessOption({ text, to, icon }: Props) {
    const typeIcon = icon ? icon : 'check';
    return (
        <OptionItem href={to} text={text} icon={typeIcon} type="success" />
    )
}

export function DangerOption({ text, to, icon }: Props) {
    const typeIcon = icon ? icon : 'trash';
    return (
        <OptionItem href={to} text={text} icon={typeIcon} type="delete" />
    )
}

export function WarningOption({ text, to, icon }: Props) {
    const typeIcon = icon ? icon : 'exclamation';
    return (
        <OptionItem href={to} text={text} icon={typeIcon} type="warning" />
    )
}

export function InfoOption({ text, to, icon }: Props) {
    const typeIcon = icon ? icon : 'info';
    return (
        <OptionItem href={to} text={text} icon={typeIcon} type="info" />
    )
}

export function DefaultOption({ text, to, icon }: Props) {
    const typeIcon = icon ? icon : 'info';
    return (
        <OptionItem href={to} text={text} icon={typeIcon} type="default" />
    )
}
