import "./LinkCard.css";
import ViewsImg from "../../assets/views.png";
import LinkImg from "../../assets/link.png";
import copyImg from "../../assets/copy.png";
import LongurImg from "../../assets/link2.png"
import toast, { Toaster } from "react-hot-toast";

function LinkCard({ title, target, slug, views, createdAt, }) {
  const shortUrl = `${process.env.REACT_APP_API_URL}/${slug}`;


  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl).then(
      () => {
        toast.success("Copy to URL");
      },
      () => {
        toast.error("Failed to copy URL.");
      }
    );
  };

  return (
    <div className="link-card">
      <h1 className="card-title"> {title || "N/A"}</h1>

      <a href={shortUrl} target="_blank" className="short-url-link">
        <span className="link-key">
          <img src={ LinkImg} className="log-url-icon"/>
        </span>
        {shortUrl}
      </a>

      <br />

      <a href={target} target="_blank" className="target-url-link">
        <span className="link-key">
          <img src={LongurImg} className="long-link-icon" /> 
        </span>
        {target.substring(0, 50)}{target.length > 50 ? "..." : null}
      </a>

      <br />

      <span className="link-card-views">
        <img src={ViewsImg} className="views-icon" /> {views}
      </span>
      <br />
      <span className="link-card-views-text">
        {views > 0 ? ` people visited this link` : `share this link to view count`}
      </span>
      <p className="card-timestamps">{new Date(createdAt).toLocaleString()}</p>
      <img 
        src={copyImg} className="copy-img-icon" alt="Copy icon" 
        onClick={copyToClipboard} />
      <Toaster />
    </div>
  );
}

export default LinkCard;
