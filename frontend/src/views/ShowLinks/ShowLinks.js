import axios from "axios";
import "./ShowLinks.css";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LinkCard from "../../components/LinkCard/LinkCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ShowLinks() {
  const [links, setLinks] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser)
    } else {
      window.location.href = "/login";
    }
  }, []);

  const fetchAllLinks = async (userId) => {
    console.log(userId);
    
    try {
      if(!userId){
        return
      }
      toast.loading('user links loading...')
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/linksbyuser?userId=${userId}`
      );
      toast.dismiss()
      setLinks(response.data.data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(`Failed to fetch links: ${error.message}`);
    }
  };

  useEffect(()=>{
    fetchAllLinks(user._id);
    }, [user])

  return (<>
    <Navbar/>
    <div>
      <h1 className="showalllinks-title">🔗My  All Links</h1>
      <div className="showall-link-container">
        {links?.map((link, i) => {
          const { title, target, slug, views, createdAt } = link;

          return (
            <LinkCard
              key={i}
              title={title}
              target={target}
              slug={slug}
              views={views}
              createdAt={createdAt}
              fetchAllLinks= {fetchAllLinks}
            />
          );
        })}
      </div>
      <Toaster />
    </div>
    <Footer/>
    </>);
}

export default ShowLinks;
