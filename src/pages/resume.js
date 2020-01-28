/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeContext } from "../layouts";
import Hero from "../components/Hero";
import Seo from "../components/Seo";

import resume from "../../content/TFarris_Resume_Jan2019Ex.pdf";
import Pdf from "../components/Pdf"

class Resume extends React.Component {
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
                            Scan through my resume below or click <a href={resume}>here</a> to open it in a new window or download it.
                        </Hero>

                    )}
                </ThemeContext.Consumer>

                <div style={{width: '50%', margin: 'auto'}}>
                    <Pdf></Pdf>
                </div>



                <Seo facebook={facebook} />

                <style jsx>{`
                    hr {
                        margin: 0;
                        border: 0;
                    }
                `}</style>
            </React.Fragment >
        );
    }
}


export default Resume;

//eslint-disable-next-line no-undef
export const query = graphql`
  query ResumeQuery {
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
