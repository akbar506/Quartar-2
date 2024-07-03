import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

const getBlogs = async () => {
  return client.fetch(`*[_type == "blogs"]`);
};

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <>
      <div>
        <h1 className="font-bold text-center text-4xl mt-20">
          Sanity Integration
        </h1>
        {blogs.map((blog: any) => (
          <>
            <div
              key={blog._id}
              className="border-2 border-black max-w-[400px] p-3 m-3 round-md"
            >
              <div>
                <Image
                  src={urlForImage(blog.image)}
                  width={300}
                  height={300}
                  alt="Feature Image"
                />
              </div>
              <div>
                <p>{blog.title}</p>
                <p>{blog._createdAt}</p>
                <p>{blog.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
