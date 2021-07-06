module.exports = function getFlag(flag) {
    const args = process.argv.slice(2);
    const flagIndex = args.indexOf(flag);
    const flagValue = args[flagIndex + 1];
    return flagValue
}