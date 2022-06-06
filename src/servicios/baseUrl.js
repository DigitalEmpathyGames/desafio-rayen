const baseURL = () => {
    const url = window.location.href;
    const arrayUrl = url.split('//');
    const urlRaiz = arrayUrl[0] + '//' + 'localhost:3000';

    return {
        urlRaiz
    }
}

export default baseURL;