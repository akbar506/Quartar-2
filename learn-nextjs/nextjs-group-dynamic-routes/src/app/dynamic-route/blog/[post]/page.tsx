import React, { ReactNode } from "react";
import Link from "next/link";

// Define the structure of the BlogPageDetail object
type BlogPageDetail = {
    params: {
        post: string; // Assuming post is a simple string
    };
    searchParams: any; // Changed SearchParams to searchParams
}

export default function Post({ params, searchParams }:  BlogPageDetail ) { // Changed SearchParams to searchParams
    // console.log(`\n\nSearch Params: ${searchParams}\n\n`) // Changed SearchParams to searchParams
    console.log(`\n\nSearch Params: ${JSON.stringify(searchParams, null, 2)}\n\n`);

    return (
        <div className="flex flex-col gap-3 p-5">
            <div>
                React Server Component (params, searchParams) {/*Changed SearchParams to searchParams*/}
            </div>
            <div>
                React Client Component (useParams, useSearchParams)
            </div>
            <div>My Post: {params.post}</div>
        </div>
    );
}
