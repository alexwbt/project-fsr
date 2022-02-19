import { useCallback, useRef } from "react";
import { useForceUpdate } from "./forceUpdate";

export const useRefState = <T>(defaultValue: T | null = null) => {
    const forceUpdate = useForceUpdate();
    const value = useRef<T | null>(defaultValue);

    const setValue = useCallback((newValue: T | null) => {
        value.current = newValue;
        forceUpdate();
    }, [value, forceUpdate]);

    const mutateValue = useCallback((callback: (value: T) => void) => {
        if (value.current) {
            callback(value.current);
            forceUpdate();
        }
    }, [value, forceUpdate]);

    return [value.current, mutateValue, setValue] as const;
};
