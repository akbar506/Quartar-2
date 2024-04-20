import Link from "next/link";
import React from "react";

function dynamicRoute() {
    return (
        <div className="ml-5">
            <h1 className="mb-4">Dynamic Route</h1>
            <p>
                When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.
            </p>
            <p>
                A Dynamic Segment can be created by wrapping a folder's name in square brackets: <strong>[folderName]</strong>. For example, <strong>[id]</strong> or <strong>[slug]</strong>.
            </p>
            <p>Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.</p>
            <Link href={"dynamic-route/blog"} className="mt-5 underline text-blue-700">Blog Page</Link>
        </div>
    );
};

export default dynamicRoute;