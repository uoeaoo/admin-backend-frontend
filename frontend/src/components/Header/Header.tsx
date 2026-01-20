import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Fist } from "@/assets";
import Link from "next/link";
import GooeyNav from "../Nav/GooeyNav";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link className={styles.headerContainerLogo} href="/">
          {/* <Image
            src={Logo}
            alt="logo"
            width={80}
            height={80}
            className={styles.headerContainerLogoImage}
          /> */}
        </Link>
        <div className={styles.headerContainerNav}>
          <GooeyNav
            items={[
              { label: 'Главная', href: '/' },
              { label: 'Личный кабинет', href: '/account' },
              { label: 'О нас', href: '/about' }
            ]}
            initialActiveIndex={0}
            animationTime={400}
            particleCount={18}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
