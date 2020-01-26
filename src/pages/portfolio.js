/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { Card } from "antd";
import tree from "../images/png/professional-development-tree.png";
import Gallery from "../components/Gallery";

class IndexPage extends React.Component {
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
                            I'm a Full Stack Developer who loves to try new things. I am proficient in Python, JavaScript, HTML/CSS and with SQL and NoSQL databases (Mongo, Firebase) and can pick up new skills and technologies quickly.
                        </Hero>

                    )}
                </ThemeContext.Consumer>



                <div className="madSkillz">
                </div>
                <div className="skillBlurb">
                    <h2>
                        I love using code to solve problems
                    </h2>
                </div>
                <div className="projectsContainer">
                    <Gallery />
   
                </div>
                <Seo facebook={facebook} />

                <style jsx>{`
                    hr {
                        margin: 0;
                        border: 0;
                    }
                    .projectsContainer {
                        position: relative;
                        top: 90vh;
                    }
                    .skillBlurb {
                        position: relative;
                        right: 0;
                        float: right;
                        width: 30%;
                        margin: 20px;
                    }
                    .madSkillz {
                        height: 100vh;
                        width: 100vw;
                        background-image: url(${tree});
                        background-size: contain;
                        background-repeat: no-repeat;
                        position: absolute;
                        top: 68%;
                        left: -15%;
                    }
                `}</style>
            </React.Fragment >
        );
    }
}

IndexPage.propTypes = {
    data: PropTypes.object.isRequired
};

export default IndexPage;

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
