import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: ReactNode;
};

const FeatureList = [
    {
        title: 'Pague com CRIPTO, Receba em Reais',
        Img: require('@site/static/img/1.png').default,
        description: (
            <>
                Use stablecoins como USDC ou tokens locais para pagar qualquer fatura nacional – incluindo boletos, PIX ou TEDs.
            </>
        ),
    },
    {
        title: 'Web3 para o mundo real',
        Img: require('@site/static/img/2.png').default,
        description: (
            <>
                Simplificamos a integração entre carteiras descentralizadas e o sistema financeiro tradicional com APIs, SDKs e contratos inteligentes.
            </>
        ),
    },
    {
        title: 'Crie apps com integração nativa',
        Img: require('@site/static/img/3.png').default,
        description: (
            <>
                Desenvolvedores podem integrar pagamentos programáveis.
            </>
        ),
    },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} alt={title} />
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
