import React from 'react'
import imageNoPokemon from "../tools/no-pokemon.gif";
import styles from "./MessageNotFound.module.css"


const MessageNotFound = () => {
    return (
        <div className={styles.notFound}>
            <img className={styles.notFoundImage} src={imageNoPokemon} alt='imgNotFound' />
            <h2 className={styles.title}>Pokemon not found</h2>
        </div> 
    )
}

export default MessageNotFound;