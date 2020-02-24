/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeContext } from "../layouts";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { Card } from "antd";
import tree from "../images/png/professional-development-tree.png";
import longTree from "../images/png/professional-development-tree-long.png";
import bluebg1 from "../images/jpg/option4.jpg";
import Gallery from "../components/Gallery";

class Portfolio extends React.Component {
    separator = React.createRef();

    scrollToContent = e => {
        this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
    };

    render() {
        const {
            data: {
                bgDesktop: {
                    resize: { src: desktop }
                },
                bgTablet: {
                    resize: { src: tablet }
                },
                bgMobile: {
                    resize: { src: mobile }
                },
                site: {
                    siteMetadata: { facebook }
                }
            }
        } = this.props;
        const { Meta } = Card;
        const backgrounds = {
            desktop,
            tablet,
            mobile
        };

        return (
            <React.Fragment>
                <ThemeContext.Consumer>
                    {theme => (
                        <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme}>
                            Here are some projects that I've worked on
                        </Hero>

                    )}
                </ThemeContext.Consumer>
                <hr ref={this.separator} style={{ position: 'relative', top: '-130px' }} />

                <ThemeContext.Consumer>
                    {theme => (
                        <React.Fragment theme={theme}>
                            <Gallery theme={theme} max={100} />
                        </React.Fragment>

                    )}

                </ThemeContext.Consumer>

                <Seo facebook={facebook} />

                <style jsx>{`
                    hr {
                        margin: 0;
                        border: 0;
                    }
                    .projectsContainer {
                        position: relative;
                        top: 90vh;
                        max-width: 100vw;
                    }
                    .skillBlurb {
                        position: relative;
                        right: 0;
                        float: right;
                        width: 100vw;
                        height: 90vh;
                        margin: auto;
                        background-image: url(${bluebg1});
                        background-size: cover;
                        padding: 2rem;
                    }
                    .skillBlurb_text {
                        width: 30%;
                        float: right;
                        margin: 20px;
                        margin-top: 5%;
                        background: rgb(203, 195, 252);
                        color: white;
                        border-radius: 5px;
                        padding: 2rem;
                        min-height: 40%;
                        padding-top: 3rem;
                        padding-bottom: 3rem;
                        font-size: larger;
                        box-shadow: 3px 4px 5px 0px #9ac7ce;

                    }
                    .skillBlurb h2 {
                        text-align: center;
                    }
                    .divider {
                        margin: 3px auto 15px auto;
                        border: 2px solid white;
                        border-radius: 2px;
                        width: 40%;
                    }
                    .madSkillz {
                        position: absolute;
                        top: 70%;
                        height: 100vh;
                        width: 100vw;
                        background-image: url(${tree});
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: top left -105%;
                    }
                    @media only screen and (max-width: 600px) {
                        .skillBlurb {
                            height: 51vh;
                            padding: 0.6rem;
                        }
                        .skillBlurb_text {
                            width: 35%;
                            float: right;
                            background: rgba(88,89,91,.54);
                            color: white;
                            border-radius: 5px;
                            padding: 1rem;
                            min-height: 50%;
                            font-size: small;
                        }
                        .madSkillz {
                            position: absolute;
                            top: 85%;
                            height: 100vh;
                            width: 100vw;
                            background-image: url(${longTree});
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-position: top left -107px;
                        }
                    }
                `}</style>
            </React.Fragment >
        );
    }
}

Portfolio.propTypes = {
    data: PropTypes.object.isRequired
};

export default Portfolio;

//eslint-disable-next-line no-undef
export const query = graphql`
  query PortfolioQuery {
                                site {
                                siteMetadata {
                                facebook {
                                appId
                            }
                            }
                          }
    bgDesktop: imageSharp(fluid: {originalName: {regex: "/hero-background/" } }) {
                                resize(width: 1200, quality: 90, cropFocus: CENTER) {
                                src
                            }
                            }
    bgTablet: imageSharp(fluid: {originalName: {regex: "/hero-background/" } }) {
                                resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
                                src
                            }
                            }
    bgMobile: imageSharp(fluid: {originalName: {regex: "/hero-background/" } }) {
                                resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
                                src
                            }
                            }
                          }
                        `;

                        //hero-background
