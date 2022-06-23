import React from 'react';
import styles from "./Loading.module.css";

function Loading() {
    return (
        <div className={styles.loadingImage}>
            <h3 className={styles.loading}>Loading...</h3>
        </div> 
    )
}

export default Loading;