import { ReactElement, ComponentProps } from "react";

type InputProps = ComponentProps<'input'>;

/**
 * A component that renders an input element with all the standard input 
 * element properties.
 * 
 * @param {InputProps} props The properties passable to an input element.
 * @returns {ReactElement} An input element with the properties applied.
 */
function Input({
    ...props
}: InputProps): ReactElement {
    return (
        <input
            {...props}
        />
    );
}

export default Input;