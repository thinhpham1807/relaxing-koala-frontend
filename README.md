# SWE30003 - Software Architecture and Design

# Relaxing Koala Restaurant Information System (RIS)

## Overview
Relaxing Koala is a cafe and restaurant based in Hawthorn that provides a comfortable environment for guests with delicious food and drinks. This Restaurant Information System (RIS) was developed in collaboration with Swinsoft Consulting to automate core operations like reservations, order management, kitchen communication, invoicing, payments, and providing statistical insights.

## Key Features
- **Reservations**: Manage table bookings with a reservation system, including reminders and availability updates.
- **Order Management**: Process dine-in orders and online food deliveries with kitchen integration and status tracking.
- **Payment Processing**: Secure and seamless handling of customer payments through various methods.
- **Menu Management**: Enable admin to modify, add, and delete menu items dynamically.
- **Staff Administration**: Manage staff roles, permissions, and details through a dedicated admin interface.
- **Dashboard**: Admin overview dashboard showcasing key restaurant metrics and statistics.

## System Architecture
The project follows a modular, object-oriented design (OOD) with a focus on separation of concerns. Key components include:
- **Model Classes**: Represent domain-specific entities like reservations, orders, tables, and payments.
- **Manager Classes**: Handle business logic for reservations, orders, payments, and user authentication.
- **DatabaseManager**: Interfaces with the database for CRUD operations.

## Design Patterns
The system employs several design patterns for scalability and maintainability, including:
- **Singleton**
- **Strategy**
- **MVC**

## Technologies Used
- **Frontend**: React, TailwindCSS, Radix UI
- **Backend**: Node.js, Next.js
- **Database**: MySQL
- **Version Control**: Git (GitFlow branching model)

## Deployment
Steps to deploy the application:
1. **Download the source code**: Download the zip file and extract it.
2. **Install dependencies**: Run `npm install` in the project directory.
3. **Build the application**: Execute `npm run build` to compile the app for production.
4. **Deploy**: Upload the built files to a hosting platform (e.g., Vercel).
5. **Access the app**: The app is accessible at [Relaxing Koala](https://relaxing-koala-ten.vercel.app/).
   - **Admin login**: `admin@admin`, password: `1`
   - **Customer login**: Use your email, password: `1`

## Scenarios
1. **Login Authentication**: Customers and admins can log in to access respective functionalities.
2. **Make a Reservation**: Customers can book tables, with the system handling availability checks.
3. **Menu Order**: Customers can browse the menu and place orders, either for dine-in or delivery.
4. **Payment Processing**: Secure payment integration for customer orders.
5. **Modify Menu Items**: Admins can manage menu items, add new dishes, or update existing ones.

## Security
The system includes several advanced security measures:
- Data encryption for sensitive information.
- User authentication and role-based access control.
- Regular security audits and penetration tests.

## Lessons Learned
This project reinforced the importance of clear requirements gathering, stakeholder involvement, and the adoption of Agile methodologies for flexible and efficient development.

## License
This project is licensed under the [MIT License](LICENSE).

## Authors
- Quang Hai Le Hai
- Duc Thinh Pham
- Nguyen Khang Le Khang
- Tai Minh Huy Nguyen Huy
