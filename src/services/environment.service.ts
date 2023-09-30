export const getEnvironment = () => {
    const environment = process.env.NODE_ENV;
    return environment;
};

export const isProduction = () => {
    const environment = getEnvironment();
    return environment === "production";
};
