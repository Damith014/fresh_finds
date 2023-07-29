//Item, Upload, User
export interface Create {
    status: string;
    message: string;
}
export interface Home {
    status: string;
    respond: Item[];
}
export interface Item {
    id: string;
    user_id: string;
    category: string;
    location: string;
    title: string;
    price: string;
    quantity: string;
    description: string;
    images: string;
    created_at: string;
    updated_at: string;
    status: string;
}
export interface Users {
    status: string;
    respond: User[];
}
export interface User {
    id: string;
    name: string;
    mobile: string;
    created_at: string;
}
export interface Validate {
    status: string;
    respond: Respond;
}
export interface Respond {
    valid: boolean;
    registered?: boolean;
    account?: Account[];
}
export interface Account {
    id: string;
    name: string;
    mobile: string;
    type: string;
    email: string;
    image: string;
    created_at: string;
}
export interface Favorites {
    status: string;
    respond: Favorite[];
}
  
export interface Favorite {
    id: string;
    user: string;
    item: string;
    status: string;
    created_at: string;
}
export interface Stats {
    status: string
    respond: Stat[]
  }
  
  export interface Stat {
    status: string
    total: string
  }
  export interface Notifications {
    status: string
    respond: Notification[]
  }
  
  export interface Notification {
    id: string
    title: string
    body: string
    user: string
    created_at: string
  }
  