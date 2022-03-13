const getCookies = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if(findCookie) {
        console.log(findCookie);
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
};