import React from "react";
import Link from "next/link";


function Header() {
    return (
        <div className="flex mb-5 bg-gray-200 p-3 gap-5">
            <Link href="/">Home</Link>
            <Link href="/name">Name</Link>
            <Link href="/name/address">Address</Link>
        </div>
    )
};

export default Header;