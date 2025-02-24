import { ReactElement, ComponentProps } from "react";

type InputProps = ComponentProps<'input'>;

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