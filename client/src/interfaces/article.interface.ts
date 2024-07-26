export default interface IArticle {
    _id: string,
    title: string,
    type: 'post' | 'project',
    slug: string,
    content: string,
    createdAt: Date,
    icon: string,
    tags?: string[], 
}
