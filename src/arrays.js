export const zipIntoObjects = (...properties) =>
    Array(properties[0].values.length).fill().map((_, i) =>
        properties.reduce((acc, { key, values }) => ({
            ...acc,
            [key]: values[i],
        }), {}));