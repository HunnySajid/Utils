export const getType = (obj) => {
    const lowerCaseFirstLetter = (str) => str[0].toLowerCase() + str.slice(1);
    const type = typeof obj;
    if ( type !== 'object') {
        return type;
    }
    return lowerCaseFirstLetter(
        Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]/, '$1')
    );
};
