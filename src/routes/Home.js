import { dbService } from "fbase";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [titles, setTitles] = useState([]);

  const getPosting = async () => {
    const dbTitles = await dbService.collection("posting").get();
    dbTitles.forEach((document) => {
      const postingObject = {
        ...document.data(),
        id: document.id,
      };
      setTitles((prev) => [postingObject, ...prev]);
    });
  };

  useEffect(() => {
    getPosting();
  }, []);

  return (
    <div className="padding home">
      <div className="postButton" style={{ marginBottom: "20px" }}>
        <Link to="/post" class="button">
          게시물 작성하기
        </Link>
      </div>
      <div>
        {titles.map((title) => (
          <div className="posting" key={title.id}>
            <Link to={`/board/${title.id}`}>
              <h4>{title.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
