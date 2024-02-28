import className from 'classnames';
import {twMerge} from 'tailwind-merge';

function Button({disabled, children, primary, secondary, success, warning, danger, outline, rounded,nvgtbutton,marginbtm,nocustom, ...rest}) {

    let classes = twMerge(className("w-full items-center px-6 py-2 border font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out",{
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'bg-white tracking-wide': outline,
        'rounded-full': rounded,
        'text-blue-500': primary && outline,
        'text-gray-900': secondary && outline,
        'text-green-500': success && outline,
        'text-yellow-400': warning && outline,
        'text-red-500': danger && outline,
        'border-none hover:text-blue-500 block text-left px-0 py-1': nocustom,
        "font-Poppins md:ml-8 hover:bg-green-600 duration-500":nvgtbutton,
        "mb-3 tracking-wider":marginbtm,
        "border-green-300 bg-green-300":disabled
    }));

    return (
        <button {...rest} disabled={disabled} className={classes}>{children}</button>
    )
}

Button.propTypes = {
    checkValidationProps: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) + 
        Number(!!secondary) + 
        Number(!!success) + 
        Number(!!warning) + 
        Number(!!danger);

        if (count > 1) {
            throw new Error("Provide only one prop to the button")
        }
    }
}

export default Button;