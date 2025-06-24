# Azonia Banking App

A modern, full-featured banking application built with Next.js, TypeScript, and Tailwind CSS. This application provides a comprehensive banking experience with account management, transaction tracking, and fund transfers.

## 🚀 Features

### ✅ **Completed Features**
- **Authentication System**
  - Sign In page with email/password
  - Sign Up page with comprehensive user registration
  - Form validation and loading states
  - Responsive design

- **Dashboard (Home Page)**
  - Welcome message with user greeting
  - Total balance display across all accounts
  - Account summary with bank cards
  - Recent transactions table
  - Interactive charts and analytics

- **My Banks Page**
  - Display all connected bank accounts
  - Bank card visualization
  - Account details and balances

- **Transaction History**
  - Complete transaction history with filtering
  - Transaction categorization (Food & Drink, Travel, Transfer, etc.)
  - Status indicators (Processing, Success, Failed)
  - Date formatting and sorting
  - Responsive table design

- **Payment Transfer**
  - Fund transfer between accounts
  - Recipient details form
  - Bank account selection
  - Transfer amount validation
  - Real-time form validation

- **Responsive Design**
  - Mobile-first approach
  - Tablet and desktop optimized
  - Modern UI components
  - Accessibility features

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Chart.js with React Chart.js 2
- **Animations**: Tailwind CSS animations
- **State Management**: React hooks (useState, useEffect)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd azonia-banking
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Getting Started
1. **Sign Up**: Create a new account with your personal details
2. **Sign In**: Log in with your credentials
3. **Dashboard**: View your account overview and recent transactions
4. **My Banks**: Manage your connected bank accounts
5. **Transfer Funds**: Send money between accounts
6. **Transaction History**: Review all your banking activities

### Navigation
- **Home** (`/`): Main dashboard with account overview
- **My Banks** (`/my-banks`): View all connected accounts
- **Transaction History** (`/transaction-history`): Complete transaction log
- **Transfer Funds** (`/payment-transfer`): Send money between accounts
- **Sign In** (`/sign-in`): User authentication
- **Sign Up** (`/sign-up`): New user registration

## 🔧 Project Structure

```
azonia-banking/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/
│   │   ├── my-banks/
│   │   ├── payment-transfer/
│   │   ├── transaction-history/
│   │   └── page.tsx (Dashboard)
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/ (UI primitives)
│   ├── AuthForm.tsx
│   ├── BankCard.tsx
│   ├── DoughnutChart.tsx
│   ├── HeaderBox.tsx
│   ├── MobileNav.tsx
│   ├── PaymentTransferForm.tsx
│   ├── RightSidebar.tsx
│   ├── Sidebar.tsx
│   ├── TotalBalanceBox.tsx
│   └── TransactionsTable.tsx
├── constants/
│   └── index.ts
├── lib/
│   └── utils.ts
├── types/
│   └── index.d.ts
└── public/
    └── icons/
```

## 💡 Key Components

### AuthForm
- Handles both sign-in and sign-up flows
- Form validation and error handling
- Loading states and user feedback

### TransactionsTable
- Displays transaction data in a responsive table
- Category badges and status indicators
- Date formatting and amount styling

### PaymentTransferForm
- Multi-step form for fund transfers
- Account selection and validation
- Real-time form feedback

### Banking Components
- **BankCard**: Visual representation of bank accounts
- **TotalBalanceBox**: Account balance summary
- **DoughnutChart**: Visual analytics for spending
- **RightSidebar**: Account summary and recent activity

## 🎨 Design System

### Colors
- Primary: Banking blue theme
- Success: Green for positive transactions
- Error: Red for negative transactions
- Neutral: Gray scale for text and backgrounds

### Typography
- Font Family: Inter & IBM Plex Serif
- Responsive font sizes (text-14, text-16, text-18, etc.)
- Font weights: normal, medium, semibold, bold

### Components
- Consistent spacing and padding
- Rounded corners and shadows
- Hover and focus states
- Loading animations

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Enhanced layout for medium screens
- **Desktop**: Full-featured experience with sidebar navigation
- **Breakpoints**: sm, md, lg, xl, 2xl

## 🔐 Security Features

- Input validation and sanitization
- Form submission protection
- Client-side validation
- Secure routing (auth required for banking pages)

## 🚧 Development Notes

### Mock Data
The application currently uses mock data for:
- User accounts and balances
- Transaction history
- Bank connections

### API Integration
The app is designed to integrate with:
- Banking APIs (Plaid, Open Banking)
- Payment processors (Stripe, Dwolla)
- Authentication services (Auth0, Firebase)

## 🎯 Future Enhancements

### Planned Features
- [ ] Real-time notifications
- [ ] Budgeting and spending analysis
- [ ] Bill pay functionality
- [ ] Investment tracking
- [ ] Multi-currency support
- [ ] Dark mode theme
- [ ] Advanced filtering and search
- [ ] Export transactions (PDF, CSV)
- [ ] Two-factor authentication
- [ ] Biometric authentication

### Technical Improvements
- [ ] PWA capabilities
- [ ] Offline functionality
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Accessibility improvements
- [ ] Unit and integration tests
- [ ] Error boundary implementation
- [ ] Loading skeleton screens

## ⚡ Performance

- **Next.js App Router**: Optimized routing and loading
- **Code Splitting**: Automatic code splitting for faster loads
- **Image Optimization**: Next.js Image component for optimized images
- **Responsive Images**: Adaptive image sizing
- **CSS Optimization**: Tailwind CSS with purging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎉 Acknowledgments

- Icons from Lucide React
- UI components inspired by Radix UI
- Design system following modern banking app patterns
- Responsive design principles

---

**Built with ❤️ using Next.js and TypeScript**
