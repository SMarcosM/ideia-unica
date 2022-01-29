import Link from "next/link";
import Image from "next/image";


function HomePage() {
  const MyComponent = () => (
    <Image src="/images/sebas.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Sebastião Marcos"
    />

  )

  return (
    <>
      <MyComponent />
      <h1 className="title">

        Read{' '}

        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
    </>
  )
}

export default HomePage;