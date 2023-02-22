export const makeCookieObject = (cookieString) => {
    return [...cookieString.split(";")].reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        return { ...acc, [key.trim()]: value };
    }, {});
};
