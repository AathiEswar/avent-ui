import { FC, ReactNode } from "react";
interface PageTransitionProps {
    children: ReactNode;
    TransitionProp?: FC<{
        children: ReactNode;
    }>;
}
declare const PageTransition: FC<PageTransitionProps>;
export default PageTransition;
