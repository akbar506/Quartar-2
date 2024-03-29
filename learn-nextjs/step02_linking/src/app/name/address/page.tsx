'use client';

import { useRouter } from "next/navigation";

function AddressPage(){
    const router = useRouter();
    return(
        <div>
            This is Address Page
            <br />
            <button type="button" onClick={() => router.push('/name')}>Back to Name Page</button>
        </div>
    )
}


export default AddressPage;