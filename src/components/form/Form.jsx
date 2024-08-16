import React, { useState } from 'react';
import Card from './../card/Card';
import styles from './Form.module.css';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre.length < 3 || nombre.trim().length < 3 || tipo.length < 6) {
            setErrorMessage('Por favor chequea que la información sea correcta');
        } else {
            setErrorMessage('');
            setSubmittedData({ nombre, tipo });
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Ingresa un animal y su tipo</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Escribe el nombre</label>
                    <input
                        className={styles.input}
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>¿De qué tipo es?</label>
                    <input
                        className={styles.input}
                        type="text"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                </div>
                <button className={styles.button} type="submit">Guardar</button>
            </form>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            {submittedData && !errorMessage && <Card nombre={submittedData.nombre} tipo={submittedData.tipo} />}
        </div>
    );
};

export default Form;
