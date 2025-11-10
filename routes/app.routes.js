import express from "express";
import WeldingBlog from "../model/weldingBlog.js";
const router = express.Router();

// Home page – fetch blogs from DB
router.get("/", async (req, res) => {
  try {
    const blogs = await WeldingBlog.find().sort({ createdAt: -1 }); // newest first
    res.render("index", { title: "Home", blogs }); // <- yahan blogs pass ho raha hai
  } catch (err) {
    console.error(err);
    res.render("index", { title: "Home", blogs: [] }); // agar DB fail ho jaye
  }
});


router.get("/about", (req, res) => {
  res.render("about" , { title: "About" });
});

router.get("/services", (req, res) => {
  res.render("services" , { title: "Services" });
});

router.get("/gallery", (req, res) => {
  res.render("gallery" , { title: "Gallery" });
});

router.get("/contact", (req, res) => {
  res.render("contact" , { title: "Contact" });
});

export const appRouter = router;
