import { useState, useEffect } from 'react';

// MIT License
// Copyright (c) 2024 AathiEswar
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
function useRenderEnv() {
    var isServer = (typeof window === 'undefined');
    var isClient = (typeof window !== 'undefined');
    var _a = useState({
        isServer: isServer,
        isClient: isClient,
        isLoading: true,
    }), ssr = _a[0], setIsSsr = _a[1];
    useEffect(function () {
        setIsSsr({
            isServer: false,
            isClient: true,
            isLoading: false,
        });
    }, []);
    return ssr;
}

export { useRenderEnv };
//# sourceMappingURL=index.esm.js.map
