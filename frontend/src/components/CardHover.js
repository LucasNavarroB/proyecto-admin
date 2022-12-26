/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from './../styles/CardHover.module.css';

const CardHover = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <img src="https://i.imgur.com/3VquB3g.png" title="source: imgur.com" />
              <h3>Docker</h3>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              <p>
                Genera el entorno donde mediante imagenes se podra desplegar
                la aplicacion sin ningun problema en cualquier dispositivo
                que contenga los archivos necesarios.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <img src="https://i.imgur.com/lLDvDKN.png" title="source: imgur.com" />
              <h3>React JS</h3>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              <p>
                Este framework se encarga de la parte del frontend y la conexion
                a la API que realiza consultas a la base de datos.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <img src="https://i.imgur.com/ma9NXa7.png" title="source: imgur.com" />
              <img src="https://i.imgur.com/3Zbpxng.png" title="source: imgur.com" />
              <h3>Node JS</h3>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              <p>
                Utilizando junto con Express para la API que sera consumida al hacer
                peticiones a la base de datos.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <img src="https://i.imgur.com/3gHMqH5.png" title="source: imgur.com"/>
              <h3>MongoDB</h3>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              <p>
                Base de datos No-SQL la cual contiene registros de usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default CardHover;