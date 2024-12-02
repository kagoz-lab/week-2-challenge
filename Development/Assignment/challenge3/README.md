
## calculations for salary

This document provides an overview of the salary calculation web application. The application calculates the gross salary, tax deductions, National Hospital Insurance Fund (NHIF) deductions, and National Social Security Fund (NSSF) deductions based on the user's input. The calculated net salary is displayed on the webpage.

## Features

Input Fields:

Basic Salary
Benefits
Calculations:

Gross Salary: The sum of basic salary and benefits.
Tax (PAYE): A progressive tax rate applied based on the gross salary.
NHIF Deduction: A fixed deduction based on salary ranges.
NSSF Deduction: 6% of the gross salary.
Net Salary: Gross salary after tax, NHIF, and NSSF deductions.
Validation: Ensures that the user inputs valid numeric values for basic salary and benefits.

Formatting: Displays results in a readable format with commas separating thousands for easier comprehension.
Usage Instructions
Input Salary and Benefits:
Enter the basic salary and benefits in the provided input fields on the webpage.
Submit the Form:
After entering the values, click the submit button to calculate the salary details.

## View Results:

The application will display the gross salary, KRA tax, NHIF deduction, NSSF deduction, and net salary.

## How It Works

The application works in the following steps:

Event Listener:

An event listener is attached to the salaryForm submit button. When the form is submitted, the default form submission is prevented using e.preventDefault().
Input Validation:

It checks whether the user has entered valid numeric values for basic salary and benefits using parseFloat. If either input is invalid, an alert prompts the user to correct the inputs.
Gross Salary Calculation:

Gross salary is computed by adding the basic salary and benefits.
Tax Calculation (Progressive Tax Rates):
Tax is calculated based on the following progressive tax brackets:
10% tax for gross salary up to 24,000.
15% tax on income between 24,001 and 40,000.
20% tax on income between 40,001 and 80,000.
25% tax on income between 80,001 and 120,000.
30% tax on income above 120,000.
NHIF Deduction:

A fixed NHIF deduction is applied based on the following salary ranges:
Salary ≤ 5,999: Deduction of 150.
Salary ≤ 7,999: Deduction of 300.
Salary ≤ 11,999: Deduction of 400.
Salary ≤ 14,999: Deduction of 500.
Salary ≤ 19,999: Deduction of 600.
Salary ≤ 24,999: Deduction of 750.
Salary > 24,999: Deduction of 800.
NSSF Deduction:

A fixed deduction of 6% of the gross salary is calculated as the NSSF contribution.
Net Salary Calculation:

The net salary is computed by subtracting the tax, NHIF, and NSSF deductions from the gross salary.

## formatting:

The calculated results (gross salary, tax, NHIF, NSSF, and net salary) are formatted with commas to make the numbers more readable (e.g., "12,345.67").

## Display Results:

The results are displayed in a hidden section on the page (#results). This section is made visible once the calculation is completed.


