/* Handle Canvas error: Gatsby is a ssr(server side framework), meaning that all the build process is done in node. 
With that won't have access to certain apis, like canvas. And it generates that error. 
With this small change once the build enters the build-html stage, the package in question, 
namely canvas will be "silenced" and returns a empty module. This is due to the fact that this 
package will try to use apis that are not in the node side like window for instance, but will 
cause no loss in functionality. */
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
      devtool: "eval-source-map",
    })
  }
}
