import HttpService from "./http.service";



export default class GalleryService {
    static async getAll(take = 5, skip = 0, search = "") {
        return await HttpService.request({
            url: "/galleries",
            method: "GET",
            params: { take, skip, search },
        });
    }
    static async get(id) {
        return await HttpService.request({
            url: `/galleries/${id}`,
            method: "GET",
        });
    }
    static async create(data) {
        return await HttpService.request({
            url: "/galleries",
            method: "POST",
            data,
        });
    }
    static async update(id, data) {
        return await HttpService.request({
            url: `/galleries/${id}`,
            method: "PUT",
            data,
        });
    }
}