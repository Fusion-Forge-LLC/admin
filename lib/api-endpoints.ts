export const API_ENDPOINTS = {
    AUTH: {
        login: "/admin/auth/login",
        user: "/admin/auth/user"
    },

    DASHBOARD: {
        overview: "/admin/dashboard/overview",
        chart: "/admin/dashboard/overview/chart",
        propertyStats: "/admin/dashboard/properties/stat",
        propertyLists: (page: number, limit: number) => 
            `/admin/dashboard/properties/list?page=${page}&limit=${limit}`,
    },

    USERS: {
        vendors: (page: string, limit: string) => 
            `/admin/dashboard/users/business?page=${page}&limit=${limit}`,
        vendor: (id: string) => 
            `/admin/dashboard/users/business/${id}`,
        clients: (page: string, limit: string) => 
            `/admin/dashboard/users/client?page=${page}&limit=${limit}`,
        client: (id: string) =>   
            `/admin/dashboard/users/client/${id}`,
    },

    LIST: {
        location: `/lists/address/locations`
    },

    PROPERTIES: {
        allProperties: (query: string) => `/admin/dashboard/properties/all?${query}`,
        property: (id: string ) => `/admin/dashboard/properties/${id}`
    },

    ANALYTCIS: {
        booking: `/admin/dashboard/analytics/booking`
    }
}