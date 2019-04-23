export const zipIntoObjects = (...properties) =>
    Array(properties[0].values.length).fill().map((_, i) =>
        properties.reduce((acc, { key, values }) => ({
            ...acc,
            [key]: values[i],
        }), {}));

const testProperties = [{
    key: 'name',
    values: ['Bob', 'Carl', 'Bart', 'Methuselah'],
}, {
    key: 'age',
    values: [22, 34, 56, 947],
}, {
    key: 'smoker',
    values: [true, false, false, true],
}];

console.log(zipIntoObjects(...testProperties));