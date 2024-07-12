import React, {FC} from 'react';
import styles from './errorComponent.module.css'

const ErrorComponent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Here only pain and emptiness</h1>
            <img className={styles.img} src="https://e1.pxfuel.com/desktop-wallpaper/415/665/desktop-wallpaper-sad-jealous-cat-meme-crying-cat-meme.jpg" alt="#"/>
        </div>
    );
};

export default ErrorComponent;