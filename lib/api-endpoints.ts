export const API_ENDPOINTS = {
    AUTH: {
        login: "/admin/auth/login",
        user: "/admin/auth/user"
    },

    DASHBOARD: {
        overview: "/admin/dashboard/overview",
        chart: "/admin/dashboard/overview/chart",
        propertyStats: "/admin/dashboard/properties/stat",
        propertyLists: (page: number, limit: number) => `/admin/dashboard/properties/list?page=${page}&limit=${limit}`,
    }
}