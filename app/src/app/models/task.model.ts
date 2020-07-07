export class Task {
    _id: string
    title: string
    description: string
    category: string
    day: number
    month: string

    constructor(_id: string, title: string, description: string, category: string, day: number, month: string) {
        this._id = _id
        this.title = title
        this.description = description
        this.category = category,
        this.day = day
        this.month = month
    }
}