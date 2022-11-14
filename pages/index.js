import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import PageTitle from '../components/Title/Title';
import CourseCard from '../components/CourseCard/CourseCard';
import Logo from '../components/Logo/Logo'
import Button from '../components/Button/Button';
import GetStarted__Section from '../components/GetStarted__Section/GetStarted__Section';
import GetStarted__container from '../components/GetStarted__container/GetStarted__container';
import Title from '../components/Title/Title';
import Subtitle from '../components/Subtitle/Subtitle';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skilled Elearning</title>
        <meta name="description" content="Online courses" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <Header>
          <Logo src="logo-dark.svg"></Logo>
            <Button variant="button_header">
                Get Started
            </Button>
        </Header>

        <GetStarted__Section>
          <GetStarted__container>
            <Title>
              Maximize skill, minimize&nbsp;budget
            </Title>
            <Subtitle>
              Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
            </Subtitle>
            <Button
              variant="button_page"
              >
              Get Started
            </Button>
          </GetStarted__container>
        </GetStarted__Section>

        <section className={styles.courses}>
          <div className={styles.courses__container}>
            <h3 className={styles.courses__check}>Check out our most popular courses!</h3>

            <CourseCard 
              cardImg="icon-animation.svg" 
              cardAlt="icon for an animation course"
              cardTitle="Animation" 
              cardContent="Learn the latest animation techniques to create stunning motion design and captivate your audience."
              cardLink="#"
              cardLinkName="Get Started"
              />
            <CourseCard 
              cardImg="icon-design.svg" 
              cardAlt="icon for a design course"
              cardTitle="Design" 
              cardContent="Create beautiful, usable interfaces to help shape the future of how the web looks."
              cardLink="#"
              cardLinkName="Get Started"
            />
            <CourseCard 
              cardImg="icon-photography.svg" 
              cardAlt="icon for a photography course"
              cardTitle="Photography" 
              cardContent="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
              cardLink="#"
              cardLinkName="Get Started"
            />
            <CourseCard 
              cardImg="icon-crypto.svg" 
              cardAlt="icon for a crypto course"
              cardTitle="Crypto" 
              cardContent="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
              cardLink="#"
              cardLinkName="Get Started"
            />
            <CourseCard 
              cardImg="icon-business.svg" 
              cardAlt="icon for a business course"
              cardTitle="Business" 
              cardContent="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
              cardLink="#"
              cardLinkName="Get Started"
            />
          </div>

        </section>
        
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
