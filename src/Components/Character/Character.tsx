import React, { FC } from 'react';
import './Character.css';

interface IProps {
    name: string;
    image: string;
}

type PropsWithChildren<A> = A & {children: React.ReactNode}

const Character: FC<PropsWithChildren<IProps>> = ({ name, image, children }) => {
    return (
        <div className="character-container">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{children}</p>
        </div>
    );
};

export default Character;