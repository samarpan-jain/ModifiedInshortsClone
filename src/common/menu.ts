export interface Menu {
    name: string,
    to: string
}

export const menu: Menu[] = [
    {
        name: 'General',
        to: '/general'
    },
    {
        name: 'World',
        to: '/world'
    },
    {
        name: 'Nation',
        to: '/nation'
    },
    {
        name: 'Business',
        to: '/business'
    },
    {
        name: 'Technology',
        to: '/technology'
    },
    {
        name: 'Entertainment',
        to: '/entertainment'
    },
    {
        name: 'Sports',
        to: '/sports'
    },
    {
        name: 'Science',
        to: '/science'
    },
    {
        name: 'Health',
        to: '/health'
    }
]