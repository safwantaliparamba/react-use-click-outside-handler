"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//custom hook for handle outside click
const react_1 = require("react");
/**
 * Custom hook for handling outside click.
 * @param {() => void} handler - The handler function to be called when clicked outside.
 * @param {string} parentId - The ID of the parent element.
 * @returns {React.MutableRefObject<HTMLElement | null>} - The reference to the element.
 */
function useClickOutside(handler = () => { }, parentId = "parent") {
    var _a;
    const itemRef = (0, react_1.useRef)(null);
    const parentRef = (_a = document.getElementById(parentId)) !== null && _a !== void 0 ? _a : null;
    (0, react_1.useEffect)(() => {
        const eventHandler = (e) => {
            var _a, _b;
            if (parentRef) {
                if (!((_a = itemRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) &&
                    !(parentRef === null || parentRef === void 0 ? void 0 : parentRef.contains(e.target))) {
                    handler();
                }
            }
            else {
                if (!((_b = itemRef.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
                    handler();
                }
            }
        };
        document.addEventListener("mousedown", eventHandler);
        return () => {
            document.removeEventListener("mousedown", eventHandler);
        };
    });
    return itemRef;
}
exports.default = useClickOutside;
