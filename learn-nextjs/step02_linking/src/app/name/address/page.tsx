'use client';

import { useRouter } from "next/navigation";

function AddressPage(){
    const router = useRouter();

    const handleback = () => {
        router.back();
    };

    const handleName = () => {
        router.push("/name");
    };
    return(
        <div>
            This is Address Page
            <br />
            <button type="button" onClick={handleback} className="bg-blue-300 rounded-sm p-5 mb-4 mt-4">
                Go Back
            </button>
            <br />
            <button type="button" onClick={handleName} className="bg-green-300 rounded-sm p-5">
                Go to Name Page
            </button>
        </div>
    )
}


export default AddressPage;