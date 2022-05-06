module.exports = (targets) => {
  targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
    flags[targets.name] = { esModules: true, cssModules: true, graphqlQueries: true };
  });

  targets.of("@magento/venia-ui").routes.tap((routes) => {
    routes.push({
      name: "Live",
      pattern: "/live",
      path: require.resolve("../components/Page/index.js")
    });

    return routes;
  });
};
