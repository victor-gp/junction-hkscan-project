import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={router.pathname === href ? styles.menuActive : styles.menuInactive}>
      {children}
    </a>
  )
}

export const siteTitle = 'hk-scan'

export default class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state={isMenuOpen: false};

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }

  render() {

    let tabClassName = `${styles.tab} ${this.state.isMenuOpen ? "" : styles.navClosed}`;

    let menuButton = this.state.isMenuOpen ?
      <div className={styles.menu}>
        <span className="fa-stack">
          <i className="fa fa-circle fa-stack-2x" style={{color: '#33D3FF'}}></i>
          <i className="fa fa-bars fa-stack-1x fa-inverse"></i>
        </span>
      </div> :
      <div className={styles.menu}>
        <span className="fa-stack">
          <i className="fas fa-bars fa-stack-1x"></i>
        </span>
      </div>;

  return (
    <div className={styles.container}>
      <Head>
        <script src="https://kit.fontawesome.com/9a2254ebc5.js" crossOrigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
        <title>HKScan => Sustainability</title>

        <meta
          name="description"
          content="hk-scan"
        />

        <meta property="og:title" content="hk-scan" key="title" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170720179-1"/>

        <script
          dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-170720179-1');
              `,
          }}
        />
      </Head>


      {/* top bar */}

      <nav>

        <ul className={styles.navBar}>
          <li className={styles.name}><Link href="/"><a>the Community for Sustainable Meat Lovers</a></Link></li>
          <div onClick={this.menuToggle}>
            {menuButton}
          </div>
        </ul>

      </nav>

      {this.props.children}

      <footer className={styles.banner}>

        <div className={styles.bottomBlurb}>
          <div className={styles.connect}>made with love by : </div>
          <div className={styles.chat}>Cristina, Lien, Shivay, Victor.</div>
        </div>





      </footer>





      </div>
  )
}
}
