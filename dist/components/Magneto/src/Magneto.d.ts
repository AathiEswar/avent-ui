import React, { ReactNode, HTMLAttributes } from 'react';
interface MagnetoProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    amplitudex?: number;
    periodx?: number;
    amplitudey?: number;
    periody?: number;
}
declare const Magneto: React.FC<MagnetoProps>;
export default Magneto;
