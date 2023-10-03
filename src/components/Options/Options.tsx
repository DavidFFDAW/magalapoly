'use client';
import React from 'react'
import { BootstrapIcon } from '../Icons/Icon';
import { ContentOrNull } from '../Loaders';
import { OptionItem } from './OptionItem';

interface Props {
    children?: React.ReactNode;
}

export function OptionsContainer({ children }: Props) {

    const [show, setShow] = React.useState<Boolean>(false);
    const toggleShowOptions = () => setShow(prev => !prev);

    return (
        <div className='options-container relative'>
            <button className='options-button relative' onClick={toggleShowOptions}>
                <BootstrapIcon icon='three-dots-vertical' />

            </button>
            <ContentOrNull condition={show}>
                <div className='options-list absolute'>

                    {children}
                </div>
            </ContentOrNull>
        </div>
    )
}



export default {
    Container: OptionsContainer,
    Option: OptionItem
}
