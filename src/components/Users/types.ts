export interface UserStatus {
    assigned: string;
    unassigned: string;
}

export interface UserProduct {
    image: string;
    name: string;
}

export interface UserItem {
    product: UserProduct;
    status: string;
    quantity: number;
    purchaser: string;
    property: string;
    unit: string;
    cost: string;
}

export interface User {
    id: string;
    poNumber: string;
    status: UserStatus;
    supplier: string;
    date: string;
    total: string;
    items: UserItem[];
}

export interface UserTableProps {
    users: User[];
}