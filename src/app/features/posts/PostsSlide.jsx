import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsSlide = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article
      key={post.id}
      style={{ padding: "12px", border: "2px solid white", borderRadius: '20px'}}
    >
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <div>
      <h2>Posts</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {renderedPosts}
      </div>
    </div>
  );
};

export default PostsSlide;
