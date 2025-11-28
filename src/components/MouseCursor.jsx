import {useEffect, useRef} from "react";
import {initCursor} from "@/lib/cursorHelper";

export default function MouseCursor() {
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    useEffect(() => {
        return initCursor(outerRef, innerRef);
    }, []);

    return (
        <>
            <div ref={outerRef} className="mouseCursor cursor-outer"></div>
            <div ref={innerRef} className="mouseCursor cursor-inner">
                <span>Drag</span>
            </div>
        </>
    )
}