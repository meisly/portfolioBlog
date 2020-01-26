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
          <h3 className="card__title">{item.firstName + " " + item.lastName}</h3>
          <p className="card__subtitle">{item.title}</p>
          <p className="card__text">{item.biography}</p>
          <div className="card__element card__element--user-img">
            {item.avatar && item.avatar.url ? (
              <img src={item.avatar.url} alt="" />
            ) : (
              <DefaultAvatar />
            )}
          </div>
        </div>
        <button className="button button--primary github" type="button">
          Github
        </button>
        <button className="button button--primary demo" type="button">
          Demo
        </button>
        <button className="button button--secondary like">
          <GoHome />
          <span className="button-text">Like</span>
        </button>
      </div>
      {/* --- STYLES --- */}
      <style jsx global>{`
        :root {
          --font-family-primary: Nunito, sans-serif;
          --gradient-1: linear-gradient(135deg, #ffd3a5 10%, #fd6585 100%);
          /*   --gradient-2: linear-gradient(214deg, #8EE2F1 0%, #CDFEDF 55%); */
          --gradient-2: linear-gradient(315deg, #8ec5fc 0%, #e0c3fc 100%);
          --gradient-3: linear-gradient(210deg, #74ebd5 0%, #f7e8ad 100%);
        }

        * {
          box-sizing: border-box;
        }

        body {
          background-color: hsl(50, 12%, 98%);
          font-family: var(--font-family-primary);
          font-size: 16px;
          line-height: 1.425;
        }

        .layout__wrapper {
          margin: auto;
          width: 990px;
        }

        .section {
          padding: 40px;
        }

        .section__title {
          color: #000000;
          font-size: 2.15rem;
          margin: 0;
          margin-bottom: 2.5rem;
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

        .gallery__item--highlight {
          grid-column: span 2;
        }

        .gallery__item:nth-child(2n) .card::before {
          background-image: var(--gradient-2);
        }

        .gallery__item:nth-child(3n) .card::before {
          background-image: var(--gradient-3);
        }

        .card {
          position: relative;
        }

        .card::before {
          background-image: var(--gradient-1);
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
          padding-top: 75px;
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