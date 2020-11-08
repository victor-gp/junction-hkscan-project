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

        <section id="opening-video" className={styles.sectionBlock}>
          <VideoPlayer video_url="https://youtu.be/EM7O9MBvgYE" />
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>{content.happy_cattle.title}</h2>
          <p className={styles.sectionText}>{content.happy_cattle.text1}</p>
          <VideoPlayer video_url="https://youtu.be/6uGb-GAI_lc" />
          <p className={styles.sectionText}>{content.happy_cattle.text2}</p>
          <VideoPlayer video_url="https://youtu.be/08TI1RKj54g" />
          <p className={styles.sectionText}>{content.happy_cattle.text3}</p>
          {/* TODO */}
          <p className={styles.sectionText}>(three data boxes pending)</p>
          <p className={styles.sectionText}>{content.happy_cattle.text4}</p>
          <VideoPlayer video_url="https://youtu.be/fL9xqqR5ziY" />
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>{content.meat_culture.title}</h2>
          <p className={styles.sectionText}>{content.meat_culture.text1}</p>

          <h3 className={styles.subsectionTitle}>{content.our_meats.title}</h3>
          {/* TODO */}
          <p className={styles.sectionText}>(animal photos pending)</p>

          <h3 className={styles.subsectionTitle}>{content.our_cuts.title}</h3>
          {/* TODO */}
          <p className={styles.sectionText}>(cow parts photo + names pending)</p>

          <h3 className={styles.subsectionTitle}>{content.our_cooking_tips.title}</h3>
          {/* TODO */}
          <p className={styles.sectionText}>(coooking temperature pic pending)</p>
          <p className={styles.sectionText}>{content.our_cooking_tips.text1}</p>
          <VideoPlayer video_url="https://youtu.be/UC5IqjUYRHQ" />
          <p className={styles.sectionText}>{content.our_cooking_tips.text2}</p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>{content.our_meat_store.title}</h2>
          <p className={styles.sectionText}>{content.our_meat_store.text1}</p>
          {/* TODO */}
          <p className={styles.sectionText}>(food e-shop image pending)</p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>{content.our_meat_lovers_community.title}</h2>
          <p className={styles.sectionText}>{content.our_meat_lovers_community.text1}</p>
        </section>

        <section className={styles.sectionBlock} style={{paddingBottom: '600px'}}>
          {/* TODO */}
          <p className={styles.sectionText}>footer elements pending</p>
          <p className={styles.sectionText}>everything past here is reference code for me, I will remove it later on</p>
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
      </main>

    </Layout>

  )

}
