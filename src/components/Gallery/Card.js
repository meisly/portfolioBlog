/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { GoHome } from "react-icons/go/";
import DefaultAvatar from "./DefaultAvatar";


const Card = props => {
  const { item } = props;
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__block card__block--main">
          <h3 className="card__title">{item.title}</h3>
          <p className="card__text">{item.description}</p>
          <div className="card__element card__element--user-img"
          style={{
              backgroundColor: '#fff',
              border: '0px solid #000',
              borderRadius: '50%',
              left: '10px',
              position: 'absolute',
              top: '-32px',
              width: '65px',
            }}>
            {/* {item.avatar && item.avatar.url ? (
              <img src={item.avatar.url} alt="" style={{
                backgroundColor: 'hsl(35, 92%, 71%)',
                fill: '#000'
              }} />
            ) : (
                ''
              )} */}
          </div>
        </div>
        <button className="button button--primary github" type="button">
          <a href={item.github}>Github</a>
        </button>
        {item.demo? (<button className="button button--primary demo" type="button">
          <a href={item.demo}>Demo</a>
        </button>)
        :
        ''}
        
        <button className="button button--secondary like">
          <a href="top">{GoHome}</a>
          <span className="button-text">Like</span>
        </button>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        :root {
          --font-family-primary: Nunito, sans-serif;
          --gradient-1:  linear-gradient(315deg,#bbf0fc 0%,#fdf4f7 100%);
          /*   --gradient-2: linear-gradient(214deg, #8EE2F1 0%, #CDFEDF 55%); */
          --gradient-2: linear-gradient(315deg,#bbf0fc 0%,#fdf4f7 100%);
          --gradient-3: linear-gradient(315deg,#bbf0fc 0%,#fdf4f7 100%);
        }
        .card {
          position: relative;
        }

        .card::before {
          background-image: var(--gradient-2);
          border-radius: 15px;
          box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.1);
          bottom: 70px;
          content: "";
          left: -35px;
          position: absolute;
          right: 35px;
          top: 0;
        }

        .card {
          padding-bottom: 2.75rem;
          padding-top: 55px;
        }

        .card__block--main {
          background-color: #fff;
          border-radius: 15px;
          box-shadow: 2px 5px 25px rgba(0, 0, 0, 0.15);
          min-height: 280px;
          padding: 20px;
          padding-top: 50px;
          position: relative;
          z-index: 2;
        }

        .card__element--user-img img,
        .card__element--user-img svg {
          --size: 65px;

          background-color: #fff;
          border: 0px solid #000;
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

        .card__title {
          font-size: 1.85rem;
          font-weight: bold;
          line-height: 1.1;
          margin: 0;
        }

        .card__subtitle {
          color: hsl(210, 5%, 41%);
          font-size: 1rem;
          margin-top: 0.33rem;
        }

        .card__text {
          margin-top: 0.66rem;
        }

        .github {
          bottom: 0;
          padding-top: 1.5rem !important /* @TODO temp !!!*/;
          position: absolute;
          right: 1.5rem;
          transition: transform 0.2s;
        }

        .github:hover {
          transform: translateY(0.25rem);
        }

        .demo {
          bottom: 0;
          padding-top: 1.5rem !important /* @TODO temp !!!*/;
          position: absolute;
          left: 7rem;
          transition: transform 0.2s;
        }

        .demo:hover {
          transform: translateY(0.25rem);
        }

        @media only screen and (max-width: 600px) {
          .demo {
            left: 4rem;
          }
          .github {
            right: 1rem;
          }
        }
        @media only screen and (max-width: 1330px) {
          .demo {
            left: .5rem;
          }
          .github {
            right: 1.5rem;
          }
        }
        .button {
          background-color: #000000;
          border: 1px solid #000000;
          box-shadow: 0 3px 0 #000000;
          border-radius: 10px;
          cursor: pointer;
          color: #ffffff;
          font-family: var(--font-family-primary);
          font-size: 1rem;
          font-weight: bold;
          letter-spacing: 0.15rem;
          padding: 0.75rem 1.5rem;
        }

        .button--primary {
          background-color: hsl(210, 5%, 41%);
          border-color: hsl(210, 5%, 36%);
          box-shadow: 0 5px 0 hsl(210, 5%, 20%);
        }

        .button--primary:hover {
          background-color: hsl(210, 5%, 51%);
          border-color: hsl(210, 5%, 41%);
        }

        .like {
          right: 35px;
          position: absolute;
          top: 0;
        }

        .like {
          background-color: transparent;
          border-color: transparent;
          box-shadow: none;
          padding: 0.75rem;
        }

        .like .button-text {
          display: none;
        }

        .like svg {
          fill: #fff;
          height: 25px;
          width: 25px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Card;