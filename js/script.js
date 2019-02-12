{   

    const createResultList = (results) => {
 
    }

    const search = value => {
        const url = ``;

    };

    const handleKeyUpSearch = e => {
        const $input = e.currentTarget;
        search($input.value);
    };

    const init = () => {
        document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
    };

    init();

}