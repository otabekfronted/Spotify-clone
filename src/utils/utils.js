async function getToken() {}
{
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${btoa(
                    "b3a9e5206fef4fea89f5b8666fcfabd6" +
                        ":" +
                        "ee0ffb33f9a0423f886e4dd4413d5626"
                )}`,
            },
            body: "grant_type=client_credentials",
        });
        const auth = await response.json();
        // console.log(17, auth);

        localStorage.setItem(
            "token",
            `${auth.token_type} ${auth.access_token}`
        );
    } catch (err) {
        console.log(err);
    }
}
export { getToken };
