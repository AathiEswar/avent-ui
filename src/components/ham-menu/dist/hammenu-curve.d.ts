import React from 'react';
import { SVGMotionProps } from 'framer-motion';
interface HamMenuCurveProps extends Omit<SVGMotionProps<SVGSVGElement>, 'ref'> {
    className?: string;
    style?: React.CSSProperties;
}
declare const HamMenuCurve: React.ForwardRefExoticComponent<HamMenuCurveProps & React.RefAttributes<SVGSVGElement>>;
export default HamMenuCurve;
