'use client';

import { useRouter } from "next/navigation";

function NamePage(){
    const router = useRouter();
    return(
        <div>
            This is Name Page
            <br />
            <button type="button" onClick={()=> router.push('/name/address')}>
                Address Page
            </button>
            <br />
            <button type="button" onClick={()=> router.push('/')}>
                Back to Home Page
            </button>

        </div>
    )
}

export default NamePage;
