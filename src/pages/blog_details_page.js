import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogDetail from '../Components/Pages/Blog/Details';
import { blogs } from '../data';
import PageMetaData from '../Components/PageMetaData';
import PageHeading from '../Components/Heading';

function BlogDetailsPage() {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  const fetchBlog = useCallback(() => {
    setIsLoading(true);
    setBlog(null);
    for (let i = 0; i < blogs.length; i++) {
      if (blogs[i].id === Number(id)) {
        setBlog(blogs[i]);
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  return (
    <>
      {isLoading && <div>Please wait</div>}
      {blog && <PageMetaData title={blog.title} />}
      {blog && <PageHeading title={blog.title} secondary={true} />}
      {blog && <BlogDetail blog={blog} />}
    </>
  );
}

export default BlogDetailsPage;
