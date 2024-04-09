class Api {

    async init() {
        let response = await fetch('../data.json');
        return await response.json();
    }

    getAccById (data, idToFind){
        const valueToFind = data.find((element) => element.id === idToFind);
        console.log(valueToFind);
        return valueToFind;
    }
}

const apiLink = new Api();

export default apiLink;
