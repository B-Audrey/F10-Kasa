class dataServiceClass {

    async init() {
        let response = await fetch('../data.json');
        return await response.json();
    }

    getAccById (data, idToFind){
       return data.find((element) => element.id === idToFind);
    }
}

const dataService = new dataServiceClass();

export default dataService;
