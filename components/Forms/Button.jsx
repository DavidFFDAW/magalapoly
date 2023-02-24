export function FormButton({ type = 'submit', text, ...props }) {
    const extraClass = props.className || '';
    const css = Boolean(props.className) ? `btn btn-form ${extraClass}` : 'btn btn-form';

    return (
        <button type={type} className={css}>
            {text}
        </button>
    );
}
