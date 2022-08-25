import Link from 'next/link'

export default function Posts({ posts }) {

    return (
        <>
            <ul className='list-group'>
                {posts.map(post => (
                    <li key={post.id} className='list-group-item'>
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}><a>{post.title}</a></Link>
                    </li>
                ))}
            </ul>
        <style jsx>{`
        .list-group-item{
            padding: 20px 10px;
            border-bottom: 1px solid #d7d2cd;
            display: flex;
            align-items: center;
        }
        `}</style>
        </>
    );
};