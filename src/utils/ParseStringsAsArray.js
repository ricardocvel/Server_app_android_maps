module.exports = function paerseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}