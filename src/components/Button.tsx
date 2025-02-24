import { ReactElement, ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

/**
 * A Button component that accepts all properties of a standard button element.
 * @param props properties passable to a button element.
 * @returns a button element with the properties and children applied.
 */
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