import React, { createContext, useState, useContext, forwardRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var ButtonContext = createContext(undefined);
var ButtonProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isActive = _b[0], setIsActive = _b[1];
    var _c = useState('rgb(29,29,29)'), backgroundColor = _c[0], setBackgroundColor = _c[1];
    var toggleActive = function () { return setIsActive(function (prev) { return !prev; }); };
    var toggleBackgroundColor = function (backgroundColor) { return setBackgroundColor(backgroundColor); };
    var value = {
        isActive: isActive,
        toggleActive: toggleActive,
        backgroundColor: backgroundColor,
        toggleBackgroundColor: toggleBackgroundColor
    };
    return (React.createElement(ButtonContext.Provider, { value: value }, children));
};
var useButtonContext = function () {
    var context = useContext(ButtonContext);
    if (context === undefined) {
        throw new Error('useButtonContext must be used within a ButtonProvider');
    }
    return context;
};

var HamMenu = forwardRef(function (props, ref) {
    var children = props.children, as = props.as, className = props.className, style = props.style, otherProps = __rest(props, ["children", "as", "className", "style"]);
    var Component = as || 'section';
    return (React.createElement(ButtonProvider, null,
        React.createElement(Component, __assign({ className: "".concat(className), ref: ref }, otherProps, { style: style }), children)));
});
HamMenu.displayName = "HamMenu";

var HamMenuBurger = forwardRef(function (props, ref) {
    props.children; props.as; var className = props.className, style = props.style, otherProps = __rest(props, ["children", "as", "className", "style"]);
    var _a = useButtonContext(), isActive = _a.isActive, toggleActive = _a.toggleActive;
    return (React.createElement("button", __assign({ className: "fixed top-0 right-0 lg:m-[20px] lg:h-[80px] lg:w-[80px] rounded-full bg-[rgb(96,255,96)] flex justify-center items-center cursor-pointer z-[2] shadow-[0_0_5px_0_rgb(45,45,45)] \n    m-[10px] h-[60px] w-[60px] ".concat(className || ''), ref: ref }, otherProps, { style: style, onClick: toggleActive }),
        React.createElement("div", { className: "burger w-full relative before:content-[''] before:block before:w-[40%] before:h-[2px] before:bg-black before:absolute before:left-[30%] before:transition-all before:duration-500\n      after:content-[''] after:block after:w-[40%] after:h-[2px] after:bg-black after:absolute after:left-[30%] after:transition-all after:duration-500 \n      ".concat(isActive ? 'before:rotate-[-45deg] before:top-[1px] after:rotate-[45deg] after:top-[-1px]' : 'before:top-[-5px] after:top-[5px]') })));
});
HamMenuBurger.displayName = 'HamMenuBurger';

var HamMenuBar = forwardRef(function (props, ref) {
    var children = props.children, className = props.className, style = props.style, motionProp = props.motionProp, as = props.as; __rest(props, ["children", "className", "style", "motionProp", "as"]);
    var isActive = useButtonContext().isActive;
    var Container = as || 'section';
    var MotionStyledMenuContainer = motion(Container);
    var menuSlide = motionProp || {
        initial: {
            x: 'calc(100% + 100px)',
        },
        animate: {
            x: '0',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            x: 'calc(100% + 100px)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
    };
    return (React.createElement(AnimatePresence, { mode: "wait" }, isActive && (React.createElement(MotionStyledMenuContainer, { variants: menuSlide, initial: "initial", animate: "animate", exit: "exit", ref: ref, style: style, className: "bg-black fixed top-0 right-0 h-screen text-white w-full z-[1] lg:w-[30%] ".concat(className || '') },
        React.createElement("div", { className: "ham-menu-inner-bar overflow-y-scroll p-[40px_10%] h-full flex flex-col justify-between gap-[12px] max-md:p-[60px] max-sm:p-[40px]" }, children)))));
});
HamMenuBar.displayName = 'HamMenuBar';

var HamMenuTitle = forwardRef(function (props, ref) {
    var children = props.children, style = props.style, as = props.as, className = props.className, otherProps = __rest(props, ["children", "style", "as", "className"]);
    var Component = as || 'p';
    return (React.createElement(Component, __assign({ ref: ref, style: style, className: "2xl:text-[1.5dvw] text-[gray] border-b border-[gray] border-solid pb-2 w-full ".concat(className) }, otherProps), children));
});
HamMenuTitle.displayName = 'HamMenuTitle';

var HamMenuMainLink = forwardRef(function (props, ref) {
    var children = props.children, className = props.className, as = props.as, style = props.style, index = props.index, slide = props.slide, otherProps = __rest(props, ["children", "className", "as", "style", "index", "slide"]);
    var Component = as || 'a';
    motion.create(Component);
    return (React.createElement(motion.a, __assign({ ref: ref, style: style, className: "no-underline text-white whitespace-nowrap overflow-hidden text-ellipsis text-[42px] md:text-[50px] xl:text-[4dvw] text-center md:text-left ".concat(className || ''), key: index, custom: index, variants: slide, animate: "enter", exit: "exit", initial: "initial" }, otherProps), children));
});
HamMenuMainLink.displayName = "HamMenuMainLink";

var HamMenuContents = React.memo(forwardRef(function (props, ref) {
    var children = props.children, as = props.as, style = props.style, className = props.className, animateDelay = props.animateDelay, motionProp = props.motionProp, otherProps = __rest(props, ["children", "as", "style", "className", "animateDelay", "motionProp"]);
    var Component = as || 'div';
    var slide = useMemo(function () {
        return (motionProp || {
            initial: {
                x: "80px",
            },
            enter: function (i) { return ({
                x: '0',
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * (animateDelay || 0.05) }
            }); },
            exit: function (i) { return ({
                x: '80px',
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * (-1 * (animateDelay || 0.05)) }
            }); }
        });
    }, [animateDelay, motionProp]);
    return (React.createElement(Component, __assign({ ref: ref, className: "flex flex-col mt-3 gap-3 ".concat(className || ''), style: style }, otherProps), React.Children.map(children, function (child, index) {
        return (child && React.cloneElement(child, { index: index, slide: slide }));
    })));
}));
HamMenuContents.displayName = 'HamMenuContents';

