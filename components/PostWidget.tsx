import React, { useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts} from '../services'


interface props{
  categories?: string | undefined
  slug?: string  | undefined
}
interface initalState {
    title: string,
    slug: string,
    excerpt: string,
    createdAt: string,
    featuredImage?: {
      url: string
    },
    author: {
      bio: string,
      name: string,
      id: string,
      photo: { url: string }
    }
  }[] 

const PostWidget: React.FC<props> = ({ categories = undefined, slug = undefined}) => {

  const [relatedPosts, setRelatedPosts] = useState([ {} as initalState]) 

  useEffect(() => {
    if(slug){

      categories = categories ?? ''

      getSimilarPosts(categories, slug).then((result: any) => setRelatedPosts(result))
      
    }else{
      getRecentPosts().then((result: any) => setRelatedPosts(result))

    }
  
 
  }, [slug])

  console.log(relatedPosts)
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
    {relatedPosts.map((post, index) => (
      <div key={index} className="flex items-center w-full mb-4">
        <div className="w-16 flex-none">
          <img alt={post.title}
          height='60px'
          width='60px'
          className='align-middle rounded-full'
          src={post.featuredImage?.url} />
       
        </div>
        <div className="flex-grow ml-4">
          <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
          { post.slug && <Link href={`/post/${post.slug}`} key={index} className="text-md">
            {post.title}
            </Link> }
          
        </div>
      </div>
    ))}
  </div>
  )
}

export default PostWidget
