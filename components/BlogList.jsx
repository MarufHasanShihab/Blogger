'use client'
import { blog_data } from '@/Assets/assets'
import BlogItems from './BlogItems'
import { useState } from 'react'

const BlogList = () => {
  const [menu, setMenu] = useState('All')
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu('All')}
          style={{cursor:"pointer"}}
          className={
            menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu('Technology')}
          style={{cursor:"pointer"}}
          className={
            menu === 'Technology'
              ? 'bg-black text-white py-1 px-4 rounded-sm'
              : ''
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu('Startup')}
          style={{cursor:"pointer"}}
          className={
            menu === 'Startup' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu('Lifestyle')}
          style={{cursor:"pointer"}}
          className={
            menu === 'Lifestyle'
              ? 'bg-black text-white py-1 px-4 rounded-sm'
              : ''
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data?.filter(blog=>menu==="All"?true:blog.category===menu).map((blog) => (
          <BlogItems key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default BlogList
