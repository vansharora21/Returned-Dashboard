# Property Management Frontend Architecture

## Application Architecture

The Property Management Frontend follows a component-based architecture using React and TypeScript. The application structure is organized to promote code reusability, separation of concerns, and maintainability.

### High-Level Architecture

```
property-frontend/
├── src/                # Source code
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── layouts/        # Layout components
│   ├── api/            # API integration
│   ├── redux/          # State management
│   ├── assets/         # Static assets
│   ├── styles/         # Global styles
│   ├── config/         # Configuration
│   ├── constants/      # Application constants
│   ├── services/       # Service modules
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
```

## State Management

The application uses Redux for global state management, particularly for:

1. **Authentication State**: Managed through the `authSlice.ts` reducer
2. **User Session**: Storing user information and preferences
3. **Application Settings**: Global configurations and settings

### Redux Implementation

- **Store Configuration**: Defined in `redux/store.ts`
- **Slices Pattern**: Using Redux Toolkit's createSlice for reducer logic
- **Async Thunks**: For handling asynchronous operations like API calls

```typescript
// Store structure
{
  auth: {
    token: string | null,
    loading: boolean,
    error: string | null,
    user: {
      user_id: number,
      name: string,
      email: string,
      is_application_admin: boolean,
      companies: Array<{ company_id: number, name: string }>
    }
  }
  // Other state slices would be here
}
```

## Component Hierarchy

The application follows a hierarchical component structure:

```
App
├── Routes
│   ├── LoginForm
│   ├── Dashboard
│   │   ├── LeftNavigation
│   │   ├── DashboardCommonHeader
│   │   └── DashboardOverviewComponent
│   ├── Properties
│   │   ├── LeftNavigation
│   │   ├── DashboardCommonHeader
│   │   └── PropertiesTable
│   ├── Purchases
│   │   ├── UnAssignedPurchases
│   │   └── AssignedPurchases
│   ├── Receipts
│   ├── Reports
│   ├── Users
│   └── Companies
```

### Core Component Types

1. **Layout Components**: Define the overall structure of pages
   - LeftNavigation: Provides the main navigation sidebar
   - DashboardCommonHeader: Contains the header with user info and actions

2. **Page Components**: Represent full pages in the application
   - Dashboard: Main dashboard view with overview metrics
   - Properties: Property management view
   - Purchases: Purchase tracking view

3. **Reusable UI Components**: Self-contained, reusable elements
   - Button: Custom button components
   - NavigationLabel: Navigation menu items
   - Tables: Various table implementations for data display

4. **Container Components**: Connect to Redux state and pass data to presentational components

## Routing

Routing is implemented using React Router v6:

```jsx
<Routes>
    <Route path="/" element={<LoginForm />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/purchases" element={<Purchases />} />
    <Route path="/receipts" element={<Receipts />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/properties" element={<Properties />} />
    <Route path="/purchases-unassiged" element={<UnAssignedPurchases />} />
    <Route path="/purchases-assiged" element={<AssignedPurchases />} />
    <Route path="/users" element={<Users />} />
    <Route path="/companies" element={<Companies />} />
</Routes>
```

Routes are defined in `App.tsx` and potentially guarded by authentication requirements.

## API Integration

API communication is handled through Axios:

- **Axios Configuration**: Defined in `api/axiosConfig.ts`
- **Interceptors**: For handling authentication tokens and error responses
- **API Service Classes**: Abstraction over direct Axios calls

### API Authentication

- JWT token-based authentication
- Token stored in localStorage
- Automatically included in API requests via Axios interceptors

## UI Framework

The application uses Material-UI (MUI) as its primary UI framework:

- **MUI Components**: Tables, Buttons, Checkboxes, etc.
- **Responsive Design**: MUI's Grid system for responsive layouts
- **Theme Customization**: Custom theme with branded colors

## Data Flow

1. User interactions trigger component-level events
2. Events may dispatch Redux actions
3. Redux actions may trigger API calls via thunks
4. API responses update Redux state
5. Components re-render based on state changes