import ipRegex from "ip-regex";

const isCoorectIPAddres = (isIP: string) => {

    
  return ipRegex.v4({ exact: true }).test(isIP);
};
const isHostname = (hostname: string) => {
        const regExp = /[a-zA-Z]/g;
        return regExp.test(hostname)
}
export { isCoorectIPAddres, isHostname };
