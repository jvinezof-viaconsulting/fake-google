import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Home.module.css";

import { ReactComponent as GoogleAppsIcon } from "../../svg/google_apps.svg";
import { ReactComponent as SearchIcon } from "../../svg/search.svg";
import { ReactComponent as VoiceIcon } from "../../svg/voice.svg"

import avatar from "../../img/avatar.jpg";
import googleLogo from "../../img/google_logo.png";
import tia from "../../img/tia.png";

const Home = () => {
  const [q, setQ] = useState("");

  return (<>
    <header>
      <nav>
        <ul className={styles.listLinks}>
          <li className={styles.listLink}>Gmail</li>
          <li className={styles.listLink}>Imagens</li>
          <li className={styles.listLink}>
            <GoogleAppsIcon className={styles.googleApps} />
          </li>
          <li className={styles.listLink}>
            <img className={styles.avatar} src={avatar} alt="Avatar" />
          </li>
        </ul>
      </nav>
    </header>
    <main className={styles.content}>
      <div className={styles.contentInner}>
        <div>
          <img src={googleLogo} alt="Google" />
        </div>
        <section className={styles.searchWrap}>
          <div className={styles.inputWrap}>
            <SearchIcon className={styles.searchIcon} />
            <input className={styles.input} type="text" value={q} onChange={(e) => setQ(e.target.value)} />
            <img className={styles.tecladoIcon} src={tia} alt="Teclado" />
            <VoiceIcon className={styles.VoiceIcon} />
          </div>
          <div className={styles.buttonsWrap}>
            <Link className={styles.button} to={`search?q=${q}`}>Pesquisa Google</Link>
            <a className={styles.button} href="https://www.instagram.com/alannacssi4/" target="_blank" rel="noreferrer">Estou com sorte</a>
          </div>
        </section>
      </div>
    </main>
    </>);
  }
export default Home;
