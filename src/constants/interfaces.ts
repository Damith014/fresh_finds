//Item, Upload, User
export interface Create {
    status: string
    message: string
}
export interface Home {
    status: string
    respond: Item[]
}
export interface Item {
    id: string
    user_id: string
    category: string
    location: string
    title: string
    price: string
    quantity: string
    description: string
    images: string
    created_at: string
    updated_at: string
    status: string
}
  