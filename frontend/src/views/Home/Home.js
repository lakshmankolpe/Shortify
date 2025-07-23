import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [linkData, setLinkData] = useState({
    title: "",
    target: "",
    slug: "",
    user: null,
  });

  const ShortenURL = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/link`,
        linkData
      );
      if (response.data.success) {
        toast.success("Link Shortened Successfully");

        setLinkData({
          title: "",
          target: "",
          slug: "",
          user: null,
        });
        setTimeout(() => {
          window.location.href = "/showlinks";
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(`Failed to shorten link: ${error.message}`);
    }
  };
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setLinkData({ ...linkData, user: currentUser._id });
    } else {
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
  }, []);

  const [links, setLinks] = useState([]);

  return (
    <>
      <Navbar />
      <p className="app-paragraph">
        Save time and simplify sharing by converting long URLs into short,
        easy-to-share links effortlessly.
      </p>




      <div className="home-main-container">
        <div className="home-information-container">
          <h2>Simple and fast URL shortener!</h2>
          <p className="information-text">
            ShortURL allows to shorten long links from Instagram, Facebook,
            YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and any domain
            name. Just paste the long URL and click the Shorten URL button. On
            the next page, copy the shortened URL and share it on sites, chat
            and emails. After shortening the URL, check how many clicks it
            received.
          </p>
          <h2>Shorten, share and track</h2>
          <p className="information-text">Your shortened URLs can be used in publications,
             documents, advertisements, blogs, forums, instant messages, 
             and other locations. Track statistics for your business and projects by monitoring 
             the number of hits from your URL with our click counter.</p>
        </div>






        <div className="home-form-container">
          <div className="main-container">
            <h1 className="app-title">🔗 Shorten Your Links In Seconds</h1>

            <form className="link-form">
              <input
                type="text"
                placeholder="Title"
                value={linkData.title}
                onChange={(e) => {
                  setLinkData({
                    ...linkData,
                    title: e.target.value,
                  });
                }}
                className="link-input"
              />

              <input
                type="text"
                placeholder="Target URL"
                value={linkData.target}
                onChange={(e) => {
                  setLinkData({
                    ...linkData,
                    target: e.target.value,
                  });
                }}
                className="link-input"
              />

              <input
                type="text"
                placeholder="Slug"
                value={linkData.slug}
                onChange={(e) => {
                  setLinkData({
                    ...linkData,
                    slug: e.target.value,
                  });
                }}
                className="link-input"
              />

              <button
                type="button"
                className="link-button"
                onClick={ShortenURL}
              >
                Generate Link ➡️
              </button>
            </form>

            <Toaster />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
