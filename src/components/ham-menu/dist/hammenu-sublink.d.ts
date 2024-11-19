import React from 'react';
interface HamMenuSubLinkProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    as?: React.ElementType;
    index?: number;
    footerLinkPop: {
        initial: any;
        enter: any;
        exit: any;
    };
    [key: string]: any;
}
declare const HamMenuSubLink: React.ForwardRefExoticComponent<Omit<HamMenuSubLinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export default HamMenuSubLink;
