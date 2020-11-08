import Head from 'next/head'
import styles from '../components/home.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'
import { content } from '../text-content.js'
import VideoPlayer from '../components/video-player.js'

export default function Home() {

  return (
    <Layout>
      <main>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>{content.happy_cattle.title}</h2>

          <p className={styles.sectionText}>{content.happy_cattle.text1}</p>

          <VideoPlayer video_url="https://youtu.be/NpEaa2P7qZI" />

          <p className={styles.sectionText}>{content.happy_cattle.text2}</p>

          <VideoPlayer video_url="https://youtu.be/08TI1RKj54g" />

          <p className={styles.sectionText}>{content.happy_cattle.text3}</p>

          {/* Three data boxes go here */}
          <p className={styles.sectionText}>(data boxes pending)</p>

          <p className={styles.sectionText}>{content.happy_cattle.text4}</p>
        </section>


        <section className={styles.topPanel}>

          {/* left */}
          <div className={styles.intro}>
            <div className={styles.hi}> hi! we're hkscan.ai.</div>
            <div className={styles.blurb}>
              hkscan.AI provides a consolidated suite of data visualization and data science
              powered that helps
                                  <span style={{ color: "#FC3F42" }}> </span>
              <span style={{ color: "#2191FB" }}> </span>
            </div>
          </div>

          {/* right */}
          <div className={styles.circleContainer}>
            <center> <img src="/images/work/HKScan_logo.png" />
            </center>
          </div>

        </section>


        {/*  WORK */}
        <section className={styles.work}>

          <div className={styles.titles}>What Services Do We Provide? </div>

          <div className={styles.threeitemrow}>

            {/* barclays */}
            <div className={styles.item}>
              <SlowLink href="/ask">
                <div className={`${styles.rectangle} ${styles.mastercardRect} ${styles.grow} ${styles.cappedSize}`}>
                  <img src="/images/work/doc.png" />
                </div>
              </SlowLink>
              <div className={styles.captions}>Intelligent Understanding</div>

            </div>

            {/* moderna */}
            <div className={styles.item}>
              <SlowLink href="/ask">
                <div className={`${styles.rectangle} ${styles.mastercardRect} ${styles.grow} ${styles.cappedSize}`}>
                  <img src="/images/work/moderna.png" />
                </div>
              </SlowLink>
              <div className={styles.captions}>Custom Responses</div>

            </div>

            {/* mastercard */}
            <div className={styles.item}>
              <SlowLink href="/mastercard">
                <div className={`${styles.rectangle} ${styles.mastercardRect} ${styles.grow} ${styles.cappedSize}`}>
                  <img src="/images/work/chrome.png" />
                </div>
              </SlowLink>
              <div className={styles.captions}>hKScan Chrome</div>

            </div>

          </div>

        </section>

        {/* example with text-content.js */}
        <section>
          <div className={styles.work}>
            <div className={styles.titles}>{content.happy_cattle.title}</div>
            <div className={styles.blurb}>{content.happy_cattle.text1}</div>
          </div>
        </section>

        {/* video-embedding example */}
        <section className={styles.work}>
          <VideoPlayer video_url="https://youtu.be/UC5IqjUYRHQ" />
        </section>

      </main>

    </Layout>

  )

}
