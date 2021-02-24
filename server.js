const express = require("express");
const path = require("path");
const app = express();

const configs = {
  path: "dist",
  forceHTTPS: false,
  port: process.env.PORT || 3000,
};

if (configs.forceHTTPS)
  app.use((req, res, next) => {
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
      res.redirect(`https://${req.headers.host}${req.url}`);
    else next();
  });

app.use(express.static(configs.path));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, configs.path, "index.html"));
});

app.listen(configs.port, () => {
  console.log(`Listening on ${configs.port}!`);
});
