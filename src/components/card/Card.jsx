import React from 'react';
import styles from './Card.module.css';

const Card = ({ nombre, tipo }) => {
    return (
        <div className={styles.cardContainer}>
            <h3 className={styles.cardTitle}>Registro guardado</h3>
            <p className={styles.cardContent}><strong>Registraste un:</strong> {nombre}</p>
            <p className={styles.cardContent}><strong>De tipo:</strong> {tipo}</p>
        </div>
    );
};

export default Card;
