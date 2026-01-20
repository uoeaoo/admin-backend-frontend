"use client";

import PixelBlast from "../PixelBlast/PixelBlast";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
      <PixelBlast
        variant="circle"
        pixelSize={5}
        color="#ffd900"
        patternScale={1}
        patternDensity={2}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid={false}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.5}
        edgeFade={0.25}
        transparent
      >
        <div  className={styles.hero}>
            <h1 className={styles.heroText}>SOON</h1>
        </div>
      </PixelBlast>
  );
}
