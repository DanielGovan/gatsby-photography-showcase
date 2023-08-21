exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/prices/`,
    toPath: `/commissions/`,
  });
  createRedirect({
    fromPath: `/nightlife/`,
    toPath: `/experience/`,
  });
  createRedirect({
    fromPath: `/experience/`,
    toPath: `/retrospective/`,
  });
};
