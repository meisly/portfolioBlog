/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeContext } from "../layouts";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { Card } from "antd";
import background1 from "../images/png/hero-background.png";
import tree from "../images/png/professional-development-tree.png";
import bluebg1 from "../images/jpg/option4.jpg";
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
                },
                aboutme: {
                    html: aboutMeHTML
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
                            I used to be biologist but now I'm interested in a different kind of code.  Check out my <Link to="/blogPage/">blog</Link> or hop to my <a href="#portfolio">portfolio </a>to see some of the projects I've worked on along the way.
                        </Hero>

                    )}
                </ThemeContext.Consumer>
                <hr ref={this.separator} style={{ position: 'relative', top: '-130px' }} />

                <ThemeContext.Consumer>
                    {theme => (
                        <React.Fragment theme={theme}>

                            <div className="skillBlurb">
                                <section className="skillBlurb_text">
                                    <h2>
                                        Always Learning
                                    </h2>
                                    <hr className='divider' />
                                    <p>
                                        I'm a full stack developer who loves building things with code. Most of my experience is with the MERN/SERN stack but I love trying new things and can pick up new skills and technologies quickly.
                                    </p>
                                    <p>
                                        <strong>Languages:</strong> JavaScript, CSS, HTML, Python, C#
                                    </p>
                                    <p>
                                        <strong>Libraries/Frameworks: </strong>jQuery, Express, Bootstrap, Materialize, React, ASP.NET
                                    </p>
                                    <p>
                                        <strong>Technologies: </strong>REST API, Node.js, MySQL, Mongo, Linux
                                    </p>
                                </section>
                            </div>
                            <div className="madSkillz">
                            </div>
                            <div style={{height: '50px'}}></div>
                            <Gallery className="projectsContainer" theme={theme} max={3} />
                            <h2 style={{ margin: '10px auto 30px auto', width: '50%' }}>If you want to check out more of my projects head to my <Link to='/portfolio/'>portfolio page</Link>...</h2>
                            <hr style={{margin: '5vh', borderColor: 'white', borderStyle: 'solid'}}></hr>
                            <div className='next'>
                                <div className='nextChild'>
                                    <h2>More About Me</h2>
                                    <div className="nextChildInner me" dangerouslySetInnerHTML={{ __html: aboutMeHTML }}></div>
                                </div>
                                <div className='nextChild'>
                                    <h2>Things I Love</h2>
                                    <ul className="nextChildInner">
                                        <li className="list-group-item">
                                            <h4>
                                                Coffee
                                            </h4>
                                            <p>
                                                Especially Nitro Cold Brew from my favorite coffee shop Antidote
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4>
                                                Science Fiction
                                            </h4>
                                            <p>
                                                My grandfather was a huge science fiction fan and I grew up reading his books.  He had great taste although I do tend to prefer modern scifi these days.
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4>
                                                Octavia Butler
                                            </h4>
                                            <p>
                                                Best science fiction writer of my lifetime and probably theirs.
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4>
                                                My algorithms class
                                            </h4>
                                            It routinely blows my mind.  I love it!
                                        </li>
                                        <li className="list-group-item">
                                            <h4>
                                                My pets
                                            </h4>
                                            <p>
                                                I am a dog person but I ended up with cats and I love them even if they are all little a-holes.
                                              </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='nextChild'>
                                    <h2>Things I Hate</h2>
                                    <ul className="nextChildInner">
                                        <li className="list-group-item">
                                            <h4>
                                                Traffic!
                                            </h4>
                                            <p>
                                                Houston has the worst traffic and driving is necessary way too often.
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4>
                                                Build fails
                                            </h4>
                                            <p>
                                                You think things are going well. Stuff is building, success messages are popping up and then boom it fails.
                                            </p>
                                            <p>
                                                If you're lucky it tells you why. But if you're trying to get Gatsby to build on your janky linux distro....it fails silently and gee isn't that fun.
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <h4>
                                                Bad coffee
                                            </h4>
                                            <p>
                                                Why are most restaurants so bad at making coffee?  The best you can hope for is mediocre.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>

                    )}

                </ThemeContext.Consumer>

                <Seo facebook={facebook} />

                <style jsx>{`
                    .nextChildInner li:first-child {
                        border-radius: 15px 15px 0 0;
                    }
                    .nextChildInner li:last-child {
                        border-radius: 0 0 15px 15px;
                    }
                    .next {
                        min-height: 50vh;
                        background-image: url(${background1});
                        display: grid;
                        grid-auto-flow: row dense;
                        grid-gap: 20px;
                        grid-template-columns: 40% 1fr 1fr;
                        padding-left: 35px;
                        color: white;
                        padding-top: 50px;
                        font-family: 'Open Sans', sans-serif;
                        }
                    .nextChild {
                        color: black;
                        border-radius: 15px;
                        margin: 5px;
                        padding: 2rem;
                        background-color: #e6e9f0;  
                        background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
                    }
                    .nextChild h2 {
                        text-align: center;
                        margin: 0 0 10px 0;
                        color: #ffffffe8;
                    }
                    .nextChildInner {
                        list-style: none;
                        padding: 10px;
                    }
                    .nextChildInner.me {
                        padding: 20px;
                        margin-bottom: -1px;
                        margin-top: 20px;
                        background-color: #fff;
                        border: 1px solid rgba(0,0,0,.125);
                        border-radius: 15px;
                    }
                    .list-group-item {
                        position: relative;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-flex-flow: row wrap;
                        -ms-flex-flow: row wrap;
                        flex-flow: row wrap;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                        padding: .75rem 1.25rem;
                        margin-bottom: -1px;
                        background-color: #fff;
                        border: 1px solid rgba(0,0,0,.125);
                    }
                    .list-group-item h4 {
                        text-align: center;
                    }
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
                        height: 85vh;
                        margin: auto;
                        background-image: url(${bluebg1});
                        background-size: cover;
                        padding: 2rem;
                        }
                    .skillBlurb_text {
                        border-radius: 10px;
                        width: 30%;
                        float: right;
                        margin: 20px;
                        margin-right: 10px;
                        // background: rgb(203, 195, 252);
                        background: rgba(88, 89, 91, 0.79);
                        color: white;
                        border-radius: 5px;
                        padding: 3rem;
                        min-height: 40%;
                        padding-top: 3rem;
                        padding-bottom: 3rem;
                        padding-right: 2rem;
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
                        width: 95vw;
                        background-image: url(${tree});
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: top left -105%;
                        background-position: -24vw 0vh;
                        }
                    @media only screen and (max-width: 780px) {
                        .next {
                            grid-template-columns: 1fr;
                        }
                        .skillBlurb {
                            height: auto;
                            padding: 0.6rem;
                        }
                        .skillBlurb_text {
                            width: 90%;
                            background: rgba(88, 89, 91, 0.79);
                            padding: 1rem;
                            min-height: 50%;
                            font-size: large;
                            
                        }
                        .madSkillz {
                            position: absolute;
                            top: 85%;
                            height: 100vh;
                            width: 100vw;
                            background-image: none;
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-position: top left -107px;
                        }
                    }

                    @media only screen and (min-width: 1366px) {
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
                            border-radius: 10px;
                            width: 25%;
                            float: right;
                            margin: 20px;
                            margin-right: 10px;
                            // background: rgb(203, 195, 252);
                            background: rgba(88, 89, 91, 0.79);
                            color: white;
                            border-radius: 5px;
                            padding: 3rem;
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
                            width: 95vw;
                            background-image: url(${tree});
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-position: -20vw 27px;
                            }
                    }
                    @media only screen and (min-width: 1366px) and (max-height: 790px) {
                        .skillBlurb_text {
                            width: 34%;
                        }
                    }
                    @media only screen and (min-width: 1280px) and (min-height: 800px) {
                        .madSkillz {
                            background-position: -24vw 3vh;
                        }
                    }
                    @media only screen and (min-width: 1900px) {
                        .next {
                            grid-template-columns: 1fr;
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
                            border-radius: 10px;
                            width: 30%;
                            float: right;
                            margin: 20px;
                            margin-top: 100px;
                            // background: rgb(203, 195, 252);
                            background: rgba(88, 89, 91, 0.79);
                            color: white;
                            border-radius: 5px;
                            padding: 2rem;
                            min-height: 40%;
                            padding-top: 3rem;
                            padding-bottom: 3rem;
                            font-size: xx-large;
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
                            background-position: -470px 27px;
                            }
                        
                    }
                    @media only screen and (min-width: 2048px) and (min-height: 1440px) {
                        .madSkillz {
                            background-position: -25vw 15vh;
                        }
                        .skillBlurb_text {
                            width: 23%;
                            font-size: xx-large;
                        }
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
query IndexQuery {
    aboutme: markdownRemark(fileAbsolutePath: { regex: "/aboutme/"}) {
      id
      html
    }
    site {
    siteMetadata {
    facebook {
    appId
        }
    }
    }
      bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/"
      }
  }) {
        resize(width: 1200, quality: 90, cropFocus: CENTER) {
          src
      }
  }
      bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/"
      }
  }) {
        resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
          src
      }
  }
      bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/"
      }
  }) {
        resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
          src
      }
  }
  }`;

            //hero-background
