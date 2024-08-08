import Link from "../models/Link.js"
import User from "../models/User.js";



const postLink = async (req, res) => {
  const { target, slug, title, user } = req.body;

  const link = new Link({
    target,
    slug,
    title,
    user
  });
  const savedLink = await link.save();
  res.json({
    success: true,
    data: savedLink,
    message: `Link created successfull`,
  });
};

const getSlugRedirect = async (req, res) => {
  const { slug } = req.params;

  const link = await Link.findOne({ slug });

  if (!link) {
    return res.status(404).json({
      success: false,
      message: "Link is not found",
    });
  }
  link.views = link.views + 1;
  await link.save();
  res.redirect(link.target);
};

const getLinks = async (req, res) => {
try {  const { userId } = req.query;

    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "User Not Found",
        data: null,
      });
    }
    const allLinks = await Link.find({ user: userId }).sort({createdAt:-1});
    res.json({
      success: true,
      data:allLinks,
      message: "All Links fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Server error",
    });
  }
};






export { postLink, getSlugRedirect,getLinks,};
