import { Post } from "../types/post";

const posts: Record<string, Post> = {
  post01: require("./post01").default,
  post02: require("./post02").default,
};

export default posts;
