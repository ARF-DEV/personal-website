
export interface Blog {
    title: string
    slug: string
    created_at: string
    updated_at: string
}
export interface BlogDetail extends Blog {
    content: string
}
