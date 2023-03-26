function Header() {
    return (
        <div className="flex flex-col justify-center items-center mx-auto">
            <h1 className="text-3xl my-2 font-semibold">Generate Admin Credential- NearUs</h1>
            <center>
                <p className="flex flex-wrap m-6">
                    Product owners can set admins access here. Currently in test
                    mode so all the new admin assigned will be deleted after 24
                    hours. You can set yourself as admin or can use the test
                    admin credentials provided for testing purpose.
                </p>
            </center>
        </div>
    );
}

export default Header;
