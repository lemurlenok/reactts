import React, {FC} from 'react';
import styles from './errorComponent.module.css'

const ErrorComponent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Unfortunately, there is nothing here</h1>
        </div>
    );
};

export default ErrorComponent;