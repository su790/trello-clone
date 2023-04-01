import {useEffect,useRef} from "react";
export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        return () => {
            ref.current?.focus()
        };
    }, []);
    return ref
    
}