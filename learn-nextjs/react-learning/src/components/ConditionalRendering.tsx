function ConditionalRendering(){
    const user = {
        name: "Muhammad Akbar Ali",
        plan: "Basic",
    };

    return(
        <>
        <div>
        {user.plan === "Pro" ? ( <div>Admin Panel</div> ) : user.plan === "Basic" ? ( <div>User Panel</div>) : ( <div>Login form</div> )}
        </div>
        </>
    );
}

export default ConditionalRendering;