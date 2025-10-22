export const api = {
async get(path, params) {
// implement real GET (fetch/axios). Return { ok, data }
console.log('GET', path, params);
return { ok: true, data: null };
},
async post(path, body) {
console.log('POST', path, body);
return { ok: true, data: null};
}
};