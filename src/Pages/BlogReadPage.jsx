import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function BlogReadPage() {
  const url = useLocation();
  console.log(url.pathname.split("/")[2]); // for the test
  const id = url.pathname.split("/")[2];

  console.log(id); // for the test

  const [singleBlog, setSingleBlog] = useState(null);
  const fetchSingleBlog = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/get-single-blog/${id}`
      );
      console.log(response.data.data);
      setSingleBlog(response.data.data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  console.log(singleBlog);

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  return (
    <div>
   { singleBlog &&  <div>
        <p>{singleBlog.title}</p>
        <p>{singleBlog.description}</p>
        <p>{singleBlog.authorName}</p>
        <p>{singleBlog.timeToRead }</p>
      </div>}
    </div>
  );
}
