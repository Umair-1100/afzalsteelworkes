import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
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

export default router;
