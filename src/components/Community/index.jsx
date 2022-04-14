import React from "react";
import styles from "./styles.module.css";
import CubeSvg from "@site/static/img/cube.svg";
import clsx from "clsx";
import Link from "@docusaurus/Link";

const LinksList = [
  {
    title: "社区1",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    to: "https://www.google.com",
  },
  {
    title: "社区2",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    to: "https://www.google.com",
  },
  {
    title: "社区3",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    to: "https://www.google.com",
  },
  {
    title: "社区4",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    to: "https://www.google.com",
  },
  {
    title: "社区5",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    to: "https://www.google.com",
  },
];

function CubeAnimation1() {
  return (
    <>
      <CubeSvg
        className={clsx(
          styles.po_absolute,
          styles.cube,
          styles.cubeAnimation,
          styles.halfRight
        )}
      />
    </>
  );
}

function LinkBtn({ Svg, title, to }) {
  return (
    <div className="col col--4 margin-bottom--md">
      <div className={styles.linkBtn}>
        <Svg role="img" width="40" height="40" />
        <p className="margin--none margin-left--md">{title}</p>
      </div>
    </div>
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
            <div className="row margin-top--lg">
              {LinksList.map((data, idx) => (
                <LinkBtn key={idx} {...data} colNumber="col--4" />
              ))}
            </div>
          </div>
          <div className="col">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default function HeroParts(props) {
  return props.layout === "left" ? LeftLayout(props) : RightLayout(props);
}
