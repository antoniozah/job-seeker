export const timestampToDate = (timestamp: number) => {
    const dateObject = new Date(timestamp).toLocaleString('en-GB', {
        day: 'numeric',
        month: 'short',
    });
    return dateObject;
};
