import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

interface Categories {
  name: string
  slug: string

}

const Categories : React.FC = () => {

  const [categories, setCategories] = useState<Categories []>([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
    { categories.map((category, index) => (
      category.slug && <Link key={index} href={`/category/${category.slug}`}>
        <span className="cursor-pointer block pb-3 mb-3">{category.name}</span>
      </Link> 
    )) }
    </div>
  )
}

export default Categories
