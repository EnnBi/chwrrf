import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { camp, data, heading } = location.state;

  const handleClick = (post) => {
    navigate("/blog", { state: { camp: post, data: data, heading: heading } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="pager-header"
        style={{
          backgroundImage: `url(https://admin.chwrrf.org/api/program/image/${encodeURIComponent(
            camp.photoPath
          )})`,
        }}
        id="blog"
      >
        <div className="container">
          <div className="page-content">
            <h2>{camp.title}</h2>

            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Blog</li>
            </ol>
          </div>
        </div>
      </div>
      <section className="blog-section bg-grey padding">
        <div className="container">
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-lg-9 sm-padding">
              <div className="blog-items single-post row">
                <h2>{camp.title}</h2>
                <div className="meta-info">
                  <span>
                    {/* <i className="ti-user"></i> Written By{" "}
                    <Link href="#">David Cameroon</Link> */}
                  </span>
                  <span>
                    {/* <i className="ti-bookmark"></i> Tagged As{" "}
                    <Link href="#">Wordpress Development</Link> */}
                  </span>
                </div>
                <p>{camp.description}</p>
              </div>
            </div>
            <div className="col-lg-3 sm-padding">
              <div className="sidebar-wrap">
                <div className="sidebar-widget m-80">
                  <h4>{heading}</h4>
                  <ul className="recent-posts">
                    {data?.map((post, index) => (
                      <li key={index}>
                        <img
                          src={`https://admin.chwrrf.org/api/program/image/${encodeURIComponent(
                            post.photoPath
                          )}`}
                          alt="blog post"
                        />
                        <div>
                          <div onClick={() => handleClick(post)}>
                            <h4>
                              <Link to={"/blog"}>{post.title}</Link>
                            </h4>
                          </div>
                          <span className="date">
                            <i className="fa fa-clock-o"></i>{" "}
                            {post.date.substring(0, 10)}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Blog;
