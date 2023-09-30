export const checkGeolocationPermission = async () => {
    return await navigator.permissions.query({ name: "geolocation" });
};

export const getCurrentPosition = async (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
        return navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};
