const dataController = require('./controllers/get.data.controller').init();

const init = (Quote) => {
    async function getAll() {
        return dataController.getAll(Quote);
    }

    return {
        getAll
    }
};

module.exports = {
    init
};