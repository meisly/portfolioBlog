/* eslint-disable prettier/prettier */
import React from "react";

import Card from "./Card";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const { useEffect, useState } = React;

const Gallery = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fakeItems = [
      {
        avatar: {
          url: null
        }, title: 'Darebuddy',
        description: 'Web application that allows users to track their progress in fitness programs and log workouts from the popular open source fitness content provider Darebee',
        github: 'https://github.com/meisly/darebuddy',
        demo: 'https://damp-earth-37383.herokuapp.com/',
        highlighted: false
      },
      {
        avatar: {
          url: null
        }, title: 'Htown Brews',
        description: 'Users can search and view local beers as a guest or login to add their own ratings. Admin users can also add new beers to the database.',
        github: 'https://github.com/meisly/Htown-Brews',
        demo: 'https://powerful-depths-98350.herokuapp.com',
        highlighted: false
      },
      {
        avatar: {
          url: null
        },
        title: "The FriendZone",
        description: 'Users enter their information and complete a short survey. Then their results were compared to others and the most compatible user was returned.',
        github: 'https://github.com/meisly/theFriendZone',
        demo: 'https://pure-reaches-64620.herokuapp.com',
        highlighted: false
      }, {
        avatar: {
          url: null
        },
        title: 'Get Out',
        description: 'Date planning application using information aggregated from multiple sources. Users entered the date, the location and the type of activity they were interested in. These inputs were used to make several API queries and the results are aggregated and returned. The user can then select activities they would like to pursue and add them to their planner.',
        github: 'https://github.com/AndrewBrooking/Project-1',
        demo: 'https://andrewbrooking.github.io/Project-1/#',
        highlighted: false
      },
      {
        avatar: {
          url: null
        },
        title: 'Bamazon',
        description: 'A command line application for inventory management with multiple user levels.',
        github: 'https://github.com/meisly/bamazon',
        demo: null,
        highlighted: false
      },
      {
        avatar: {
          url: null
        },
        title: 'Eat-da-Burger',
        description: `Eat-da-Burger allows you to add burgers to a list and then later mark them
        as devoured. Eat-da-Burger is a web application hosted on Heroku, using the
        JawsDB MySQL database on the backend. Express.js serves web requests with Handlebars.js as
        the templating engine.`,
        github: 'https://github.com/meisly/burgers',
        demo: 'https://hidden-caverns-60875.herokuapp.com/',
        highlighted: false
      }, {
        avatar: {
          url: null
        },
        title: 'RPS Chatbot',
        description: `I created a simple rock, paper, scissors game that can be played within a
        chatroom. Games are narrated by a chatbox. The chatroom utilizes a Firebase NoSQL database.`,
        github: 'https://github.com/meisly/RPS-Multi',
        demo: 'https://meisly.github.io/RPS-Multi/',
        highlighted: false
      },
      {
        avatar: {
          url: null
        },
        title: 'Clickit Memory Game',
        description: 'A challenging memory game built using React and Node',
        github: 'https://github.com/meisly/clickygame',
        demo: 'https://meisly.github.io/clickygame/',
        highlighted: false
      }
    ];

    setItems([...fakeItems]);
  }, []);

  return (
    <React.Fragment>
      <section className="section" >
        <hr style={{borderColor: 'transparent', borderStyle: 'solid'}}></hr>
        <h2 className="section__title">{`Projects`}</h2>
        <div className="gallery gallery--grid" id="portfolio">
          {items &&
            items.map((item, index) => (
              ( index < props.max )? (
                <div
                key={Math.random(10000)}
                className={
                  item.highlighted
                    ? "gallery__item gallery__item--highlight"
                    : "gallery__item"
                }
              >
                <Card item={item} key={"item-" + index} />
              </div>
              ) : ''
          ))}
        </div>
      </section>
      <style jsx>{`
          * {
            box-sizing: border-box;
          }
        `}
      </style>
      <style global jsx>{`
      :root {
        --gradient-1: linear-gradient(315deg,#bbf0fc 0%,#fdf4f7 100%);
        /*   --gradient-2: linear-gradient(214deg, #8EE2F1 0%, #CDFEDF 55%); */
        --gradient-2: linear-gradient(315deg,#bbf0fc 0%,#fdf4f7 100%);
        --gradient-3: linear-gradient(315deg,#bbf0fc 0%,#fdf4f7 100%);
      }

      .card__element--user-img img,
      .card__element--user-img svg {
        --size: 65px;

        background-color: #fff;
        border: 2px solid #000;
        border-radius: 50%;
        left: 10px;
        position: absolute;
        top: calc(-1 * (var(--size) / 2));
        width: var(--size);
      }

      .card__element--user-img svg {
        background-color: hsl(35, 92%, 71%);
        fill: #000;
      }

      .layout__wrapper {
        margin: auto;
        width: 990px;
      }

      .section {
        padding: 40px;
        background-color: #ebebf5;
      }

      .section__title {
        color: #000000;
        font-size: 2.15rem;
        margin: 0;
        margin-bottom: 2.5rem;
        margin-top: 2.5rem;
      }

      .gallery {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .gallery--grid {
        display: grid;
        grid-auto-flow: row dense;
        grid-gap: 70px;
        grid-template-columns: repeat(3, 1fr);
        padding-left: 35px;
      }
      @media only screen and (max-width: 600px) {
        .gallery--grid {
          display: grid;
          grid-auto-flow: row dense;
          grid-gap: 70px;
          grid-template-columns: 1fr;
          padding-left: 35px;
        }
      }
      .gallery__item--highlight {
        grid-column: span 2;
      }

      .gallery__item:nth-child(2n) .card::before {
        background-image: var(--gradient-2);
      }

      .gallery__item:nth-child(3n) .card::before {
        background-image: var(--gradient-2);
      }
      
      `}</style>
    </React.Fragment>
  );
};

const IconLike = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" />
  </svg>
);

/* 
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
*/

export default Gallery;
