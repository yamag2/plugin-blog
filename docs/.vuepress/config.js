module.exports = {
  title: "Sample VuePress Blog",
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "Index",
            dirname: "_posts",
            path: "/"
          }
        ]
      }
    ]
  ]
};