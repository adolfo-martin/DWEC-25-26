import { decodeToken, authenticateUserAndGetToken } from "./utils.library.js";

const token = await authenticateUserAndGetToken('emilys', 'emilyspass');
const decodedToken = decodeToken(token);
console.log(decodedToken);