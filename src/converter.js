function convertLength(value, from, to) {

    if (from === "meter" && to === "kilometer") {
        return value / 1000;
    }

}

module.exports = {
    convertLength
};