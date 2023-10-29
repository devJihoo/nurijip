import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const EachPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  useEffect(() => {
    getTitle();
  }, []);

  const getTitle = async () => {
    const post = await dbService.collection("posting").doc(id).get();
    const title = post.data().title;
    const article = post.data().article;
    setTitle(title);
    setArticle(article);
  };

  return (
    <div className="posting" style={{ maxWidth: "350px", margin: "30px auto" }}>
      <h2>{title}</h2>
      <p>{article}</p>
    </div>
  );
};

export default EachPost;
