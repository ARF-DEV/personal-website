
export interface BlogMetaData {
    slug: string
    created_at: string
    updated_at: string
}
export interface BlogData {
    title: string
    content: string

}
export interface Blog extends BlogData, BlogMetaData { };
