export function initCursor(outerRef, innerRef) {
    const cursorOuter = outerRef.current;
    const cursorInner = innerRef.current;

    if (!cursorOuter || !cursorInner) return;

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    let rafId;

    // Initialize visibility and position
    cursorOuter.style.visibility = 'hidden';
    cursorInner.style.visibility = 'hidden';
    cursorOuter.style.transform = 'translate3d(0, 0, 0)';
    cursorInner.style.transform = 'translate3d(0, 0, 0)';

    const updatePosition = () => {
        if (!isHovering) {
            cursorOuter.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
        cursorInner.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        rafId = null;
    };

    const onMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!rafId) {
            rafId = requestAnimationFrame(updatePosition);
        }

        // Make visible after first movement
        if (cursorOuter.style.visibility === 'hidden') {
            cursorOuter.style.visibility = 'visible';
            cursorInner.style.visibility = 'visible';
        }
    };

    const onMouseEnter = () => {
        cursorInner.classList.add('cursor-hover');
        cursorOuter.classList.add('cursor-hover');
        isHovering = true;
    };

    const onMouseLeave = (e) => {
        // Check if the mouse left a cursor-pointer or interactive element
        const target = e.target;
        if (
            !target.closest('.cursor-pointer') &&
            !['A', 'BUTTON'].includes(target.tagName)
        ) {
            cursorInner.classList.remove('cursor-hover');
            cursorOuter.classList.remove('cursor-hover');
            isHovering = false;
        }
    };

    const onDocumentMouseLeave = () => {
        // Reset hover if mouse leaves document window
        cursorInner.classList.remove('cursor-hover');
        cursorOuter.classList.remove('cursor-hover');
        isHovering = false;
    };

    const attachListeners = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onDocumentMouseLeave);

        const elements = document.querySelectorAll('button, a, .cursor-pointer');
        elements.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onDocumentMouseLeave);
            elements.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    };

    return attachListeners();
}
