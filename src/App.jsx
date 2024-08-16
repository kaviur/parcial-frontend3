import React from "react";
import Form from "./components/form/Form";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.imgbox}>
        </div>
        <div className={styles.box}>
          <h1>Tipos de animales</h1>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
