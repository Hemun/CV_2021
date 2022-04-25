import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.body0}>
      <div className={styles.container}>
        <div className={styles.fullName}>Amartuvshin Baasan</div>
        <div className={styles.profession}>Software Engineer</div>
        <div className={styles.professionP}>Tech-savvy Web Developer contributes specialty in search engine optimization, marketing, social media management and audio/video integration to launch custom-tailored code for website presence. Detailed understanding of complex, up-to-date programming languages and considerations. Innovative approach to actualizing organizational marketing plans. Resourceful navigation of intricate factors governing web planning, security, SEO and launch.</div>
        <div className={styles.info}>
          <div className={styles.leftBox}>
            <div className={styles.component1}>
              <div className={styles.heading1}>
                <div className={styles.heading1Icon}>
                </div>
                <div className={styles.headingTitle}>Contact</div>
              </div>
              <div className={styles.body1}>
                <div className={styles.address}>
                  <div className={styles.contactInfo}>Address</div>
                  <span className={styles.addressB}>Ulan Bator, 1, 11000</span>
                </div>
                <div className={styles.phone}>
                  <div className={styles.contactInfo}>Phone</div>
                  <span className={styles.phoneB}>+97680343049</span>
                </div>
                <div className={styles.email}>
                  <div className={styles.contactInfo}>E-mail</div>
                  <span className={styles.emailB}>Amaraa.baasan12@gmail.com</span>
                </div>
              </div>
            </div>
            <div className={styles.component2}>
              <div className={styles.heading2}>
                <div className={styles.heading2Icon}></div>
                <div className={styles.headingTitle}>Skills</div>
              </div>
              <div className={styles.body2}>
                <div className={styles.skill1}>
                  <div className={styles.skill1H}>
                    <p>Web development project</p>
                  </div>
                  <div className={styles.skill1B}>
                    <svg className={styles.svg}>
                        <circle cx="10" cy="30" r="5" fill="#252932" stroke-width="1" class="default-fill"></circle>
                        <circle cx="23" cy="30" r="5" stroke="black" stroke-width="0.5" fill="white" />
                        <circle cx="36" cy="30" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                        <circle cx="49" cy="30" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                        <circle cx="62" cy="30" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                      </svg>
                    <span className={styles.skill1S}>Basic</span>
                  </div>
                </div>
                <div className={styles.skill2}>
                  <div className={styles.skill2H}>
                    <p>Software Best Practices</p>
                  </div>
                  <div className={styles.skill2B}>
                    <svg className={styles.svg}>
                        <circle cx="10" cy="25" r="5" fill="#252932" stroke-width="1" class="default-fill"></circle>
                        <circle cx="23" cy="25" r="5" fill="#252932" stroke-width="1" class="default-fill" />
                        <circle cx="36" cy="25" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                        <circle cx="49" cy="25" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                        <circle cx="62" cy="25" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                      </svg>
                    <span className={styles.skill2S}>Average</span>
                  </div>
                </div>
                <div className={styles.skill3}>
                  <div className={styles.skill3H}>
                    <p>C++</p>
                  </div>
                  <div className={styles.skill3B}>
                    <svg className={styles.svg}>
                        <circle cx="10" cy="16" r="5" fill="#252932" stroke-width="1" class="default-fill"></circle>
                        <circle cx="23" cy="16" r="5" fill="#252932" stroke-width="1" class="default-fill" />
                        <circle cx="36" cy="16" r="5" fill="#252932" stroke-width="1" class="default-fill"></circle>
                        <circle cx="49" cy="16" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                        <circle cx="62" cy="16" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                      </svg>
                    <span className={styles.skill3S}>Good</span>
                  </div>
                </div>
                <div className={styles.skill4}>
                  <div className={styles.skill4H}>
                    <p>JavaScript</p>
                  </div>
                  <div className={styles.skill4B}>
                    <svg className={styles.svg}>
                      <circle cx="10" cy="18" r="5" fill="#252932" stroke-width="1" class="default-fill"></circle>
                      <circle cx="23" cy="18" r="5" fill="#252932" stroke-width="1" class="default-fill" />
                      <circle cx="36" cy="18" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                      <circle cx="49" cy="18" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                      <circle cx="62" cy="18" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                    </svg>
                    <span className={styles.skill4S}>Average</span>
                  </div>
                </div>
                <div className={styles.skill5}>
                  <div className={styles.skill5H}>
                    <p>CSS</p>
                  </div>
                  <div className={styles.skill5B}>
                    <svg className={styles.svg}>
                        <circle cx="10" cy="18" r="5" fill="#252932" stroke-width="1" class="default-fill"></circle>
                        <circle cx="23" cy="18" r="5" fill="#252932" stroke-width="1" class="default-fill"></circle>
                        <circle cx="36" cy="18" r="5" fill="#252932" stroke-width="1" class="default-fill"></circle>
                        <circle cx="49" cy="18" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                        <circle cx="62" cy="18" r="5" stroke="black" stroke-width="0.5" fill="white"></circle>
                      </svg>
                    <span className={styles.skill5S}>Good</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.component3}>
              <div className={styles.heading3}>
                <div className={styles.heading3Icon}></div>
                <div className={styles.headingTitle}>Work History</div>
              </div>
              <div className={styles.body3}>
                <div className={styles.history1}>
                  <div className={styles.history1D}>
                    <span className={styles.spanTime}>2021.10 - 2021.12</span>
                  </div>
                  <div className={styles.content3}>
                    <span className={styles.subHead}>Backend Developer</span>
                    <span className={styles.spanItalic}>Unitel, Ulaanbaatar, Mongolia</span>
                    <ul>
                      <li className={styles.span}>
                        <Link href="/">
                          <p>Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.</p>
                        </Link>
                      </li>
                      <li  className={styles.span}>
                        <Link href="/">
                          <p>Provided front-end website development using WordPress, Hubspot and other editing software.</p>
                        </Link>
                      </li>
                      <li className={styles.span}>
                        <Link href="/">
                          <p>Collaborated with marketing department to determine organizational need and design pages to meet goals.</p>
                        </Link>
                      </li>
                      <li className={styles.span}>
                        <Link href="/">
                          <p>Developed technical solutions required to accommodate specific user-facing assets such as </p>
                        </Link>
                      </li>
                    </ul>
                    {/* <ul>
                      <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.</li>
                      <li>Provided front-end website development using WordPress, Hubspot and other editing software.</li>
                      <li>Collaborated with marketing department to determine organizational need and design pages to meet goals.</li>
                      <li>Developed technical solutions required to accommodate specific user-facing assets such as <span class="ttc_token" style="color:#468ae5">[Product or Service]</span>.</li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.component4}>
              <div className={styles.heading4}>
                <div className={styles.heading4Icon}></div>
                <div className={styles.headingTitle}>Education</div>
              </div>
              <div className={styles.body4}>
                <div className={styles.c4content1}>
                    <div className={styles.c4c1header}>
                      <span className={styles.spanTime}>2008.09- </span>
                      <span className={styles.spanTime}>2019.06</span>
                    </div>
                    <div className={styles.c4c1body}>
                      <span className={styles.subHead1}>High school Diploma</span>
                      <span className={styles.eduP}>Erdmiin dalai - Khuvsgul, Murun</span>
                    </div>
                  </div>
                  <div className={styles.c4content2}>
                    <div className={styles.c4c2header}>
                      <span className={styles.spanTime}>2019.09- </span>
                      <span className={styles.spanTime}>Current</span>
                    </div>
                    <div className={styles.c4c2body}>
                      <span className={styles.subHead2}>GED</span>
                      <span className={styles.eduP}>National University of Mongolia - Mongolia, Ulaanbaatar</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className={styles.component5}>
              <div className={styles.heading5}>
                <div className={styles.heading5Icon}></div>
                <div className={styles.headingTitle}>Hobbies</div>
              </div>
              <div className={styles.body5}>
                <div className={styles.spanHobbies}>Billiard * Basketball * Ping Pong * Chess</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
