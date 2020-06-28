export const escape =  (str: string) => {
    str = str.replace(/%/g, "\\u0025");
    return str
};



