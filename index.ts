//custom hook for handle outside click
import React,{ useEffect, useRef } from "react"



/**
 * Custom hook for handling outside click.
 * @param {() => void} handler - The handler function to be called when clicked outside.
 * @param {string} parentId - The ID of the parent element.
 * @returns {React.MutableRefObject<HTMLElement | null>} - The reference to the element.
 */
function useClickOutside(handler: () => void = (): void => { },
    parentId: string = "parent"): React.MutableRefObject<HTMLElement | null> {
    const itemRef = useRef<HTMLElement | null>(null);

    const parentRef = document.getElementById(parentId) ?? null;

    useEffect(() => {
        const eventHandler = (e: MouseEvent): void => {
            if (parentRef) {
                if (!itemRef.current?.contains(e.target as Node) &&
                    !parentRef?.contains(e.target as Node)) {
                    handler();
                }
            } else {
                if (!itemRef.current?.contains(e.target as Node)) {
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

export default useClickOutside;