import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import { FaSearch } from "react-icons/fa/";
import { FaTag } from "react-icons/fa/";

import Item from "./Item";
import { Layout, Menu, Icon } from 'antd';

const { Content, Sider } = Layout;

const Blog = props => {
  const { posts, theme } = props;

  return (
    <React.Fragment>
      <Layout>
        <Content>
          <main className="main">
            <ul>
              {posts.map(post => {
                const {
                  node,
                  node: {
                    fields: { slug }
                  }
                } = post;
                console.log(post.node.fields.prefix)
                return <Item key={slug} post={node} theme={theme} />;
              })}
            </ul>
          </main>
        </Content>
        <Sider
          style={{ padding: '6% 0 0 0', position: 'absolute', right: '2%', top: '82%', lineHeight: '2' }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu className="sideMenu">
            <Menu.Item key="1" style={{ listStyleType: 'none' }}>
              <Link to="/category">
                <FaTag />
                <span>Category</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>

      {/* --- STYLES --- */}
      <style jsx>{`
        li.ant-menu-item {
          list-style-type: none;
        }
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        ul {
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            max-width: ${theme.text.maxWidth.desktop};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
