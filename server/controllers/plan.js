exports.getAll = (req, res) => {
    return [
        { name: 'FaleMais 30', price: 30 }, 
        { name: 'FaleMais 60', price: 60 },
        { name: 'FaleMais 120', price: 120 }
    ];
}

exports.getById = (req, res) => {
    return { name: 'FaleMais 30', price: 30 };
}

