import React from 'react';
import {
  BlogDetailDescription,
  BlogDetailFirstContainer,
  BlogDetailTitleMainHeader,
} from './BlogDetailStyles';
import Card from '../../../Card';
import CustomComponent from '../../../CustomComponent';

function BlogDetail({ blog, ...props }) {
  return (
    <BlogDetailFirstContainer id={blog.id} flexBasis={props.flexBasis}>
      <BlogDetailTitleMainHeader>{blog.title}</BlogDetailTitleMainHeader>
      <BlogDetailDescription>{blog.description}</BlogDetailDescription>
      {blog.content.length > 0 && (
        <>
          <CustomComponent>
            {blog.content.map((v) => (
              <Card
                subTitle={v.title}
                description={v.description}
                flexBasis={40}
              />
            ))}
          </CustomComponent>
        </>
      )}
    </BlogDetailFirstContainer>
  );
}

export default BlogDetail;
