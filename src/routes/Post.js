import { dbService } from "fbase";
import React, { useState } from "react";

const Post = ({ userObject }) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const idDate = Date.now();
    const postDate = new Date();
    await dbService.collection("posting").doc(idDate.toString()).set({
      title: title,
      article: article,
      creratorId: userObject.uid,
      atCrerated: postDate,
    });
    setTitle("");
    setArticle("");
    alert("완료!");
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "title") {
      setTitle(value);
    } else if (name === "article") {
      setArticle(value);
    }
  };

  return (
    <div className="padding">
      <form onSubmit={onSubmit}>
        <input
          className="input postInput"
          name="title"
          value={title}
          onChange={onChange}
          type="text"
          placeholder="Title"
        />
        <br />
        <input
          className="input postInput"
          name="article"
          value={article}
          onChange={onChange}
          type="text"
          placeholder="article"
        />
        <br />
        <input className="button" type="submit" value="post" />
      </form>
    </div>
  );
};

export default Post;
