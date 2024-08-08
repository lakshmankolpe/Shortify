import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const [linkData, setLinkData] = useState({
    title: "",
    target: "",
    slug: "",
    user:null,
  });

  const ShortenURL = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/link`,linkData 
      );
      if (response.data.success) {
        toast.success("Link Shortened Successfully");

        setLinkData({
          title: "",
          target: "",
          slug: "",
          user:null
  
        });
        setTimeout(()=>{
          window.location.href= "/showlinks"
        })
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(`Failed to shorten link: ${error.message}`);
    }
  };
  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
    setLinkData({...linkData,user:currentUser._id})
    }
    else{
    setTimeout(()=>{
      window.location.href="/login"
    },1000)}
  },[])

  return (<>
    <Navbar/>
    <p className="app-paragraph">
    Save time and simplify sharing by converting long URLs into short, easy-to-share links effortlessly.</p>
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

        <button type="button" className="link-button" onClick={ShortenURL}>
          Generate Link
        </button>
      </form>
      <Toaster />
    </div>
    </>);
}

export default Home;
