import Link from "next/link";


function HomePage() {
  return (
  <h1 className="title">
  Read{' '}
  <Link href="/posts/first-post">
    <a>this page!</a>
  </Link>
</h1>
  )
}

export default HomePage;