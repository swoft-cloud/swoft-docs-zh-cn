import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "惊人能力1",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "惊人能力2",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "惊人能力3",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "惊人能力4",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "惊人能力5",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
];

function Extent({ Svg, title, description, colNumber }) {
  return (
    <div className={clsx("col", colNumber)}>
      <div className={clsx(styles.extent, "margin-bottom--md")}>
        <Svg className={clsx(styles.featureSvg)} role="img" />
        <div className="col">
          <h3 className="hero__subtitle">{title}</h3>
          <p className="margin-bottom--none">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Extensibility() {
  return (
    <div className="container">
      <h2 className="hero__title">丰富的企业扩展</h2>
      <p className="hero_subtitle">
        我们拥有大量精心维护的软件包，这意味着您已经准备好应对任何事情。解决复杂的企业需求。
      </p>
      <div className="row margin-top--xl">
        {FeatureList.map((props, idx) =>
          idx<2 ? (
            <Extent key={idx} {...props} colNumber="col--6" />
          ) : (
            <Extent key={idx} {...props} colNumber="col--4" />
          )
        )}
      </div>
    </div>
  );
}
