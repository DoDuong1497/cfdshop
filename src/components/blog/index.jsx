import React from 'react'
import HeadingSection from '../heading-section'
import BlogPost from './blogPost'
import './style.scss'

export default function Blog() {
    return (
        <section className="section-blog blog">
            <HeadingSection heading="Read our Blog posts">Go to Blog</HeadingSection>

            <div className="container">
                <div className="blog-wrap">
                    <div className="blog-item">
                        <BlogPost type = "large" urlBlog = "#" titleBlog = "Our chef tips for a great and tasty dinner ready in 20 minutes" authorName = "Author" date = "17. 6. 2020" tag = "Dinner tips"/>
                    </div>
                    <div className="blog-item">
                        <BlogPost type = "medium" urlBlog = "#" titleBlog = "Which vegetable your family will love and want’s eat each day" authorName = "Author" date = "15. 6. 2020" tag = "Vegetable"/>
                    </div>
                    <div className="blog-item">
                        <BlogPost type = "small" urlBlog = "#" titleBlog = "Salat is kinda good start to your morning routines" authorName = "Author" date = "15. 6. 2020" tag = ""/>

                        <BlogPost type = "small" urlBlog = "#" titleBlog = "Our chef tips for a great and healthy breakfast" authorName = "Author" date = "15. 6. 2020" tag = ""/>

                        <BlogPost type = "small" urlBlog = "#" titleBlog = "Prepare a simple and delicious breads" authorName = "Author" date = "15. 6. 2020" tag = ""/>
                    </div>
                </div>
            </div>

            
        </section>
    )
}
