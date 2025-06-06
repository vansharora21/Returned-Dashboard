# Property Management Frontend Features

## Core Features

### 1. User Authentication and Authorization

- **Login System**: Secure authentication via JWT tokens
- **Session Management**: Persistent login sessions with token storage
- **Access Control**: Role-based permissions for different user types
- **Company Context**: Multi-company support with company selection

### 2. Dashboard

- **Overview Metrics**: Key performance indicators and summary statistics
- **Recent Activity**: Latest property-related activities and updates
- **Navigation Hub**: Quick access to all major application features
- **Status Cards**: Visual representation of property statuses
- **Purchase Cards**: Overview of recent purchases

### 3. Property Management

- **Property Listing**: Comprehensive table view of all properties
- **Property Details**: Detailed information about each property
- **Unit Management**: Tracking of individual units within properties
- **Filtering and Sorting**: Advanced filtering and sorting capabilities
- **Search Functionality**: Quick property search
- **Expandable Rows**: Detailed unit information in expandable table rows
- **Selection Controls**: Bulk selection for batch operations

### 4. Purchase Management

**4.1 Unassigned Purchases**
- **Listing**: Table of purchases not yet assigned to properties
- **Assignment Interface**: Tools to assign purchases to specific properties
- **Filtering**: Filter by vendor, date, amount, etc.

**4.2 Assigned Purchases**
- **Tracking**: Monitoring purchases assigned to properties
- **Status Updates**: Changing status of purchases through workflow
- **Property Association**: Clear indication of which property purchases belong to

### 5. Receipt Management

**5.1 Unassigned Receipts**
- **Receipt Listing**: Table of unassigned receipts
- **Assignment Tools**: Interface for assigning receipts to purchases/properties

**5.2 Assigned Receipts**
- **Receipt Tracking**: Monitoring receipts assigned to purchases
- **Documentation**: Linking digital receipts to purchase records
- **Verification**: Tools for verifying receipt authenticity and amounts

### 6. Reporting

- **Financial Reports**: Cost tracking and financial analysis
- **Property Reports**: Property status and performance metrics
- **Purchase Reports**: Purchase history and categorization
- **Custom Filters**: User-defined report parameters
- **Assigned vs Unassigned Reports**: Separate reporting for assigned and unassigned purchases/receipts

### 7. User Management

- **User Listing**: Table of system users
- **User Creation/Editing**: Interface for managing user accounts
- **Role Assignment**: Assigning roles and permissions to users
- **Account Status**: Activating/deactivating user accounts

### 8. Company Management

- **Company Listing**: Table of companies in the system
- **Company Settings**: Configuration options for each company
- **User-Company Association**: Linking users to specific companies

## User Interface Components

### 1. Navigation

- **Left Navigation Sidebar**: Main navigation component with links to:
  - Dashboard
  - Purchases (with sub-navigation)
  - Properties
  - Reports
  - Receipts (with sub-navigation)
  - Users
  - Companies

### 2. Tables

- **Properties Table**: Displays property listings with expandable rows for units
- **Purchases Table**: Shows purchase information with detailed view
- **Receipts Table**: Displays receipt information
- **Users Table**: Lists user accounts
- **Companies Table**: Shows company information

### 3. Common UI Elements

- **Dashboard Header**: Contains user information and global actions
- **Sub Headers**: Context-specific headers for different sections
- **Search Controls**: Search functionality across the application
- **Filter Buttons**: UI elements for filtering data in tables
- **Action Buttons**: Consistent button styling for actions
- **Status Indicators**: Visual representation of statuses (assigned, unassigned, etc.)
- **Navigation Labels**: Consistent styling for navigation items

### 4. Forms

- **Login Form**: Authentication interface
- **Property Forms**: Adding/editing property information
- **Purchase Forms**: Recording purchase details
- **User Management Forms**: Creating and editing user accounts

### 5. Authentication Components

- **Login Page**: Main authentication interface
- **Auth Guards**: Components protecting routes based on authentication status

## Feature Integration

- **Property-Purchase Association**: Linking purchases to specific properties
- **Receipt-Purchase Verification**: Matching receipts to purchases
- **User-Company Context**: Filtering data based on user's company affiliation
- **Reporting Based on Associations**: Generating reports from related entities