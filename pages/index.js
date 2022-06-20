import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import Image from "next/image";
import Link from "next/link";

const Home = ({ data }) => {
  console.log(data);
  return (
    <section className="container mx-auto px-3 flex gap-8">
      {data.posts &&
        data.posts.map((post) => (
          <article key={post.id} className={`w-full lg:w-1/2`}>
            <picture className="w-full md:w-1/2">
              <Image
                src={post.featured_image.url}
                layout="responsive"
                width={post.featured_image.width}
                height={post.featured_image.height}
              />
            </picture>
            <Link href={`${post.slug}`}>
              <a>
                <h3 className={`font-bold text-xl`}>{post.title}</h3>
              </a>
            </Link>
          </article>
        ))}
    </section>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        posts {
          id
          title
          slug
          featured_image {
            url
            alt
            height
            width
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
