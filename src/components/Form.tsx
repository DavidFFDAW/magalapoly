import React from 'react'

interface FormErrorMessageProps {
    message: string;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export function FormErrorMessage({ message, setError }: FormErrorMessageProps) {
    return (
        <div className="flex between appear form-error-text">
            {message}
            <button className="nobtn" onClick={() => setError(null)}>&times;</button>
        </div>
    )
}
