import express from "express";
import weldingBlog from "../model/weldingBlog.js";
import multer from "multer";
import path from "path";

const router = express.Router();

// Multer setup for storing files locally
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads"); // folder jahan images save hongi
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });


// Admin dashboard / add blog form
router.get("/add-blog", (req, res) => {
  res.render("admin/addBlog", { title: "Add Blog", success: req.query.success });
});



// Handle blog submission with image upload
router.post("/add-blog", upload.single("imageUrl"), async (req, res) => {
  try {
    const { title, excerpt, content, category, author, slug } = req.body;
    const imageUrl = req.file ? "/uploads/" + req.file.filename : "";

    const newBlog = new weldingBlog({
      title,
      excerpt,
      content,
      imageUrl,
      category,
      author,
      slug,
    });

    await newBlog.save();
    // console.log("Saved blog:", newBlog);
    res.redirect("/admin/add-blog?success=1");
  } catch (err) {
    console.error(err);
    res.render("admin/addBlog", { title: "Add Blog", error: "Something went wrong!" });
  }
});

export const adminRouter = router;
