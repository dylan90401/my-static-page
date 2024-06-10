import React from 'react';
import styles from '../styles/AbogadosAccidentePage.module.scss';
import Image from 'next/image';

const BadgeSection = () => (
  <section className="module module--50 neutral-bg">
    <div className="container">
      <div className="text-center row justify-content-center">
        <div className="col-lg-12">
          <p>Nuestra red de abogados han recibido múltiples reconocimientos.</p>
        </div>
        <div className="text-center col-lg-10">
          <div className="row row-cols-lg-6 row-cols-md-3 row-cols-2 align-items-center badge-row">
            <div className="my-2 col">
              <Image src="/images/icon-american-association-for-justice.png" alt="American Association for Justice Badge" width={100} height={100} className={styles.badge__icon} />
            </div>
            <div className="my-2 col">
              <Image src="/images/icon-american-institute-of-legal-counsel.png" alt="American Institute of Legal Counsel Badge" width={100} height={100} className={styles.badge__icon} />
            </div>
            <div className="my-2 col">
              <Image src="/images/icon-best-attorneys-of-america.png" alt="Best Attorneys of America Badge" width={100} height={100} className={styles.badge__icon} />
            </div>
            <div className="my-2 col">
              <Image src="/images/icon-multi-million-dollar-advocates-forum.png" alt="Multi-Million Dollar Advocates Forum Badge" width={100} height={100} className={styles.badge__icon} />
            </div>
            <div className="my-2 col">
              <Image src="/images/icon-national-trial-lawyers.png" alt="National Trial Lawyers Badge" width={100} height={100} className={styles.badge__icon} />
            </div>
            <div className="my-2 col">
              <Image src="/images/icon-consumer-attorneys.png" alt="Consumer Attorneys Badge" width={100} height={100} className={styles.badge__icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BadgeSection;
