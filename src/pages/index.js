import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomeHeroDeeds from "@site/src/components/HomeHeroDeeds";
import Bash01Png from "@site/static/img/bash01.png";
import Github from "@site/static/img/Github.svg";
import Logo from "@site/static/img/logo.svg";
import AbilitySvg from "@site/static/img/ability.svg";
import SpeedSvg from "@site/static/img/speed.svg";
import CoverSvg from "@site/static/img/cover.svg";
import CommunitySvg from "@site/static/img/Community.svg";
import Extensibility from "@site/src/components/Extensibility";
import Community from "@site/src/components/Community";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <Logo className={styles.logoAnimation} />
      <div className="container">
        <div>
          <h1 className={styles.sloganTitle}>
            SWOFT <br /> <span>高性能</span> PHP 框架
          </h1>
          <p className={styles.subjectTitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              起步 📖
            </Link>

            <Link
              className="button button--secondary  button--lg margin-left--lg"
              to="/docs/intro"
            >
              <div className={styles.buttons}>
                <Github />
                <div className="margin-left--sm">GITHUB</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello Welcome to ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomeHeroDeeds
          title="我优雅"
          subtitle="优雅到死"
          layout="left"
          className={styles.bigMargin}
        >
          <img src={Bash01Png} style={{ transform: "rotate(-1.5deg)" }} />
        </HomeHeroDeeds>

        <HomeHeroDeeds
          title="我能力很强"
          subtitle="使用场景"
          layout="right"
          animation={false}
          className={styles.bigMargin}
        >
          <AbilitySvg width={520} height="100%" />
        </HomeHeroDeeds>

        <HomepageFeatures className={styles.bigMargin} />

        <HomeHeroDeeds
          title="我的速度快"
          subtitle="速度飞快"
          layout="left"
          className={styles.bigMargin}
        >
          <SpeedSvg width={520} height="100%"/>
        </HomeHeroDeeds>

        <Extensibility />

        <HomeHeroDeeds
          title="我稳定"
          subtitle="单元测试覆盖率高"
          layout="right"
          className={styles.bigMargin}
        >
          <CoverSvg width={520} height="100%"/>
        </HomeHeroDeeds>

        <Community title="丰富的社区"
          subtitle="专业的社区服务"
          layout="left"
          className={styles.bigMargin}>
            <CommunitySvg width={720} height="100%"/>
          </Community>
      </main>
    </Layout>
  );
}
