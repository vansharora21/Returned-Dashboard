# Property Management Frontend - Backend Integration

This document describes how the Property Management Frontend integrates with its backend API services.

## API Architecture

The Property Management Frontend communicates with a RESTful backend API to retrieve and manipulate data. The integration follows standard HTTP communication patterns with JSON as the data format.

### Backend API URL Configuration

The backend API URL is configured using environment variables:

```typescript
// From src/api/axiosConfig.ts
export const BASE_URL = import.meta.env.VITE_API_BASEURL;
```

The application supports different environments through Vite's environment variable system, allowing for development, staging, and production API endpoints.

## Authentication Integration

### Authentication Flow

1. User enters credentials in the login form
2. Frontend submits credentials to the backend authentication endpoint
3. Backend validates credentials and returns a JWT token
4. Frontend stores the token in localStorage
5. Subsequent API requests include the token in the Authorization header

### Token Management

The application manages authentication tokens through Redux and localStorage:

```typescript
// From src/redux/slices/authSlice.ts
export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: string }
>("auth/loginUser", async (credentials, thunkAPI) => {
  try {
    const { data } = await API.call(LOGIN_ENDPOINT, {
      method: "post",
      data: credentials,
    });
    return data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Login failed"
    );
  }
});

// Storing token in localStorage
localStorage.setItem("token", action.payload.token);
```

### Automatic Token Inclusion

All API requests automatically include the authentication token using Axios interceptors:

```typescript
// From src/api/axiosConfig.ts
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // ... other interceptor logic
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

### Authentication Error Handling

The application handles authentication errors and token expiration:

```typescript
// From src/api/axiosConfig.ts
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          localStorage.removeItem("token");
          // You might want to redirect to login page here
          break;
        // ... handling other error statuses
      }
    }
    return Promise.reject(error);
  }
);
```

## Multi-Company Context

The application supports multiple companies and includes company context in API requests:

```typescript
// From src/api/axiosConfig.ts
// Dynamically set X-Company-Id from user session/localStorage
let companyId = 1;
try {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    const user = typeof userStr === "string" ? JSON.parse(userStr) : userStr;
    // If user has companies array, pick the first company id, else fallback
    if (user && user.companies && user.companies.length > 0) {
      companyId = user.companies[0].company_id || 1;
    }
  }
} catch (e) {
  // fallback to default companyId
}
config.headers['X-Company-Id'] = companyId;
```

## Data Integration Patterns

### API Service Layer

The application uses a service layer pattern to abstract API calls:

```typescript
// Login service example from src/services/loginService.ts
import API from "@/api/apiClass";
import { LOGIN_ENDPOINT } from "@/constants";

export const loginUser = async (credentials) => {
  const { data } = await API.call(LOGIN_ENDPOINT, {
    method: "post",
    data: credentials,
  });
  return data;
};
```

### Data Fetching

Data is typically fetched in component lifecycle methods or using React hooks:

1. **Redux Thunks**: For global state that needs to be shared across components
2. **React Query/SWR**: For component-specific data fetching (if implemented)
3. **Direct API Calls**: For simpler components with isolated data needs

### State Synchronization

The application follows these patterns for keeping frontend state in sync with backend data:

1. **Initial Load**: Fetch data when components mount
2. **Periodic Refreshes**: Refresh data at intervals (if implemented)
3. **Post-Mutation Updates**: Refetch or update state after mutations
4. **Optimistic Updates**: Update UI before API confirmation, then sync (if implemented)

## API Endpoints

The application integrates with these primary backend endpoints (inferred from the codebase):

### Authentication
- `LOGIN_ENDPOINT`: User authentication

### Properties
- GET properties listing
- GET individual property details
- POST/PUT/DELETE property management

### Purchases
- GET purchases (assigned/unassigned)
- POST/PUT purchase creation and updates
- PUT purchase assignment to properties

### Receipts
- GET receipts (assigned/unassigned)
- POST/PUT receipt creation and updates
- PUT receipt assignment to purchases

### Reports
- GET various report endpoints

### Users
- GET users listing
- POST/PUT/DELETE user management

### Companies
- GET companies listing
- POST/PUT/DELETE company management

## Error Handling

The application handles API errors through:

1. **Global Error Interceptor**: Axios response interceptor for common errors
2. **Redux Error States**: Error states in redux for global error handling
3. **Component-Level Error Handling**: Try/catch patterns in components
4. **User Feedback**: Displaying error messages to users

## Performance Optimization

API integration includes these performance considerations:

1. **Caching**: Browser-level caching through HTTP headers
2. **Request Deduplication**: Avoiding duplicate requests for the same data
3. **Pagination**: Breaking large datasets into manageable chunks
4. **Lazy Loading**: Loading data only when needed

## Security Considerations

The API integration implements these security measures:

1. **HTTPS**: All API communication over secure connections
2. **JWT Authentication**: Secure token-based authentication
3. **XSS Prevention**: Careful handling of user input and API responses
4. **CSRF Protection**: Token-based protection against cross-site request forgery

## Backend Dependencies

The frontend depends on these backend services:

1. **Authentication Service**: For user authentication and authorization
2. **Property Service**: Core property management functionality
3. **User Service**: User and permission management
4. **Financial Services**: For handling purchases, receipts, and financial data

## Integration Testing

The integration between frontend and backend can be tested through:

1. **Mock API Responses**: For unit and component testing
2. **Integration Tests**: Testing actual API communication
3. **End-to-End Tests**: Full workflow testing from UI to database

## Deployment Considerations

When deploying the frontend and backend together:

1. **Versioning**: Ensure compatible API versions
2. **CORS Configuration**: Configure proper cross-origin resource sharing
3. **Environment Variables**: Set appropriate API URLs for each environment
4. **Graceful Degradation**: Handle backend unavailability gracefully