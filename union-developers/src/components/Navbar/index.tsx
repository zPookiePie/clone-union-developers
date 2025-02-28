"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import LinkButton from "../LinkButton";

import useElementObserver from '../hooks/useElementObserver';
import styles from "./Navbar.module.scss";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const isSobreVisible = useElementObserver("sobre");
    const isPilaresVisible = useElementObserver("pilares");
    const isBenefitsVisible = useElementObserver("beneficios");
    const isStepsVisible = useElementObserver("etapas");
    const isTestimonialsVisible = useElementObserver("depoimentos");
    const isFaqVisible = useElementObserver("duvidas");

    useEffect(() => {
        console.log(isBenefitsVisible);
    }, [isBenefitsVisible]);

    const handleToggle = () => setMenuOpen((prev) => !prev);
    

    return (
        <div className={styles.navbarWrapper}>
      {/* Cabeçalho fixo no topo*/}
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.navGroup}>
            <div className={styles.logo}>
              <a href="#">
                <Image
                  src="/logo-union-developers.svg"
                  alt="Logo Union Developers"
                  width="263"
                  height={37}
                />
              </a>
            </div>

            <ul className={styles.menuListDesktop}>
            <li className={clsx(isSobreVisible && styles.active)}>
              <a href="#sobre" className={styles.menuItem}>
                Sobre
              </a>
            </li>
            <li className={clsx(isPilaresVisible && styles.active)}>
              <a href="#pilares" className={styles.menuItem}>
                Pilares
              </a>
            </li>
            <li className={clsx(isBenefitsVisible && styles.active)}>
              <a href="#beneficios" className={styles.menuItem}>
                Benefícios
              </a>
            </li>
            <li className={clsx(isStepsVisible && styles.active)}>
              <a href="#etapas" className={styles.menuItem}>
                Etapas
              </a>
            </li>
            <li className={clsx(isTestimonialsVisible && styles.active)}>
              <a href="#depoimentos" className={styles.menuItem}>
                Depoimentos
              </a>
            </li>
            <li className={clsx(isFaqVisible && styles.active)}>
              <a href="#duvidas" className={styles.menuItem}>
                Dúvidas
              </a>
            </li>
            <li>
              <LinkButton href="#formulario" name="Junte-se a nós"
              className={styles.formButton} />
            </li>
          </ul>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={handleToggle}
              className={styles.menuButton}
            >
              <span
                className={clsx(styles.menuLine, menuOpen && styles.active)}
              ></span>
              <span
                className={clsx(styles.menuLine, menuOpen && styles.active)}
              ></span>
              <span
                className={clsx(styles.menuLine, menuOpen && styles.active)}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/*Menu dropdown: aparece abaixo do cabeçalho ocupando toda a largura */}
      {menuOpen && (
        <nav className={styles.dropdownMenu} aria-label="Navegação principal">
          <ul className={styles.menuList}>
            <li className={clsx(isSobreVisible && styles.active)}>
              <a href="#sobre" className={styles.menuItem}>
                Sobre
              </a>
            </li>
            <li className={clsx(isPilaresVisible && styles.active)}>
              <a href="#pilares" className={styles.menuItem}>
                Pilares
              </a>
            </li>
            <li className={clsx(isBenefitsVisible && styles.active)}>
              <a href="#beneficios" className={styles.menuItem}>
                Benefícios
              </a>
            </li>
            <li className={clsx(isStepsVisible && styles.active)}>
              <a href="#etapas" className={styles.menuItem}>
                Etapas
              </a>
            </li>
            <li className={clsx(isTestimonialsVisible && styles.active)}>
              <a href="#depoimentos" className={styles.menuItem}>
                Depoimentos
              </a>
            </li>
            <li className={clsx(isFaqVisible && styles.active)}>
              <a href="#duvidas" className={styles.menuItem}>
                Dúvidas
              </a>
            </li>
            <li>
              <LinkButton href="#formulario" name="Junte-se a nós" />
            </li>
          </ul>
        </nav>
      )}
    </div>
    )
}

export default Navbar 