var HamMenuSubLink = forwardRef(function (props, ref) {
    var children = props.children, className = props.className, style = props.style, as = props.as, index = props.index, footerLinkPop = props.footerLinkPop, otherProps = __rest(props, ["children", "className", "style", "as", "index", "footerLinkPop"]);
    var Component = as || 'a';
    var MotionComponent = motion.create(Component);
    return (React.createElement(MotionComponent, __assign({ ref: ref, style: style, className: "text-[1dvw] no-underline block text-white font-normal overflow-hidden whitespace-nowrap text-ellipsis max-w-full max-lg:text-[16px] max-sm:text-[12px] ".concat(className), variants: footerLinkPop, initial: "initial", animate: "enter", exit: "exit", key: index, custom: index }, otherProps), children));
});
HamMenuSubLink.displayName = 'HamMenuSubLink';

var initialPath = "M100 0 L100 ".concat(window.innerHeight, " Q-100 ").concat(window.innerHeight / 2, " 100 0");
var targetPath = "M100 0 L100 ".concat(window.innerHeight, " Q100 ").concat(window.innerHeight / 2, " 100 0");
var pathAnimation = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        d: initialPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    }
};
var HamMenuCurve = forwardRef(function (_a, ref) {
    var className = _a.className, style = _a.style; __rest(_a, ["className", "style"]);
    return (React.createElement("svg", { ref: ref, className: "absolute top-0 left-[-99px] w-[100px] h-screen stroke-none" },
        React.createElement(motion.path, { style: style, initial: 'initial', variants: pathAnimation, animate: 'enter', exit: "exit", className: "h-screen ".concat(className || ''), d: initialPath })));
});

var HamMenuSubContent = forwardRef(function (props, ref) {
    var children = props.children, as = props.as, className = props.className, style = props.style, animateDelay = props.animateDelay, motionProp = props.motionProp, otherProps = __rest(props, ["children", "as", "className", "style", "animateDelay", "motionProp"]);
    var Component = as || 'div';
    var footerLinkPop = motionProp || {
        initial: {
            opacity: 0,
            transition: { duration: 1 }
        },
        enter: function (i) { return ({
            opacity: 100,
            transition: { duration: 2, delay: i * (animateDelay || 0.3) }
        }); },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 },
        }
    };
    return (React.createElement(Component, __assign({ ref: ref, style: style, className: "flex gap-4 flex-wrap justify-center ".concat(className) }, otherProps), React.Children.map(children, function (child, index) {
        return (child && React.cloneElement(child, { index: index, footerLinkPop: footerLinkPop }));
    })));
});

export { HamMenu, HamMenuBar, HamMenuBurger, HamMenuContents as HamMenuContent, HamMenuCurve, HamMenuMainLink as HamMenuLink, HamMenuSubContent, HamMenuSubLink, HamMenuTitle };
//# sourceMappingURL=index.esm.js.map
