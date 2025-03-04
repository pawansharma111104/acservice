import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Blogmain.module.css";

const blogPosts = [
  {
    title: "Best Split AC Installation: Gurgaon Residents",
    date: "May 2, 2024",
    categories: ["Cassette AC", "Ducting AC", "Split AC", "Uncategorized", "Window AC"],
    summary: "A Split Air Conditioner system has become a necessity rather than a luxury...",
    link: "/split-ac-installation",
    image: "/Best_Ac.png",
  },
  {
    title: "Split AC on Rent in Gurgaon",
    date: "Jan 25, 2024",
    categories: ["Split AC"],
    summary: "ACServiceGurgaon.com stands out as the preferred choice for those seeking reliable AC rental...",
    link: "/split-ac-on-rent-in-gurgaon",
    image: "/rent_split.jpeg",
  },
  {
    title: "Window AC On Rent in Gurgaon",
    date: "Jan 24, 2024",
    categories: ["Window AC"],
    summary: "Welcome to ACServiceGurgaon.com, your one-stop destination for hassle-free Window AC rentals...",
    link: "/window-ac-on-rent-gurgaon",
    image: "/rent_window.jpeg",
  },
];

const additionalBlogs = [
  {
    title: "Split AC service repair in Gurgaon – Split AC mechanic in Sector 21",
    date: "May 8, 2022",
    categories: ["Cassette AC", "Ducting AC", "Split AC", "Window AC"],
    summary: "Is Your Split AC Functioning? Call us for Your Split AC repair anywhere in Gurgaon +91-9810954362...",
    link: "/split-ac-service-repair-sector21",
    image: "/Split-AC.jpg",
  },
  {
    title: "Commercial and Residential AC Repair Services in Sector 23 Gurgaon",
    date: "Feb 20, 2021",
    categories: ["Uncategorized"],
    summary: "We repair Commercial AC units for all makes and models in Sector 23 Gurgaon. Contact us at +919810954362...",
    link: "/commercial-and-residential-ac-repair-services-in-sector-23-gurgaon",
    image: "/Commercial-AC.jpg",
  },
  {
    title: "AC Repair & Service in Sector 22 Gurgaon",
    date: "Feb 20, 2021",
    categories: ["Uncategorized"],
    summary: "As the leading AC Repair and Services in Gurgaon Sector 22, we provide AC Repair, AC Installation, AC Servicing...",
    link: "/ac-repair-service-in-sector-22-gurgaon",
    image: "/AC-Gas.jpg",
  },
];

const featuredBlogs = [...blogPosts, ...additionalBlogs].map((post) => ({
  title: post.title,
  link: post.link,
}));

const allBlogs = [...blogPosts, ...additionalBlogs];

const Blogcontent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = allBlogs.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      
      <div className={styles.banner}>
        <h1 className={styles.heading}>Our Blog</h1>
      </div>

      <div className={styles.container}>
        {/* Blog Posts Section */}
        <div className={styles.blogSection}>
          {filteredBlogs.map((post, index) => (
            <a key={index} href={post.link} className={styles.post}>
              <img src={post.image} alt={post.title} />
              <div>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.meta}>
                  {post.date} | {post.categories.join(", ")}
                </p>
                <p className={styles.summary}>{post.summary}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          {/* Search Box */}
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search blog..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Featured Blogs */}
          <div className={styles.featuredPosts}>
            <h3>Featured Blogs</h3>
            {featuredBlogs.map((blog, index) => (
              <div key={index} className={styles.featuredPost}>
                <a href={blog.link}>{blog.title}</a>
              </div>
            ))}
          </div>

          {/* Popular Categories */}
          <div className={styles.popularCategories}>
            <h3>Popular Categories</h3>
            <ul>
              {[
                { name: "Window AC", link: "/window-ac-services-gurgaon" },
                { name: "Split AC", link: "/split-ac-services" },
                { name: "Cassette AC", link: "/cassette-ac-services-gurgaon" },
                { name: "Ductable AC", link: "/ducting-ac-services-gurgaon" },
                { name: "AC on rent", link: "/split-ac-on-rent" },
              ].map((category, index) => (
                <li key={index}>
                  <Link href={category.link}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Recent Comments */}
          <div className={styles.recentComments}>
            <h3>Recent Comments</h3>
            <ul>
              {[
                { name: "Pawan", comment: "Great tips on AC installation!", link: "/best-split-ac-installation" },
                { name: "Priyanshu", comment: "I rented a Split AC from here, amazing service!", link: "/split-ac-on-rent" },
                { name: "Rahul", comment: "Helped me choose the best AC for my home.", link: "/window-ac-on-rent" },
              ].map((comment, index) => (
                <li key={index}>
                  <strong>{comment.name}:</strong> {comment.comment} – <a href={comment.link}>Read More</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Older Entries Button */}
      <div className={styles.olderEntries}>
        <Link href="/blog-page-2">
          <button className={styles.olderButton}>Older Entries</button>
        </Link>
      </div>
    </>
  );
};

export default Blogcontent;
