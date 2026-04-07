import dynamite from '../images/dynamite.jpg';
import ptd from '../images/PTD.png';
import grammy from '../images/grammy.jpg';
import golden from '../images/golden.png';
import military from '../images/military.jpg';
import indigo from '../images/indigo.jpg';
import jack from '../images/jack.avif';
import dday from '../images/dday.jpg';
import jimin from '../images/jimin.png';
import fan from '../images/fan.webp';

const articles = [
  {
    name: "bts-dynamite-history-making-single",
    title: "BTS 'Dynamite': The History-Making Single That Took Over the World",
    category: "Music Release",
    date: "August 21, 2020",
    readTime: "5 min read",
    content: [
      "BTS made history with their first English single 'Dynamite,' debuting at No. 1 on the Billboard Hot 100. The disco-pop track broke YouTube records with 100M+ views in 24 hours and earned BTS their first Grammy nomination."
    ],
    keyMoments: [
      "First #1 on Billboard Hot 100",
      "Grammy nomination for Best Pop Duo/Group",
      "100M+ views in 24 hours on YouTube"
    ],
    image: dynamite
  },
  {
    name: "bts-permission-to-dance-world-tour",
    title: "Permission to Dance World Tour: BTS's Spectacular Return to the Stage",
    category: "Tour News",
    date: "November 27, 2021",
    readTime: "4 min read",
    content: [
      "After a two-year pandemic hiatus, BTS returned with their 'Permission to Dance on Stage' tour. They performed four sold-out shows at LA's SoFi Stadium to over 200,000 fans, later expanding to Seoul, Las Vegas, and Japan with global live-streaming."
    ],
    keyMoments: [
      "First in-person concerts since 2019",
      "SoFi Stadium: 4 sold-out shows (200,000+ fans)",
      "Global live-streaming reaching millions"
    ],
    image: ptd
  },
  {
    name: "bts-grammy-win-2023",
    title: "BTS Makes History with First Grammy Win in 2023",
    category: "Award Win",
    date: "February 5, 2023",
    readTime: "3 min read",
    content: [
      "BTS won their first Grammy Award for Best Pop Duo/Group Performance with 'My Universe' featuring Coldplay, becoming the first Korean act to win a Grammy. Their emotional acceptance speech celebrated breaking musical boundaries."
    ],
    keyMoments: [
      "First Grammy win for a Korean act",
      "Collaboration with Coldplay",
      "Historic acceptance speech"
    ],
    image: grammy
  },
  {
    name: "bts-solo-projects-jungkook",
    title: "Jungkook's Solo Debut: 'Golden' Album Takes the World by Storm",
    category: "Solo Release",
    date: "November 3, 2023",
    readTime: "3 min read",
    content: [
      "Jungkook's solo album 'Golden' featured the hit 'Seven,' which debuted at No. 1 on Billboard Hot 100. The album broke streaming records and included collaborations with Jack Harlow, Major Lazer, and DJ Snake."
    ],
    keyMoments: [
      "First solo No. 1 on Billboard Hot 100",
      "Album 'Golden' breaks streaming records",
      "Sold-out showcase in NYC"
    ],
    image: golden
  },
  {
    name: "bts-military-service-update",
    title: "BTS Military Service: Members Begin Enlistment, Promise to Reunite",
    category: "News Update",
    date: "December 11, 2023",
    readTime: "5 min read",
    content: [
      "BTS members began mandatory military service starting with Jin in December 2022. The group promised to reunite as a complete group in 2025 after all members complete their service, continuing solo releases in the meantime."
    ],
    keyMoments: [
      "Jin first to enlist (December 2022)",
      "Full reunion expected in 2025",
      "Continued solo releases during service"
    ],
    image: military
  },
  {
    name: "bts-solo-projects-rm",
    title: "RM's Solo Album 'Indigo': A Deep Dive into the Leader's Mind",
    category: "Solo Release",
    date: "December 2, 2022",
    readTime: "4 min read",
    content: [
      "RM released his first full-length solo album 'Indigo,' exploring mental health and self-discovery. The album debuted at No. 3 on Billboard 200 and featured collaborations with Erykah Badu, Anderson .Paak, and Tablo."
    ],
    keyMoments: [
      "Debut at No. 3 on Billboard 200",
      "Collaborations with global artists",
      "Themes of mental health and self-discovery"
    ],
    image: indigo
  },
  {
    name: "bts-solo-projects-jhope",
    title: "J-Hope's 'Jack in the Box': The Main Dancer's Energetic Solo Debut",
    category: "Solo Release",
    date: "July 15, 2022",
    readTime: "3 min read",
    content: [
      "J-Hope debuted solo with 'Jack in the Box,' featuring the hit 'MORE.' The album debuted at No. 14 on Billboard 200 and addressed themes of equality and self-love."
    ],
    keyMoments: [
      "Title track 'MORE' becomes a hit",
      "Debut at No. 14 on Billboard 200",
      "Themes of equality and self-love"
    ],
    image: jack
  },
  {
    name: "bts-solo-projects-suga",
    title: "Suga's 'D-2': The Rapper's Raw and Honest Solo Album",
    category: "Solo Release",
    date: "April 22, 2023",
    readTime: "4 min read",
    content: [
      "Suga's solo album 'D-2' debuted at No. 1 on Billboard 200, making him the first BTS member to achieve this. The album explored mental health and societal pressures with collaborations featuring IU and MAX."
    ],
    keyMoments: [
      "First BTS member with solo No. 1 on Billboard 200",
      "Themes of mental health and personal growth",
      "Collaborations with IU and MAX"
    ],
    image: dday
  },
  {
    name: "bts-solo-projects-jimin",
    title: "Jimin's 'Face': The Main Dancer's Sultry Solo Album",
    category: "Solo Release",
    date: "March 24, 2023",
    readTime: "3 min read",
    content: [
      "Jimin's solo debut 'Face' featured the hit 'Like Crazy,' debuting at No. 2 on Billboard 200. The album focused on themes of self-love and confidence."
    ],
    keyMoments: [
      "Title track 'Like Crazy' breaks records",
      "Debut at No. 2 on Billboard 200",
      "Themes of self-love and confidence"
    ],
    image: jimin
  },
  {
    name: "bts-army-fan-meeting-los-angeles",
    title: "BTS ARMY Fan Meeting: An Unforgettable Night in Los Angeles",
    category: "Fan Event",
    date: "December 15, 2023",
    readTime: "4 min read",
    content: [
      "BTS held an exclusive fan meeting in LA featuring behind-the-scenes content, live Q&A sessions, and acoustic performances of fan favorites like 'Spring Day' and 'Magic Shop.'"
    ],
    keyMoments: [
      "Exclusive behind-the-scenes content",
      "Live Q&A with members",
      "Acoustic performances of fan-favorite songs"
    ],
    image: fan
  }
];

export default articles;