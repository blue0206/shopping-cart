import { ReactElement, ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

function Button({ ...props }: ButtonProps): ReactElement {
    return (
        <button 
            {...props}
        >
            {props.children}
        </button>
    );
}

export default Button;