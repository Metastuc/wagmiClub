import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const

    Toggle = function () {
        const [status, setStatus] = useState(false);

        function toggleStatus() {
            setStatus((previous) => !previous);
        }

        return { status, toggleStatus };
    },

    Scroll = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };