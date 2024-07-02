import React, { useState } from "react";
import useToggle from "../hooks/useToggle";
import usePrevious from "../hooks/usePrevious";

const ToggleComponent: React.FC = () => {
    const [isToggled, toggle] = useToggle(false);

    return (
        <div>
            <h2>Toggle Component</h2>
            <button onClick={toggle}>Тисни сюди</button>
            <p>{isToggled ? "On" : "Off"}</p>
        </div>
    );
};

const PreviousComponent: React.FC = () => {
    const [count, setCount] = useState<number>(-20);
    const previousCount = usePrevious(count);

    return (
        <div>
            <h2>Previous Component</h2>
            <button onClick={() => setCount(count + 1)}>Тиць</button>
            <p>Поточне: {count} </p>
            <p>Попереднє: {previousCount !== undefined ? previousCount : "null"}</p>
        </div>
    );
};

export { ToggleComponent, PreviousComponent };