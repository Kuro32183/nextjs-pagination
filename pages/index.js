import Head from "next/head";
import fetch from "node-fetch";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Post from "../components/Post";

export default function Home({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Head>
        <title>投稿一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>投稿一覧:{posts.length}件</h1>
        <h2>
          {currentPage}ページ目({indexOfFirstPost + 1}~{indexOfLastPost}件表示)
        </h2>
        <Post posts={currentPosts} />
      </main>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      <style style jsx global>{`
        ul {
          list-style: none;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}
