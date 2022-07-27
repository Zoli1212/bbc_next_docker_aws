import React from 'react'

interface props {
    post: {
        title: string,
        excerpt: string
    }
}

const PostCard : React.FC<props> = ({ post}) => {
  return (
    <div> {post.title} {post.excerpt}</div>
  )
}

export default PostCard
