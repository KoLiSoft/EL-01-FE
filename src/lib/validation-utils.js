import { z } from "zod";

export const formatValidationErrors = (zodError) => {
        if (!(zodError instanceof z.ZodError)) {
                return {};
        }

        const errors = {};
        zodError.errors.forEach((error) => {
                errors[error.path[0]] = error.message;
        });
        return errors;
};

export const validateFormData = (schema, data) => {
        try {
                const validatedData = schema.parse(data);
                return { data: validatedData, errors: {}, success: true };
        } catch (error) {
                if (error instanceof z.ZodError) {
                        const errors = formatValidationErrors(error);
                        return { data: null, errors, success: false };
                }
                throw error;
        }
};

export const clearValidationErrors = (setValidationErrors, fieldName = null) => {
        if (fieldName) {
                setValidationErrors((prev) => ({
                        ...prev,
                        [fieldName]: "",
                }));
        } else {
                setValidationErrors({});
        }
};

export const handleInputChange = (e, formData, setFormData, setValidationErrors) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value,
        }));

        clearValidationErrors(setValidationErrors, name);
};

export const validateField = (schema, fieldName, value) => {
        try {
                const fieldSchema = schema.shape[fieldName];
                if (fieldSchema) {
                        fieldSchema.parse(value);
                        return { error: "", isValid: true };
                }
                return { error: "", isValid: true };
        } catch (error) {
                if (error instanceof z.ZodError) {
                        return { error: error.errors[0].message, isValid: false };
                }
                return { error: "Validation error", isValid: false };
        }
};
