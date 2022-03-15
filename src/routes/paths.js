// ----------------------------------------------------------------------

function path() {
  return `${root}${sublink}`;
}

const ROOTS_HOMEPAGE = "/";
const ROOT_TENANTS = "/tenants";
const ROOTS_ENVIRONMENTS = "/environment";

// ----------------------------------------------------------------------

export const PATH_HOMEPAGE = {
  root: ROOTS_HOMEPAGE,
  allPosts: {
    app: path(ROOTS_HOMEPAGE, "/view"),
    add: path(ROOTS_HOMEPAGE, "/add"),
  },
  addPost: {
    view: path(ROOT_TENANTS, "/view/:id"),
    add: path(ROOT_TENANTS, "/add/:id"),
  },
  environemts: {
    view: path(ROOTS_ENVIRONMENTS, "/view/:id/:tenantId"),
    add: path(ROOTS_ENVIRONMENTS, "/add/:id/:tenantId"),
  },
};
