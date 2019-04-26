module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "goodlifeondemand" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/main.scss";`
      }
    }
  }
};