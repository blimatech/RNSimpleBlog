import posts from "../content";
export const getAllPosts = async () => {
  return Object.values(posts);
};

export const getPost = (slug: string) => {
  return posts[slug];
};
