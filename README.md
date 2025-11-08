# SpenTrack - Personal Finance Tracker (Very short time)

A comprehensive web application for tracking personal finances, built with Next.js 15, TypeScript, MongoDB, and featuring real-time charts and analytics.

## Features

### 🔐 Authentication
- User registration and login system
- Secure password hashing with bcryptjs
- Persistent user sessions

### 💰 Transaction Management
- Add income and expense transactions
- Categorize transactions (Food, Transport, Entertainment, Utilities, Salary, Freelance)
- Add notes and dates to transactions
- Real-time transaction list with sorting

### 📊 Analytics & Visualization
- Interactive charts powered by Recharts
- Income vs Expenses line chart over time
- Expense category breakdown pie chart
- Summary cards showing total income, expenses, and balance

### 📱 Responsive Design
- Optimized for desktop, tablet, and mobile devices
- Grid layouts that adapt to different screen sizes

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for data visualization
- **Lucide React** - Modern icon library
- **Sonner** - Toast notification system

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing and authentication

### Development
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Turbopack** - Fast bundler (Next.js default)

## Project Structure

```
spentrack/
├── app/
│   ├── api/
│   │   ├── auth/route.ts          # Authentication endpoints
│   │   ├── transactions/route.ts   # Transaction CRUD operations
│   │   └── summary/route.ts       # Financial summary data
│   ├── dashboard/page.tsx         # Main dashboard with tabs
│   ├── page.tsx                   # Login/signup page
│   ├── layout.tsx                 # Root layout with Sonner
│   └── globals.css                # Global styles
├── models/
│   ├── User.ts                    # User schema
│   ├── Transaction.ts             # Transaction schema
│   └── Category.ts                # Category schema
├── lib/
│   └── mongodb.ts                 # Database connection
├── .env.local                     # Environment variables
└── package.json
```

## Database Schema

### User
```typescript
{
  name: string;
  email: string (unique);
  password: string (hashed);
  timestamps: true;
}
```

### Transaction
```typescript
{
  userId: ObjectId (ref: User);
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: Date;
  notes?: string;
  timestamps: true;
}
```

### Category
```typescript
{
  userId: ObjectId (ref: User);
  name: string;
  type: 'income' | 'expense';
  color: string (default: '#3B82F6');
  timestamps: true;
}
```

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account or local MongoDB instance

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd spentrack
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/finance?retryWrites=true&w=majority
```

4. **Database Setup**
- Create a MongoDB Atlas cluster or use local MongoDB
- Update the connection string in `.env.local`
- The app will automatically create collections on first use

5. **Run the application**
```bash
npm run dev
```

6. **Open in browser**
Navigate to `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth` - Login/Register (auto-detects based on email existence)

### Transactions
- `GET /api/transactions?userId=<userId>` - Get all user transactions
- `POST /api/transactions` - Create new transaction

### Summary
- `GET /api/summary?userId=<userId>` - Get financial summary (income, expenses, balance)

## Usage

### Getting Started
1. **Register/Login**: Create an account or sign in with existing credentials
2. **Add Transactions**: Navigate to "Add Expense" tab to record income/expenses
3. **View Analytics**: Check the "Overview" tab for charts and summary data
4. **Track Progress**: Monitor your financial health with real-time updates

### Adding Transactions
- Select transaction type (Income/Expense)
- Enter amount and select category
- Add optional notes
- Choose transaction date
- Submit to instantly update your dashboard

### Understanding Charts
- **Line Chart**: Shows income vs expenses trends over time
- **Pie Chart**: Breaks down expense categories by amount
- **Summary Cards**: Display total income, expenses, and current balance

## Features in Detail

### Real-time Updates
- Dashboard automatically refreshes after adding transactions
- Charts and summary cards update instantly
- No page refresh required

### Data Validation
- Form validation on both client and server side
- Required fields enforcement
- Type safety with TypeScript

### Error Handling
- Graceful error messages with toast notifications
- Network error handling
- Database connection error management




**Built with ❤️ using Next.js, TypeScript, and MongoDB**