const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");
myHeaders.append("X-Company-Id", "1");
myHeaders.append("Authorization", "••••••");

const loginApi = () => {

    const raw = JSON.stringify({
        "email": "test-user@returned.com",
        "password": "12345"
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect
    };

    fetch("https://3agq77chfi.execute-api.us-west-2.amazonaws.com/V1/auth/login", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}