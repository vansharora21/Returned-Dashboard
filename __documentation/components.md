# Property Management Frontend Components

This document provides an overview of the key reusable components in the Property Management Frontend application. These components are designed to be modular and reusable across different parts of the application.

## Navigation Components

### `LeftNavigation`

The main navigation sidebar component used throughout the application.

**Location:** `src/components/leftNavigation/leftNavigation.tsx`

**Features:**
- Displays the application logo
- Provides navigation links to major sections of the application
- Supports submenu items for sections like Purchases and Receipts
- Includes a logout button
- Uses Material-UI for styling

**Usage:**
```jsx
<LeftNavigation />
```

**State:**
- `isPurchasesOpen`: Controls the expansion state of the Purchases submenu
- `isReceiptsOpen`: Controls the expansion state of the Receipts submenu

## Header Components

### `DashBoardCommonHeader`

Common header component used across dashboard pages.

**Location:** `src/components/header/DashBoardCommonHeader.tsx`

**Features:**
- Displays user information
- Contains global actions/controls
- Consistent styling across pages

**Usage:**
```jsx
<DashBoardCommonHeader />
```

### `SubCommonHeader`

Sub-header component used for section-specific headers.

**Location:** `src/components/header/SubCommonHeader.tsx`

**Usage:**
```jsx
<SubCommonHeader title="Properties" />
```

## Button Components

### `Button`

Generic button component with consistent styling.

**Location:** `src/components/button/Button.tsx`

### `UsefulButton`

Extended button component with additional functionality.

**Location:** `src/components/button/usefulButton.tsx`

**Props:**
- `label`: Text to display on the button
- `textColor`: Color of the button text

**Usage:**
```jsx
<UsefulButton label="Filter" textColor="#6D6E6F" />
```

## Table Components

### `PropertiesTable`

Table component for displaying property listings.

**Location:** `src/components/properties/propertiesTable.tsx`

**Features:**
- Displays property data in tabular format
- Supports sorting and filtering
- Includes expandable rows for showing unit details
- Checkbox selection for bulk operations
- Responsive design

**Props:**
- `purchases`: Array of property data objects

**Usage:**
```jsx
<PropertiesTable purchases={propertiesData} />
```

### `PurchasesTable`

Table component for displaying purchase information.

**Location:** `src/components/purchases/purchasesTable.tsx`

**Features:**
- Displays purchase data
- Sorting capabilities
- Selection for bulk actions

### `ReceiptTable`

Table component for receipt information.

**Location:** `src/components/receipts/ReceiptTable.tsx`

### `UsersTable`

Table component for user management.

**Location:** `src/components/users/UsersTable.tsx`

## Overview Components

### `DashboardOverviewComponent`

Component for displaying dashboard overview information.

**Location:** `src/components/overview/DashboardOverviewComponent.tsx`

**Features:**
- Displays summary statistics
- Shows key metrics in visual format
- Entry point to major application features

## UI Elements

### `NavigationLabel`

Component for rendering navigation items with consistent styling.

**Location:** `src/components/overview/NavigationLabel.tsx`

**Props:**
- `logo`: Icon/image to display
- `label`: Text label
- `onClick`: Click handler function
- `hasSubmenu`: Boolean indicating if item has submenu
- `isSubmenuOpen`: Boolean controlling submenu expansion state
- `subMenuItems`: Array of submenu items

**Usage:**
```jsx
<NavigationLabel
  logo={DashBoardLogo}
  label="Dashboard"
  onClick={handleDashboardClick}
/>
```

### `PurchaseCard`

Card component for displaying purchase information.

**Location:** `src/components/overview/PurchaseCard.tsx`

**Features:**
- Displays purchase details in card format
- Consistent styling for purchase information

### `StockChip`

Chip component for displaying status information.

**Location:** `src/components/overview/StockChip.tsx`

**Features:**
- Visual indicator for status (e.g., assigned, unassigned)
- Consistent color coding

## Guard Components

### `AuthGuard`

Component for protecting routes that require authentication.

**Location:** `src/components/guards/AuthGuard.tsx`

**Features:**
- Verifies user authentication
- Redirects unauthenticated users
- Protects private routes

## Component Best Practices

When working with these components, follow these guidelines:

1. **Maintain Consistency**: Use the provided components rather than creating new ones for the same purpose.

2. **Props Typing**: Always use TypeScript interfaces for component props.

3. **Component Composition**: Compose complex components from simpler ones.

4. **State Management**: For components that need to connect to global state, use Redux hooks (`useSelector`, `useDispatch`).

5. **Responsive Design**: All components should work across different screen sizes.

6. **Accessibility**: Ensure components meet accessibility guidelines.

7. **Performance Optimization**: Use React.memo for components that don't need frequent re-renders.

## Styling Approach

Components in this application use a combination of:

- Material-UI's styling system
- Inline styles for component-specific styling
- CSS variables for theming consistency

Example styling pattern:

```jsx
<Box sx={{ 
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "space-between", 
  width: "1203px", 
  height: "48px" 
}}>
  {/* Component content */}
</Box>