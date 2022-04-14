import React from "react";
import styles from "./styles.module.css";
import CubeSvg from "@site/static/img/cube.svg";
import clsx from "clsx";
import Link from "@docusaurus/Link";

function CubeAnimation1() {
  return (
    <>
      <CubeSvg
        className={clsx(
          styles.po_absolute,
          styles.cube,
          styles.cubeAnimation,
          styles.bottom,
          styles.halfLeft
        )}
      />
      <CubeSvg
        className={clsx(
          styles.po_absolute,
          styles.cube,
          styles.cubeAnimation,
          styles.halfRight
        )}
      />
      <CubeSvg
        className={clsx(
          styles.po_absolute,
          styles.cube,
          styles.cubeAnimation,
          styles.right,
          styles.bottom
        )}
      />
    </>
  );
}

function CubeAnimation2() {
  return (
    <>
      <CubeSvg
        className={clsx(styles.po_absolute, styles.cube, styles.cubeAnimation)}
      />
      <CubeSvg
        className={clsx(
          styles.po_absolute,
          styles.cube,
          styles.cubeAnimation,
          styles.halfLeft1,
          styles.bottom
        )}
      />
      <CubeSvg
        className={clsx(
          styles.po_absolute,
          styles.cube,
          styles.cubeAnimation,
          styles.halfLeft
        )}
      />
    </>
  );
}

function LeftLayout(props) {
  return (
    <div className={clsx(styles.po_relative, props.className)}>
      {props.animation ?? <CubeAnimation1 />}
      <div className="container">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col">
            <h2 className="hero__title">{props.title}</h2>
            <p className="hero__subtitle">{props.subtitle}</p>
            <div>
              <Link
                className="button button--secondary button--outline button--lg"
                to="/docs/intro"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="col">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

function RightLayout(props) {
  return (
    <div className={clsx(styles.po_relative, props.className)}>
      {props.animation ?? <CubeAnimation2 />}
      <div className="container">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col">{props.children}</div>
          <div className="col">
            <h2 className="hero__title">{props.title}</h2>
            <p className="hero__subtitle">{props.subtitle}</p>
            <div>
              <Link
                className="button button--secondary button--outline button--lg"
                to="/docs/intro"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroParts(props) {
  return props.layout === "left" ? LeftLayout(props) : RightLayout(props);
}
