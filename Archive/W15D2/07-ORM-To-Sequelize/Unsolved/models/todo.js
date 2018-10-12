/* const Todo = sequelize.define("todo", {
    text: Sequelize.STRING,
    complete: Sequelize.BOOLEAN
});

module.exports = Todo; */

module.exports = function(sequelize, DataTypes) {
    const Todo = sequelize.define("Todo", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Todo; // must do this to send this model back through the return statement
};