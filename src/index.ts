// MIT License

// Copyright (c) 2025 AathiEswar

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import './styles/tailwind.css'

import './components/Magneto/src/tailwind.css'
import './components/ham-menu/src/styles/tailwind.css'

export { default as ButtonTest } from './Button';
export { default as Magneto } from './components/Magneto/src/Magneto'
export { default as HamMenu } from './components/ham-menu/src/hammenu'
export { default as HamMenuBurger } from './components/ham-menu/src/hammenu-burger'
export { default as HamMenuBar } from './components/ham-menu/src/hammenu-bar'
export { default as HamMenuTitle } from './components/ham-menu/src/hammenu-title';
export { default as HamMenuLink } from './components/ham-menu/src/hammenu-mainLink'
export { default as HamMenuContent } from './components/ham-menu/src/hammenu-content'
export { default as HamMenuSubLink } from './components/ham-menu/src/hammenu-sublink';
export { default as HamMenuSubContent } from './components/ham-menu/src/hammenu-subcontent';
export { default as HamMenuCurve } from './components/ham-menu/src/hammenu-curve';

export { default as useRenderEnv } from './hooks/useRenderEnv/src/useRenderEnv'
export { useScreenDimensions } from "./hooks/useScreenDimensions/src/index"

export { PageTransitionContext } from './context/Page Transition/src/index'
export { CurveCover } from './context/Page Transition/src/index'
export { StaggerScreen } from './context/Page Transition/src/index'
export { SimpleScreen } from './context/Page Transition/src/index'
export { LeftToRightScreen } from './context/Page Transition/src/index'
export { StackOverLap } from './context/Page Transition/src/index'
export { StaggerBlock } from './context/Page Transition/src/index'

export { Button } from "./components/Button/src/index"