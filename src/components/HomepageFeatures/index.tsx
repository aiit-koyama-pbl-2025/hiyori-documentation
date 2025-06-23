import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "アプリケーションの即時公開",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        アプリケーションをzip形式でアップロードするだけ。
        <br />
        自動的に公開用ドメインが発行され、すぐにアクセスできます。
      </>
    ),
  },
  {
    title: "インフラの知識不要",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Docker や Kubernetes のような複雑な構成やビルドは不要です。</>
    ),
  },
  {
    title: "学習・試作に最適",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        学習用途やプロトタイピングに最適です。
        アプリケーションをすぐに共有できるため、フィードバックのループが加速します。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
