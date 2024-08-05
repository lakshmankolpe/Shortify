import { useState } from "react";
import "./Home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const [linkData, setLinkData] = useState({
    title: "",
    target: "",
    slug: "",
  });
  const ShortenURL = async () => {
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
      });
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="main-container">
      <h1 className="app-title">🔗Short in Your Links In Second</h1>
      <p className="app-paragraph">Don't waste time type in long url and create shorte url. </p>

      <form className="link-form">
        <input
          type="text"
          placeholder=" Title"
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
          placeholder=" Target URL"
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
          placeholder=" Slug"
          value={linkData.slug}
          onChange={(e) => {
            setLinkData({
              ...linkData,
              slug: e.target.value,
            });
          }}
          className="link-input"
        />

        <button type="button" className="link-button" onClick={ShortenURL}>
          Generate
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default Home;
