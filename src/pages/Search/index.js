import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "../../styles/Search.module.css";

import { ReactComponent as GoogleLogo } from "../../svg/google_logo.svg";
import { ReactComponent as SearchIcon } from "../../svg/search.svg";
import { ReactComponent as VoiceIcon } from "../../svg/voice.svg"
import { ReactComponent as ConfIcon } from "../../svg/conf.svg"
import { ReactComponent as GoogleAppsIcon } from "../../svg/google_apps.svg"

import avatar from "../../img/avatar.jpg";
import fakeMenu from "../../img/fake-menu.png";
import fakeSection from "../../img/section-fake.png";

import messages from "../../data/messages";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../img/fotos/', false, /\.(png|jpe?g|svg)$/));

const countImages = 48;

const Search = () => {
  let [searchParams] = useSearchParams();
  let q = searchParams.get("q");

  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    let _numeros = [];
    while (_numeros.length < countImages) {
      var aleatorio = Math.floor(Math.random() * countImages);

      if (_numeros.indexOf(aleatorio) === -1)
          _numeros.push(aleatorio);
    }

    setNumeros(_numeros);
  }, []);

  return(<>
    <header className={styles.header}>
      <section className={styles.logoWrap}>
        <GoogleLogo className={styles.googleLogo} onClick={ () => window.location.href = '/' } />
      </section>
      <section className={styles.inputWrap}>
        <input className={styles.input} type="text" value={q} />
        <VoiceIcon className={styles.voiceIcon} />
        <SearchIcon className={styles.searchIcon} />
      </section>
      <section className={styles.navWrap}>
        <nav>
          <ul className={styles.listLinks}>
            <li className={styles.listLink}>
              <ConfIcon className={styles.confIcon} />
            </li>
            <li className={styles.listLink}>
              <GoogleAppsIcon className={styles.googleApps} />
            </li>
            <li className={styles.listLink}>
              <img className={styles.avatar} src={avatar} alt="Avatar" />
            </li>
          </ul>
        </nav>
      </section>
    </header>
    <section>
      <img className={styles.fakeMenu} src={fakeMenu} alt="Menu Fake" />
    </section>
    <div className={styles.divider} />
    <section>
      <img className={styles.fakeSection} src={fakeSection} alt="Menu Fake" />
    </section>
    <section className={styles.images}>
      {numeros.map(numero => {
        return (
          <>
            <img class={styles.image} src={images[numero].default} alt="Foto" />
          </>
        )}
      )}
    </section>
  </>)
}

export default Search;
