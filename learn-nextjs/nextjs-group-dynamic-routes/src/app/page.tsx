import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="p-5">
        <p className="font-bold">Route Group & Dynamic Route</p>
        <div className="flex gap-3 flex-col mt-5">
          <div>
            <h2 className="text-blue-500 underline mb-3">Route Group:-</h2>
            <p>
              In the app directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a Route Group to prevent the folder from being included in the route's URL path. This allows you to organize your route segments and project files into logical groups without affecting the URL path structure. Route groups are useful for Organizing routes into groups e.g. by site section, intent, or team. Enabling nested layouts in the same route segment level Creating multiple nested layouts in the same segment, including multiple root layouts. Adding a layout to a subset of routes in a common segment
            </p>
          </div>
          <div>
            <Link href={"dynamic-route"} className="text-green-500 underline">Dynamic Route:-</Link>
            <p>
              When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.
            </p>
            <p>
              A Dynamic Segment can be created by wrapping a folder's name in square brackets: <strong> [folderName]</strong>. For example, <strong>[id]</strong> or <strong>[slug]</strong>.
            </p>
            <p>Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.</p>
          </div>
        </div>
      </main>
    </>
  );
};