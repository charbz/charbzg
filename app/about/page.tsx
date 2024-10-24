import { Card } from 'app/components/card'
import Image from 'next/image'
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import PageBreak from 'app/components/pageBreak';
import { Badge } from 'app/components/badge';

const firstJobYear = 2009;

function getYearsOfExperience() {
  const currentYear = new Date().getFullYear();
  return currentYear - firstJobYear;
}

export default function Page() {
    return (
      <section>
        <Card />
        <div className="mb-16">
          <h1 className="mb-4 text-2xl font-semibold tracking-tighter dark:text-white">
            About Me
          </h1>
          <p>
            I started writing code at the young age of 9 in an attempt to make my very own video games. I still remember dabbling in QBASIC to create text-based RPGs, 
            then graduating to Flash & ActionScript to make more visually rewarding mini-games. At that time, I never imagined where my little hobby would take me.
            <br /><br />
            After earning a Bachelor's degree in Computer Science from the University of Windsor, and working as a software engineer in Toronto Canada for several years, 
            my journey led me to Silicon Valley, where I worked as a software engineer at <a href="https://www.ibm.com/us-en" target="_blank" className="superlink">IBM</a>, then joined <a href="https://chartboost.com" target="_blank" className="superlink">Chartboost</a>,
            where I built several ad-tech products, including an ad-mediation product that outperformed Google's Admob, managed multiple engineering teams, and oversaw the acquisition of the company by <a href="https://zynga.com" target="_blank" className="superlink">Zynga</a>.
            <br /><br />
            I am fortunate to have worked with some amazing people and built products that have been used by millions of people around the world.
          </p>

          <PageBreak className="my-1.5"/>

          <h1 className="mb-4 text-2xl font-semibold tracking-tighter dark:text-white">
            Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="mb-2 mb-4 dark:text-gray-300">Core Skills</h3>
              <Badge className="mr-2 mb-2">Software Engineering</Badge>
              <Badge className="mr-2 mb-2">Distributed Systems</Badge>
              <Badge className="mr-2 mb-2">Scalability</Badge>
              <Badge className="mr-2 mb-2">Client-Server Architecture</Badge>
              <Badge className="mr-2 mb-2">SDK Development</Badge>
              <Badge className="mr-2 mb-2">API Development</Badge>
              <Badge className="mr-2 mb-2">Web Development</Badge>
              <Badge className="mr-2 mb-2">Data Pipelines</Badge>
              <Badge className="mr-2 mb-2">Cloud services</Badge>
              <Badge className="mr-2 mb-2">Containerization</Badge>
              <Badge className="mr-2 mb-2">Testing & Automation</Badge>
              <Badge className="mr-2 mb-2">Leadership</Badge>
            </div>
            <div>
              <h3 className="mb-2 mb-4 dark:text-gray-300">Languages & Technologies</h3>
              <Badge className="mr-2 mb-2">Python</Badge>
              <Badge className="mr-2 mb-2">Golang</Badge>
              <Badge className="mr-2 mb-2">Java</Badge>
              <Badge className="mr-2 mb-2">Javascript</Badge>
              <Badge className="mr-2 mb-2">Typescript</Badge>
              <Badge className="mr-2 mb-2">NodeJS</Badge>
              <Badge className="mr-2 mb-2">SQL</Badge>
              <Badge className="mr-2 mb-2">MongoDB</Badge>
              <Badge className="mr-2 mb-2">Redis</Badge>
              <Badge className="mr-2 mb-2">Memcache</Badge>
              <Badge className="mr-2 mb-2">BigQuery</Badge>
              <Badge className="mr-2 mb-2">BigTable</Badge>
              <Badge className="mr-2 mb-2">Docker</Badge>
              <Badge className="mr-2 mb-2">Kubernetes</Badge>
              <Badge className="mr-2 mb-2">Travis</Badge>
              <Badge className="mr-2 mb-2">Jenkins</Badge>
              <Badge className="mr-2 mb-2">FastAPI</Badge>
              <Badge className="mr-2 mb-2">Flask</Badge>
              <Badge className="mr-2 mb-2">React</Badge>
              <Badge className="mr-2 mb-2">Tensorflow</Badge>
              <Badge className="mr-2 mb-2">Numpy</Badge>
              <Badge className="mr-2 mb-2">AWS / GCP</Badge>
            </div>
            <div>
              <h3 className="mb-2 mb-4 dark:text-gray-300">Ad-Tech</h3>
              <Badge className="mr-2 mb-2">OpenRTB</Badge>
              <Badge className="mr-2 mb-2">Ad-Mediation</Badge>
              <Badge className="mr-2 mb-2">Programmatic Advertising</Badge>
              <Badge className="mr-2 mb-2">SSPs</Badge>
              <Badge className="mr-2 mb-2">DSPs</Badge>
              <Badge className="mr-2 mb-2">MMPs</Badge>
              <Badge className="mr-2 mb-2">DMPs</Badge>
              <Badge className="mr-2 mb-2">Ad-Lifecycle</Badge>
              <Badge className="mr-2 mb-2">Viewability (OMSDK)</Badge>
              <Badge className="mr-2 mb-2">Ad-Ranking</Badge>
              <Badge className="mr-2 mb-2">Attribution</Badge>
              <Badge className="mr-2 mb-2">Privacy & Consent management</Badge>
              <Badge className="mr-2 mb-2">AB Testing & optimization</Badge>
            </div>
          </div>

          <PageBreak className="my-1.5"/>

          <h1 className="mb-4 text-2xl font-semibold tracking-tighter dark:text-white">
            Experience
          </h1>
          <div className="mb-10">
          <h2 className="mb-4 text-xl font-semibold tracking-tighter flex items-center justify-between dark:text-gray-300">
            <div className="flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              <span>Chartboost <span className="text-base">acquired by Zynga / T2</span></span>
            </div>
            <span className="text-xsm text-gray-600">JULY 2022 - PRESENT</span>
          </h2>
          <ul>
            <li>
              <h3 className="mb-2 text-base font-semibold dark:text-blue-prime text-blue-prime-ultra-typo">Director of Engineering</h3>
              <ul className="list-disc ml-3">
                <li className="mb-2">Directed a department of 40 engineers across 5 teams to build our next generation Ad-Mediation and Monetization platform.</li>
                <li className="mb-2">Oversaw the <a href="https://www.chartboost.com/case-studies/words-with-friends-2-shows-performance-lift-after-migration-to-cb-mediation/" target="_blank" className="superlink">migration of core Zynga titles</a> to Chartboost Mediation, driving <a href="https://www.chartboost.com/case-studies/gram-games-sees-a-23-arpdau-lift-after-migrating-to-chartboost-mediation/" target="_blank" className="superlink">23% ARPDAU increase</a>, and a major performance lift across all metrics for titles such as Words with Friends, Game of Thrones Slots, Empires & Puzzles, Farmville 3, CSR,  Zynga Poker.</li>
                <li className="mb-2">Led complex projects spanning our entire advertising stack (SDK → SSP → DSP), scaling high QPS services (2.3M+ QPS), and bridging the gap across departments.</li>
              </ul>
            </li>
          </ul>
          </div>


          <div className="mb-10">
          <h2 className="mb-4 text-xl font-semibold tracking-tighter flex items-center justify-between dark:text-gray-300">
            <div className="flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              <span>Chartboost <span className="text-base">acquired by Zynga</span></span>
            </div>
            <span className="text-xsm text-gray-600">SEP 2020 - JULY 2022</span>
          </h2>
          <ul>
            <li>
              <h3 className="mb-2 text-base font-semibold dark:text-blue-prime text-blue-prime-ultra-typo">Engineering Manager</h3>
              <ul className="list-disc ml-3">
                <li className="mb-2">Focused on improving scalability, performance, and quality of our real-time bidding solution, culminating in a product that outperformed Google's Admob and Applovin's Max.</li>
                <li className="mb-2">Oversaw the OpenRTB integration with several Ad-Networks including Google Bidding, Meta Audience Network, Amazon APS, and Lift-off.</li>
                <li className="mb-2">Led the team’s engineering efforts throughout our <a href="https://www.sec.gov/Archives/edgar/data/1439404/000156459021024515/znga-ex991_35.htm" target="_blank" className="superlink">acquisition by Zynga</a>.</li>
              </ul>
            </li>
          </ul>
          </div>


          <div className="mb-10">
          <h2 className="mb-4 text-xl font-semibold tracking-tighter flex items-center justify-between dark:text-gray-300">
            <div className="flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              <span>Chartboost</span>
            </div>
            <span className="text-xsm text-gray-600">MAY 2018 - SEP 2020</span>
          </h2>
          <ul>
            <li>
              <h3 className="mb-2 text-base font-semibold dark:text-blue-prime text-blue-prime-ultra-typo">Senior Software Engineer</h3>
              <ul className="list-disc ml-3">
                <li className="mb-2">Built the company’s first Ad-Mediation solution, focusing on backend servers using Golang + Python.</li>
                <li className="mb-2">Collaborated closely with the Mobile SDK team to define SLAs and build the product from the ground up. </li>
                <li className="mb-2">Built the entire self-serve and customer facing dashboard, providing configuration and analytics reporting to our beta customers. </li>
              </ul>
            </li>
          </ul>
          </div>

          <div className="mb-10">
          <h2 className="mb-4 text-xl font-semibold tracking-tighter flex items-center justify-between dark:text-gray-300">
            <div className="flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              <span>IBM <span className="text-base">Tealeaf</span></span>
            </div>
            <span className="text-xsm text-gray-600">NOV 2015 - MAY 2018</span>
          </h2>
          <ul>
            <li>
              <h3 className="mb-2 text-base font-semibold dark:text-blue-prime text-blue-prime-ultra-typo">Software Engineer</h3>
              <ul className="list-disc ml-3">
                <li className="mb-2">Developed new features and enhancements for the Tealeaf session capture SDK. </li>
                <li className="mb-2">Built configuration tools for the session capture product. </li>
                <li className="mb-2">Built custom SDK solutions for high profile clients including Wells Fargo, Delta Airlines, Fidelity, and others. </li>
                <li className="mb-2">Set up a CI/CD and testing automation pipeline using Jenkins, Ant, and Selenium Webdriver. </li>
                <li className="mb-2">Researched new ideas, POCs, conducted feasibility studies, and created documentation for new features and enhancements to the SDK.</li>
              </ul>
            </li>
          </ul>
          </div>


          <div className="mb-10">
          <h2 className="mb-4 text-xl font-semibold tracking-tighter flex items-center justify-between dark:text-gray-300">
            <div className="flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              <span>Questrade</span>
            </div>
            <span className="text-xsm text-gray-600">SEP 2014 - APR 2015</span>
          </h2>
          <ul>
            <li>
              <h3 className="mb-2 text-base font-semibold dark:text-blue-prime text-blue-prime-ultra-typo">Senior Software Engineer</h3>
              <ul className="list-disc ml-3">
                <li className="mb-2">Developed rich interactive UI components for client facing wealth management software. </li>
                <li className="mb-2">Created SVG animations using Javascript, CSS3, and GreenSockJS for the PortfolioIQ product lunch marketing campaign. </li>
                <li className="mb-2">Developed features for the AngularJS based PortfolioIQ wizard ( an automated wealth management software ) </li>
              </ul>
            </li>
          </ul>
          </div>


          <div className="mb-10">
          <h2 className="text-xl font-semibold tracking-tighter flex items-center justify-between dark:text-gray-300">
            <div className="flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              <span>Avid Life Media</span>
            </div>
            <span className="text-xsm text-gray-600">JAN 2013 - SEP 2014 <br/> APR 2015 - NOV 2015</span>
          </h2>
          <ul>
            <li>
              <h3 className="mb-2 text-base font-semibold dark:text-blue-prime text-blue-prime-ultra-typo">Javascript Developer</h3>
              <ul className="list-disc ml-3">
                <li className="mb-2">Built a real-time chat system for our mobile app using NodeJS and Socket.io that scaled to support the app's 40 million users</li>
                <li className="mb-2">Reworked the entire legacy app into a modern mobile web app using Backbone JS, Underscore JS, JQuery, Handlebars, Twitter-Bootstrap, LESS css, and HTML5 on the front-end.</li>
                <li className="mb-2">Introduced new concepts such as MVC, dependency injection, and modularization to the codebase.</li>
                <li className="mb-2">Transitioned from a backend PHP role to a JS developer role on the newly created mobile team</li>
              </ul>
            </li>
          </ul>
          </div>

          <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold tracking-tighter flex items-center justify-between dark:text-gray-300">
            <div className="flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              <span>Tandis Software</span>
            </div>
            <span className="text-xsm text-gray-600">JAN 2010 - SEP 2011</span>
          </h2>
          <ul>
            <li>
              <h3 className="mb-2 text-base font-semibold dark:text-blue-prime text-blue-prime-ultra-typo">Flash ActionScript 3.0 developer</h3>
              <ul className="list-disc ml-3">
                <li className="mb-2">Developed educational games, for the Ontario ministry of education using Flash/Actionscript 3.0, Adobe CS5.</li>
                <li className="mb-2">Developed custom user controls and GUI interface using VB.NET , and ASP.NET.</li>
                <li className="mb-2">Focused on reusability while developing modules in order to stay in line with the company's technical goals</li>
              </ul>
            </li>
          </ul>
          </div>


          <PageBreak className="my-1.5"/>

          <h1 className="mb-4 text-2xl font-semibold tracking-tighter dark:text-white">
            Education
          </h1>
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold tracking-tighter flex items-center justify-between dark:text-gray-300">
              <div className="flex items-center">
                <AcademicCapIcon className="w-6 h-6 mr-2" />
                <span>Bachelor of Computer Science</span>
              </div>
              <span className="text-xsm text-gray-600">SEP 2006 - JUN 2010</span>
            </h2>
            <ul className="ml-4 mb-8">
              <li>
                <ul className="ml-4 list-disc list-inside">
                  <li>University of Windsor, Ontario, Canada</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </section>
    )
  }
  