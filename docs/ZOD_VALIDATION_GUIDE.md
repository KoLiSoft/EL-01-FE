# Zod Validation Guide

This guide explains how to use Zod validation in the EL-01-FE project for form validation and data integrity.

## Overview

Zod is a TypeScript-first schema declaration and validation library that provides:
- Runtime type checking
- Automatic type inference
- Rich error messages
- Schema composition and transformation

## Installation

Zod is already installed in the project:
```bash
bun add zod
```

## Basic Usage

### 1. Import Zod
```javascript
import { z } from "zod";
```

### 2. Define a Schema
```javascript
const userSchema = z.object({
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    age: z.number().min(18, "Bạn phải đủ 18 tuổi"),
});
```

### 3. Validate Data
```javascript
try {
    const validatedData = userSchema.parse(data);
    // Data is valid and typed
} catch (error) {
    if (error instanceof z.ZodError) {
        // Handle validation errors
        const errors = error.errors;
    }
}
```

## Pre-built Schemas

The project includes pre-built validation schemas in `src/lib/validation-schemas.js`:

### Available Schemas

- `loginSchema` - User login validation
- `registerSchema` - User registration validation
- `forgotPasswordSchema` - Password reset validation
- `profileSchema` - User profile update validation
- `courseSchema` - Course creation/editing validation
- `contactSchema` - Contact form validation
- `reviewSchema` - Review/rating validation
- `transactionSchema` - Financial transaction validation

### Example Usage
```javascript
import { loginSchema, registerSchema } from "../lib/validation-schemas.js";

// Use in your component
const validation = validateFormData(loginSchema, formData);
if (!validation.success) {
    setValidationErrors(validation.errors);
    return;
}
```

## Utility Functions

The project provides utility functions in `src/lib/validation-utils.js`:

### `validateFormData(schema, data)`
Validates data against a schema and returns a structured result:
```javascript
const result = validateFormData(loginSchema, formData);
if (result.success) {
    // Use result.data (validated and typed)
} else {
    // Use result.errors (validation error messages)
}
```

### `formatValidationErrors(zodError)`
Formats Zod errors into a simple object:
```javascript
try {
    schema.parse(data);
} catch (error) {
    if (error instanceof z.ZodError) {
        const errors = formatValidationErrors(error);
        // errors = { fieldName: "error message" }
    }
}
```

### `clearValidationErrors(setValidationErrors, fieldName)`
Clears validation errors for a specific field or all fields:
```javascript
// Clear specific field
clearValidationErrors(setValidationErrors, "email");

// Clear all fields
clearValidationErrors(setValidationErrors);
```

### `handleInputChange(e, formData, setFormData, setValidationErrors)`
Handles input changes and clears validation errors:
```javascript
const handleInputChange = (e) => {
    handleInputChange(e, formData, setFormData, setValidationErrors);
};
```

### `validateField(schema, fieldName, value)`
Validates a single field:
```javascript
const { isValid, error } = validateField(loginSchema, "email", emailValue);
```

## Form Implementation Example

Here's how to implement Zod validation in a React form:

```javascript
import { useState } from "react";
import { z } from "zod";
import { validateFormData, clearValidationErrors } from "../lib/validation-utils.js";
import { loginSchema } from "../lib/validation-schemas.js";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [validationErrors, setValidationErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        clearValidationErrors(setValidationErrors, name);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validation = validateFormData(loginSchema, formData);
        if (!validation.success) {
            setValidationErrors(validation.errors);
            return;
        }

        // Proceed with form submission
        setIsLoading(true);
        try {
            // API call with validation.data
        } catch (error) {
            // Handle API errors
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={`input-group ${validationErrors.email ? "error" : ""}`}>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
            </div>
            {validationErrors.email && (
                <div className="validation-error">
                    {validationErrors.email}
                </div>
            )}

            <button type="submit" disabled={isLoading}>
                {isLoading ? "Đang xử lý..." : "Đăng nhập"}
            </button>
        </form>
    );
}
```

## Schema Composition

Zod allows you to compose schemas for complex validation:

```javascript
const baseUserSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
});

const studentSchema = baseUserSchema.extend({
    studentId: z.string().min(1),
    grade: z.number().min(1).max(12),
});

const teacherSchema = baseUserSchema.extend({
    teacherId: z.string().min(1),
    subjects: z.array(z.string()).min(1),
});

const userSchema = z.discriminatedUnion("type", [
    studentSchema.extend({ type: z.literal("student") }),
    teacherSchema.extend({ type: z.literal("teacher") }),
]);
```

## Error Handling

### Custom Error Messages
```javascript
const schema = z.object({
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu quá ngắn"),
});
```

### Conditional Validation
```javascript
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
});
```

### Async Validation
```javascript
const schema = z.object({
    email: z.string().email().refine(
        async (email) => {
            const exists = await checkEmailExists(email);
            return !exists;
        },
        "Email đã tồn tại"
    ),
});
```

## Best Practices

1. **Use Pre-built Schemas**: Leverage the schemas in `validation-schemas.js` for consistency
2. **Clear Errors on Input**: Clear validation errors when users start typing
3. **Show Errors Below Fields**: Display validation errors below the corresponding input fields
4. **Use Utility Functions**: Use the provided utility functions for common operations
5. **Type Safety**: Leverage Zod's type inference for better TypeScript support
6. **Custom Messages**: Provide user-friendly error messages in Vietnamese
7. **Real-time Validation**: Consider validating fields on blur for better UX

## CSS Styling

The project includes CSS classes for validation states:

```css
.input-group.error {
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.validation-error {
    color: #dc2626;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    margin-left: 0.5rem;
}
```

## Testing

Test your validation schemas:

```javascript
import { z } from "zod";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

// Test valid data
const validData = { email: "test@example.com", password: "123456" };
const result = schema.safeParse(validData);
console.log(result.success); // true

// Test invalid data
const invalidData = { email: "invalid-email", password: "123" };
const result2 = schema.safeParse(invalidData);
console.log(result2.success); // false
console.log(result2.error.errors); // Array of validation errors
```

## Migration from Manual Validation

If you have existing manual validation, you can gradually migrate:

1. **Start with Simple Fields**: Begin with basic string/number validation
2. **Replace Error Handling**: Update error handling to use Zod errors
3. **Update UI**: Modify UI to display Zod validation errors
4. **Test Thoroughly**: Ensure all validation scenarios work correctly

## Troubleshooting

### Common Issues

1. **Import Errors**: Ensure Zod is properly imported
2. **Schema Mismatch**: Check that your data structure matches the schema
3. **Error Display**: Verify that validation errors are properly displayed
4. **Type Conflicts**: Ensure Zod types align with your component state

### Debug Tips

1. **Console Logging**: Log validation results to debug issues
2. **Schema Inspection**: Use `schema.shape` to inspect schema structure
3. **Error Details**: Log full Zod errors for debugging
4. **Step-by-step**: Validate each field individually to isolate issues

## Resources

- [Zod Documentation](https://zod.dev/)
- [Zod GitHub](https://github.com/colinhacks/zod)
- [React Hook Form + Zod](https://react-hook-form.com/docs/useform/validation#zod)
- [TypeScript + Zod](https://zod.dev/?id=typescript)
