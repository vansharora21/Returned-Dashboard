export interface Product {
    image: string;
    name: string;
}

export interface CompanyItem {
    id: string;
    poNumber: string;
    status: {
        assigned: number;
        unassigned: number;
    };
    supplier: string;
    date: string;
    total: string;
    items: {
        product: {
            name: string;
            image: string;
        };
        status: string;
        quantity: number;
        receipt: string;
        property: string;
        unit: string;
        cost: string;
    }[];
}

export interface CompanyTableProps {
    companies: CompanyItem[];
}