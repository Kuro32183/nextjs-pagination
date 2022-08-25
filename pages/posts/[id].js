import Head from 'next/head'
import fetch from "node-fetch";

export default function Post({ post }) {
    return (
        <div>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main>
                <h1>内容</h1>
                <p>{post.body}</p>
            </main>
        </div>
    )
}


export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const paths = posts.map(post => `/posts/${post.id}`);
    return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
    console.log(params)
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return {
        props: { post }
    }
}
