import Link from "../models/Link.js";

const postLink = async (req, res) => {
  const { target, slug, title } = req.body;

  const link = new Link({
    target,
    slug,
    title,
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
    res.json({
      success: false,
      message: "Link is not found",
    });
  }
  link.views =link.views +1
   await link.save()
res.redirect(link.target);
};

export { postLink, getSlugRedirect };
