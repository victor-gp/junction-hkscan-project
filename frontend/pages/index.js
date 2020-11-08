import Head from 'next/head'
import styles from '../components/home.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'
import { content } from '../text-content.js'
import VideoPlayer from '../components/video-player.js'
import { DataBox } from '../components/data-boxes.js'

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
          <div className={styles.dataBoxesOut}>
            <div className={styles.dataBoxesIn}>
              <DataBox agent="HKScan" amount="1.125" unit="Kg CO2eq" />
              <DataBox agent="Europe" amount="1.225" unit="average Kg CO2eq" />
              <DataBox agent="World" amount="1.325" unit="average Kg CO2eq" />
            </div>
          </div>
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

        <section className={styles.sectionBlock}>
          {/* TODO */}
          <p className={styles.sectionText}>footer elements pending</p>
        </section>
      </main>

    </Layout>

  )

}
