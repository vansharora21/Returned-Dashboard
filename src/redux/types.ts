export interface User {
    user_id?: string | number;
    companies?: string[];
    is_application_admin?: boolean;
    name?: string;
    email?: string;
  }
  
  export interface AuthState {
    token: string | null;
    loading: boolean;
    error: string | null;
    user: User | null;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  export interface LoginResponse {
    token: string;
    companies: string[];
    is_application_admin: boolean;
    name: string;
    user_id: string;
    email: string;
  }
  export interface ForgotPasswordRequest {
    email: string;
  }
  export interface ForgotPasswordResponse {
    message: string;
  }
  export interface ForgotPasswordState {
    loading: boolean;
    success: boolean;
    error: string | null;
  }
  export interface Receipt {
    id: string;
    amount: number;
    date: string;
  }
  export interface ReceiptsState {
    receipts: Receipt[];
    loading: boolean;
    error: string | null;
  }
    export interface Properties {
    id: string;
    amount: number;
  }
  export interface PropertiesState {
    properties: Properties[];
    loading: boolean;
    error: string | null;
  }

  
  