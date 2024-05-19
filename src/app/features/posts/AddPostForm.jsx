import { useState } from "react";
import { useDispatch } from "react-redux";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const changeTitle = (e) => setTitle(e.target.value);
  const changeContent = (e) => setContent(e.target.value);

  return (
    <section>
      <h2>Add new post</h2>
      <form action=''>
        <label htmlFor=''>Post Title</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={changeTitle}
        />
        <label htmlFor=''>Content</label>
        <input
          type='text'
          id='postContent'
          name='postContent'
          value={content}
          onChange={changeContent}
        />
        <button type='button'>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
