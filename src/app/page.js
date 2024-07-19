"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    let rotationInterval;
    if (scrollDirection === 'up') {
      rotationInterval = setInterval(() => {
        setCurrentRotation(prev => prev - 0.36); // -0.36 degrees per frame
      }, 50); // 20 frames per second
    } else {
      rotationInterval = setInterval(() => {
        setCurrentRotation(prev => prev + 0.36); // 0.36 degrees per frame
      }, 50); // 20 frames per second
    }
    return () => clearInterval(rotationInterval);
  }, [scrollDirection]);

  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, index) => {
      const percentage = bar.getAttribute('data-percentage');
      setTimeout(() => {
        bar.style.width = `${percentage}%`;
        bar.classList.add('animate');
      }, index * 500); // Jeda 500ms antara setiap progress bar
    });
  }, []);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="content-container">
            <a href="/" className="nav-main-link">
              Rachel <span>Setyawan</span>
            </a>
            <div className="nav-link-wrapper">
              <a href="#">Project</a>
              <a href="#">Journey</a>
              <a href="#">Service</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </nav>
        <div className="header-content-wrapper">
          <div className="content-container">
            <div className="left-hero-content">
              <h1>I’m Frontend Website Developers</h1>
              <p>
                Freelance Programing and Frontend Website Developers based on
                Jakarta, Indonesia
              </p>
              <a href="mailto:rahelsetyawan321@gmai.com">Hire Me</a>
            </div>
            <div className="right-hero-content">
              <div className="component-wrapper">
                <div className="border-image">
                  <svg
                    viewBox="0 0 576 576"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="circle"
                    style={{ transform: `rotate(${currentRotation}deg)` }}
                  >
                    <circle
                      cx="288"
                      cy="288"
                      r="286"
                      stroke="#7868E6"
                      stroke-width="4"
                      stroke-linecap="square"
                      stroke-dasharray="20 20"
                    />
                  </svg>
                  <Image
                    src="/assets/images/hero-image.png"
                    alt="Hero Image"
                    width={500}
                    height={500}
                    priority
                    className="hero-image"
                  />
                </div>
                <div className="task-progress">
                  <h1 className="title">My Skills</h1>
                  <div className="progress-skills-wrapper">
                    <h1>Frontend Developer</h1>
                    <div className="progress-bar-wrapper progress-bar-wrapper-1">
                      <div className="progress-bar progress-bar-1" data-percentage="80"></div>
                    </div>
                  </div>
                  <div className="progress-skills-wrapper">
                    <h1>Programing</h1>
                    <div className="progress-bar-wrapper progress-bar-wrapper-2">
                      <div className="progress-bar progress-bar-2" data-percentage="80"></div>
                    </div>
                  </div>
                  <div className="progress-skills-wrapper">
                    <h1>UI/UX Designers</h1>
                    <div className="progress-bar-wrapper progress-bar-wrapper-3">
                      <div className="progress-bar progress-bar-3" data-percentage="50"></div>
                    </div>
                  </div>
                </div>
                <div className="teks-message">
                  <div className="rectangle">
                    <p>Hello, I’m Rachel Setyawan, a Frontend Web Developer.</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 54 30"
                    fill="none"
                    className="triangle"
                  >
                    <path d="M0 29.2266V0H53.8L0 29.2266Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="specialities-section">
        <div className="content-container">
          <div className="title-description-wrapper">
            <h1>Specialities</h1>
            <p>Beberapa keahlian saya dalam menangani product digital.</p>
          </div>
          <div className="card-wrapper">
            <div>
              <div className="color-line"></div>
              <div className="card-specialities card-frontend">
                <svg
                  viewBox="0 0 32 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-1"
                >
                  <path
                    d="M16.92 7.33325C16.4779 7.33325 16.054 7.50885 15.7415 7.82141C15.4289 8.13397 15.2533 8.55789 15.2533 8.99992C15.2533 9.44195 15.4289 9.86587 15.7415 10.1784C16.054 10.491 16.4779 10.6666 16.92 10.6666H23.5866C24.0287 10.6666 24.4526 10.491 24.7651 10.1784C25.0777 9.86587 25.2533 9.44195 25.2533 8.99992C25.2533 8.55789 25.0777 8.13397 24.7651 7.82141C24.4526 7.50885 24.0287 7.33325 23.5866 7.33325H16.92Z"
                    fill="#7868E6"
                    fill-opacity="0.13"
                  />
                  <path
                    d="M16.92 22.3333C16.4779 22.3333 16.054 22.5088 15.7415 22.8214C15.4289 23.134 15.2533 23.5579 15.2533 23.9999C15.2533 24.442 15.4289 24.8659 15.7415 25.1784C16.054 25.491 16.4779 25.6666 16.92 25.6666H23.5866C24.0287 25.6666 24.4526 25.491 24.7651 25.1784C25.0777 24.8659 25.2533 24.442 25.2533 23.9999C25.2533 23.5579 25.0777 23.134 24.7651 22.8214C24.4526 22.5088 24.0287 22.3333 23.5866 22.3333H16.92Z"
                    fill="#7868E6"
                    fill-opacity="0.13"
                  />
                  <path
                    d="M16.92 2.33325C16.4779 2.33325 16.054 2.50885 15.7415 2.82141C15.4289 3.13397 15.2533 3.55789 15.2533 3.99992C15.2533 4.44195 15.4289 4.86587 15.7415 5.17843C16.054 5.49099 16.4779 5.66658 16.92 5.66658H30.2533C30.6953 5.66658 31.1193 5.49099 31.4318 5.17843C31.7444 4.86587 31.92 4.44195 31.92 3.99992C31.92 3.55789 31.7444 3.13397 31.4318 2.82141C31.1193 2.50885 30.6953 2.33325 30.2533 2.33325H16.92Z"
                    fill="#7868E6"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M16.92 17.3333C16.4779 17.3333 16.054 17.5088 15.7415 17.8214C15.4289 18.134 15.2533 18.5579 15.2533 18.9999C15.2533 19.442 15.4289 19.8659 15.7415 20.1784C16.054 20.491 16.4779 20.6666 16.92 20.6666H30.2533C30.6953 20.6666 31.1193 20.491 31.4318 20.1784C31.7444 19.8659 31.92 19.442 31.92 18.9999C31.92 18.5579 31.7444 18.134 31.4318 17.8214C31.1193 17.5088 30.6953 17.3333 30.2533 17.3333H16.92Z"
                    fill="#7868E6"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M1.74662 0.669922C1.3046 0.669922 0.880672 0.845517 0.568111 1.15808C0.255551 1.47064 0.0799561 1.89456 0.0799561 2.33659V10.6699C0.0799561 11.1119 0.255551 11.5359 0.568111 11.8484C0.880672 12.161 1.3046 12.3366 1.74662 12.3366H10.08C10.522 12.3366 10.9459 12.161 11.2585 11.8484C11.571 11.5359 11.7466 11.1119 11.7466 10.6699V2.33659C11.7466 1.89456 11.571 1.47064 11.2585 1.15808C10.9459 0.845517 10.522 0.669922 10.08 0.669922H1.74662Z"
                    fill="#7868E6"
                  />
                  <path
                    d="M1.74662 15.6632C1.3046 15.6632 0.880672 15.8388 0.568111 16.1514C0.255551 16.4639 0.0799561 16.8878 0.0799561 17.3299V25.6632C0.0799561 26.1052 0.255551 26.5292 0.568111 26.8417C0.880672 27.1543 1.3046 27.3299 1.74662 27.3299H10.08C10.522 27.3299 10.9459 27.1543 11.2585 26.8417C11.571 26.5292 11.7466 26.1052 11.7466 25.6632V17.3299C11.7466 16.8878 11.571 16.4639 11.2585 16.1514C10.9459 15.8388 10.522 15.6632 10.08 15.6632H1.74662Z"
                    fill="#7868E6"
                  />
                </svg>
                <h1>Frontend Developer</h1>
                <p>
                  The skill is a slicing all component from design to code and
                  make the website responsive
                </p>
              </div>
            </div>
            <div>
              <div className="color-line"></div>
              <div className="card-specialities card-ui-ux">
                <svg
                  viewBox="0 0 40 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-2"
                >
                  <path
                    d="M11.2984 2.23324C12.0679 1.1703 13.2244 0.452479 14.5185 0.234663C15.8125 0.0168462 17.1404 0.316491 18.2154 1.06895C19.2905 1.8214 20.0267 2.96635 20.2652 4.25676C20.5036 5.54718 20.2252 6.8796 19.49 7.96657L9.93002 21.6199C9.16485 22.6945 8.00602 23.4231 6.70601 23.6471C5.40599 23.8711 4.07014 23.5722 2.98948 22.8157C1.90883 22.0591 1.17095 20.9061 0.936605 19.608C0.702258 18.3098 0.990435 16.9716 1.73835 15.8849L11.2984 2.23157V2.23324Z"
                    fill="#7868E6"
                  />
                  <path
                    d="M25.4467 2.37993C26.2074 1.29365 27.3685 0.554056 28.6745 0.323855C29.9806 0.0936542 31.3246 0.391702 32.4108 1.15243C33.4971 1.91316 34.2367 3.07426 34.4669 4.38029C34.6971 5.68633 34.3991 7.03032 33.6383 8.1166L24.0783 21.7683C23.3132 22.8428 22.1543 23.5715 20.8543 23.7955C19.5543 24.0195 18.2185 23.7206 17.1378 22.964C16.0571 22.2075 15.3193 21.0545 15.0849 19.7563C14.8506 18.4581 15.1388 17.1199 15.8867 16.0333L25.4467 2.37993Z"
                    fill="#7868E6"
                  />
                  <path
                    d="M34.1667 23.4332C35.4928 23.4332 36.7645 22.9064 37.7022 21.9688C38.6399 21.0311 39.1667 19.7593 39.1667 18.4332C39.1667 17.1071 38.6399 15.8354 37.7022 14.8977C36.7645 13.96 35.4928 13.4332 34.1667 13.4332C32.8406 13.4332 31.5688 13.96 30.6312 14.8977C29.6935 15.8354 29.1667 17.1071 29.1667 18.4332C29.1667 19.7593 29.6935 21.0311 30.6312 21.9688C31.5688 22.9064 32.8406 23.4332 34.1667 23.4332Z"
                    fill="#7868E6"
                  />
                </svg>
                <h1>UI/UX Designers</h1>
                <p>
                  Design all screen from client brief and sometimes build the
                  company design system
                </p>
              </div>
            </div>
            <div>
              <div className="color-line"></div>
              <div className="card-specialities card-product-thinking">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.44 0.821697C32.2852 0.666736 32.1014 0.543805 31.899 0.459931C31.6967 0.376057 31.4798 0.332886 31.2608 0.332886C31.0418 0.332886 30.8249 0.376057 30.6226 0.459931C30.4203 0.543805 30.2364 0.666736 30.0817 0.821697L28.6283 2.27503C27.6949 1.82962 26.6463 1.68453 25.627 1.85974C24.6077 2.03495 23.6678 2.52184 22.9367 3.25336L5.25832 20.93L14.6867 30.3584L32.3666 12.68C33.9067 11.1417 34.2317 8.84669 33.3433 6.99003L34.7983 5.53503C35.1108 5.22248 35.2863 4.79864 35.2863 4.3567C35.2863 3.91476 35.1108 3.49091 34.7983 3.17836L32.44 0.821697ZM25.3267 15.005L14.6867 25.645L9.97332 20.93L20.6116 10.2917L25.3267 15.0067V15.005ZM28.3566 11.975L30.0067 10.325C30.1616 10.1702 30.2845 9.98643 30.3684 9.7841C30.4523 9.58177 30.4955 9.36489 30.4955 9.14586C30.4955 8.92684 30.4523 8.70996 30.3684 8.50763C30.2845 8.3053 30.1616 8.12148 30.0067 7.9667L27.6517 5.61003C27.4969 5.45507 27.313 5.33214 27.1107 5.24826C26.9084 5.16439 26.6915 5.12122 26.4725 5.12122C26.2535 5.12122 26.0366 5.16439 25.8343 5.24826C25.6319 5.33214 25.4481 5.45507 25.2933 5.61003L23.6433 7.26003L28.3566 11.9767V11.975Z"
                    fill="#7868E6"
                  />
                  <path
                    d="M0.333328 35.25L3.87 22.2866L13.2967 31.715L0.333328 35.25Z"
                    fill="#7868E6"
                  />
                </svg>
                <h1>Product Thinking</h1>
                <p>
                  Product thinking is a method of analyzing a product using a
                  design thinking framework
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="content-container">
          <div className="title-description-wrapper">
            <h1>My Portfolio</h1>
            <p>Berikut adalah beberapa portofolio yang telah saya kerjakan.</p>
          </div>
          <div className="image-portfolio-wrapper">
            <div className="row-1">
              <div className="card">
                <Image
                  src="/assets/images/portofolio-image-1.png"
                  alt="Portofolio Image 1"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="portfolio-image"
                />
                <h1>StarVest Webpage</h1>
                <span>Web Slicing</span>
              </div>
              <div className="card">
                <Image
                  src="/assets/images/portofolio-image-2.png"
                  alt="Portofolio Image 2"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="portfolio-image"
                />
                <h1>EcoWise Life App</h1>
                <span>UI/UX Design</span>
              </div>
            </div>
            <div className="row-2">
              <div className="card">
                <Image
                  src="/assets/images/portofolio-image-3.png"
                  alt="Portofolio Image 3"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="portfolio-image"
                />
                <h1>JED Webpage</h1>
                <span>Web Slicing</span>
              </div>
              <div className="card">
                <Image
                  src="/assets/images/portofolio-image-4.png"
                  alt="Portofolio Image 4"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="portfolio-image"
                />
                <h1>UI EpiClass</h1>
                <span>UI/UX Design</span>
              </div>
              <div className="card">
                <Image
                  src="/assets/images/portofolio-image-5.png"
                  alt="Portofolio Image 5"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="portfolio-image"
                />
                <h1>UI Laptop Shop</h1>
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content-container">
          <a href="/" className="main-link">
            Rachel Setyawan
          </a>
          <div className="link-wrapper">
            <a href="https://github.com/r4c-wanz" target="_blank">
              Github
            </a>
            <a href="https://www.instagram.com/rsh_78.6" target="_blank">
              Instagram
            </a>
            <a href="https://dribbble.com/rachelsetyawan" target="_blank">
              Dribble
            </a>
            <a href="https://www.behance.net/rachelsetyawan" target="_blank">
              Behance
            </a>
            <a href="mailto:rahelsetyawan321@gmai.com" className="button-hire">
              Hire Me
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
