import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import Image from "next/image";

const Page = ({ post }) => {
  return (
    <div className={`container mx-auto px-3`}>
      <article className="w-full">
        <h1 className={`font-bold text-3xl`}>{post.title}</h1>
        <picture className="w-full">
          <Image
            src={post.featured_image.url}
            width={post.featured_image.width}
            height={post.featured_image.height}
            alt={post.featured_image.alt}
            layout="responsive"
          />
        </picture>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </article>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        post(where: { slug: "${slug}" }) {
          id
          slug
          title
          featured_image {
            alt
            height
            url
            width
          }
          content {
            html
          }
        }
      }
    `,
  });

  return {
    props: {
      post: data.post,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query postSlugs {
        posts {
          slug
        }
      }
    `,
  });

  return {
    paths: data.posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export default Page;
