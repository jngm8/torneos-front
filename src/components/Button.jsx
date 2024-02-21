import className from 'classnames';
import {twMerge} from 'tailwind-merge';

function Button({children, primary, secondary, success, warning, danger, outline, rounded}) {

    let classes = twMerge(className('items-center gap-5 px-3 py-1.5 border mb-3 font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-600 bg-gray-600 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'bg-white': outline,
        'rounded-full': rounded,
        'text-blue-500': primary && outline,
        'text-gray-900': secondary && outline,
        'text-green-500': success && outline,
        'text-yellow-400': warning && outline,
        'text-red-500': danger && outline,
    }));

    return (
        <button className={classes}>{children}</button>
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