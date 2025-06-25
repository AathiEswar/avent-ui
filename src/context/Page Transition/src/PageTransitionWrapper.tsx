import { AnimatePresence } from "framer-motion";
import React, { FC, ReactNode, createContext, useContext } from "react";
import SimpleTransition from "./SimpleTransition";
interface PageTransitionProps {
  children: ReactNode,
  TransitionProp?: FC<{ children: ReactNode }>,
}

const PageTransitionContext = createContext({});

const usePageTransitionContext = () => useContext(PageTransitionContext);

const PageTransition: FC<PageTransitionProps> = ({ children, TransitionProp }) => {
  return (
    <PageTransitionContext.Provider value={{}}>
      <AnimatePresence mode="wait">
        {React.Children.map(children, (child) =>
          TransitionProp ? (
            <TransitionProp>{child}</TransitionProp>
          ) : (
            <SimpleTransition>
              {child}
            </SimpleTransition>
          )
        )}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
};

export default PageTransition;