import React, { forwardRef, Ref } from 'react';
import { useButtonContext } from './hammenu-provider';

interface HamMenuBurgerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: React.ElementType;
}

const HamMenuBurger = forwardRef<HTMLButtonElement, HamMenuBurgerProps>((props, ref: Ref<HTMLButtonElement>) => {
	const { children, as, className, style, ...otherProps } = props;
	const { isActive, toggleActive } = useButtonContext();

	return (
		<button
			className={`fixed top-0 right-0 lg:m-[20px] lg:h-[80px] lg:w-[80px] rounded-full bg-[rgb(96,255,96)] flex justify-center items-center cursor-pointer z-[2] shadow-[0_0_5px_0_rgb(45,45,45)] 
    m-[10px] h-[60px] w-[60px] ${className || ''}`}
			ref={ref} {...otherProps} style={style} onClick={toggleActive}>
			<div className={`burger w-full relative before:content-[''] before:block before:w-[40%] before:h-[2px] before:bg-black before:absolute before:left-[30%] before:transition-all before:duration-500
      after:content-[''] after:block after:w-[40%] after:h-[2px] after:bg-black after:absolute after:left-[30%] after:transition-all after:duration-500 
      ${isActive ? 'before:rotate-[-45deg] before:top-[1px] after:rotate-[45deg] after:top-[-1px]' : 'before:top-[-5px] after:top-[5px]'}`}>
			</div>
		</button>
	);
});

HamMenuBurger.displayName = 'HamMenuBurger';

export default HamMenuBurger;

