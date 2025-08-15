import { z } from "zod";

// Validation constants
const VALIDATION_RULES = {
        CONTACT_MESSAGE: {
                MIN_LENGTH: 20,
        },
        CONTACT_NAME: {
                MIN_LENGTH: 2,
        },
        CONTACT_SUBJECT: {
                MIN_LENGTH: 5,
        },
        COURSE_LEVELS: ["beginner", "intermediate", "advanced"],
        COURSE_TITLE: {
                MIN_LENGTH: 5,
        },
        DESCRIPTION: {
                MIN_LENGTH: 20,
        },
        FULL_NAME: {
                MIN_LENGTH: 2,
        },
        PASSWORD: {
                MIN_LENGTH: 6,
        },
        PHONE: {
                MIN_LENGTH: 10,
        },
        RATING: {
                MAX: 5,
                MIN: 1,
        },
        REVIEW_COMMENT: {
                MIN_LENGTH: 10,
        },
        TRANSACTION_AMOUNT: {
                MIN: 1000,
        },
        TRANSACTION_TYPES: ["deposit", "withdrawal"],
};

// Error messages
const ERROR_MESSAGES = {
        AMOUNT: {
                MIN_TRANSACTION: `Số tiền tối thiểu là ${VALIDATION_RULES.TRANSACTION_AMOUNT.MIN.toLocaleString()} VNĐ`,
        },
        INVALID: {
                COURSE_LEVEL: "Cấp độ không hợp lệ",
                EMAIL: "Email không hợp lệ",
                PASSWORD_MISMATCH: "Mật khẩu xác nhận không khớp",
                TRANSACTION_TYPE: "Loại giao dịch không hợp lệ",
        },
        MIN_LENGTH: {
                CONTACT_MESSAGE: `Nội dung phải có ít nhất ${VALIDATION_RULES.CONTACT_MESSAGE.MIN_LENGTH} ký tự`,
                CONTACT_NAME: `Tên phải có ít nhất ${VALIDATION_RULES.CONTACT_NAME.MIN_LENGTH} ký tự`,
                CONTACT_SUBJECT: `Tiêu đề phải có ít nhất ${VALIDATION_RULES.CONTACT_SUBJECT.MIN_LENGTH} ký tự`,
                COURSE_TITLE: `Tiêu đề khóa học phải có ít nhất ${VALIDATION_RULES.COURSE_TITLE.MIN_LENGTH} ký tự`,
                DESCRIPTION: `Mô tả phải có ít nhất ${VALIDATION_RULES.DESCRIPTION.MIN_LENGTH} ký tự`,
                FULL_NAME: `Họ tên phải có ít nhất ${VALIDATION_RULES.FULL_NAME.MIN_LENGTH} ký tự`,
                PASSWORD: `Mật khẩu phải có ít nhất ${VALIDATION_RULES.PASSWORD.MIN_LENGTH} ký tự`,
                PHONE: `Số điện thoại không hợp lệ`,
                REVIEW_COMMENT: `Nhận xét phải có ít nhất ${VALIDATION_RULES.REVIEW_COMMENT.MIN_LENGTH} ký tự`,
        },
        NEGATIVE: {
                PRICE: "Giá không được âm",
        },
        RANGE: {
                RATING: `Đánh giá phải từ ${VALIDATION_RULES.RATING.MIN}-${VALIDATION_RULES.RATING.MAX}`,
        },
        REQUIRED: {
                AMOUNT: "Số tiền là bắt buộc",
                CATEGORY: "Danh mục là bắt buộc",
                COMMENT: "Nhận xét là bắt buộc",
                CONFIRM_PASSWORD: "Xác nhận mật khẩu là bắt buộc",
                DESCRIPTION: "Mô tả là bắt buộc",
                EMAIL: "Email là bắt buộc",
                FULL_NAME: "Họ tên là bắt buộc",
                MESSAGE: "Nội dung là bắt buộc",
                NAME: "Tên là bắt buộc",
                PASSWORD: "Mật khẩu là bắt buộc",
                PAYMENT_METHOD: "Phương thức thanh toán là bắt buộc",
                PHONE: "Số điện thoại là bắt buộc",
                PRICE: "Giá là bắt buộc",
                SUBJECT: "Tiêu đề phải có ít nhất 5 ký tự",
                TITLE: "Tiêu đề là bắt buộc",
        },
};

export const loginSchema = z.object({
        email: z.email(ERROR_MESSAGES.INVALID.EMAIL).min(1, ERROR_MESSAGES.REQUIRED.EMAIL),
        password: z
                .string()
                .min(VALIDATION_RULES.PASSWORD.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.PASSWORD)
                .min(1, ERROR_MESSAGES.REQUIRED.PASSWORD),
});

export const registerSchema = z
        .object({
                confirmPassword: z.string().min(1, ERROR_MESSAGES.REQUIRED.CONFIRM_PASSWORD),
                email: z.email(ERROR_MESSAGES.INVALID.EMAIL).min(1, ERROR_MESSAGES.REQUIRED.EMAIL),
                fullName: z
                        .string()
                        .min(VALIDATION_RULES.FULL_NAME.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.FULL_NAME)
                        .min(1, ERROR_MESSAGES.REQUIRED.FULL_NAME),
                password: z
                        .string()
                        .min(VALIDATION_RULES.PASSWORD.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.PASSWORD)
                        .min(1, ERROR_MESSAGES.REQUIRED.PASSWORD),
                phone: z
                        .string()
                        .min(VALIDATION_RULES.PHONE.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.PHONE)
                        .min(1, ERROR_MESSAGES.REQUIRED.PHONE),
        })
        .refine((data) => data.password === data.confirmPassword, {
                message: ERROR_MESSAGES.INVALID.PASSWORD_MISMATCH,
                path: ["confirmPassword"],
        });

export const forgotPasswordSchema = z.object({
        email: z.email(ERROR_MESSAGES.INVALID.EMAIL).min(1, ERROR_MESSAGES.REQUIRED.EMAIL),
});

export const profileSchema = z.object({
        address: z.string().optional(),
        bio: z.string().optional(),
        fullName: z
                .string()
                .min(VALIDATION_RULES.FULL_NAME.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.FULL_NAME)
                .min(1, ERROR_MESSAGES.REQUIRED.FULL_NAME),
        phone: z
                .string()
                .min(VALIDATION_RULES.PHONE.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.PHONE)
                .min(1, ERROR_MESSAGES.REQUIRED.PHONE),
});

export const courseSchema = z.object({
        category: z.string().min(1, ERROR_MESSAGES.REQUIRED.CATEGORY),
        description: z
                .string()
                .min(VALIDATION_RULES.DESCRIPTION.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.DESCRIPTION)
                .min(1, ERROR_MESSAGES.REQUIRED.DESCRIPTION),
        level: z.enum(VALIDATION_RULES.COURSE_LEVELS, {
                errorMap: () => ({ message: ERROR_MESSAGES.INVALID.COURSE_LEVEL }),
        }),
        price: z.number().min(0, ERROR_MESSAGES.NEGATIVE.PRICE).min(1, ERROR_MESSAGES.REQUIRED.PRICE),
        title: z
                .string()
                .min(VALIDATION_RULES.COURSE_TITLE.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.COURSE_TITLE)
                .min(1, ERROR_MESSAGES.REQUIRED.TITLE),
});

export const contactSchema = z.object({
        email: z.email(ERROR_MESSAGES.INVALID.EMAIL).min(1, ERROR_MESSAGES.REQUIRED.EMAIL),
        message: z
                .string()
                .min(VALIDATION_RULES.CONTACT_MESSAGE.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.CONTACT_MESSAGE)
                .min(1, ERROR_MESSAGES.REQUIRED.MESSAGE),
        name: z
                .string()
                .min(VALIDATION_RULES.CONTACT_NAME.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.CONTACT_NAME)
                .min(1, ERROR_MESSAGES.REQUIRED.NAME),
        subject: z
                .string()
                .min(VALIDATION_RULES.CONTACT_SUBJECT.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.CONTACT_SUBJECT)
                .min(1, ERROR_MESSAGES.REQUIRED.SUBJECT),
});

export const reviewSchema = z.object({
        comment: z
                .string()
                .min(VALIDATION_RULES.REVIEW_COMMENT.MIN_LENGTH, ERROR_MESSAGES.MIN_LENGTH.REVIEW_COMMENT)
                .min(1, ERROR_MESSAGES.REQUIRED.COMMENT),
        rating: z
                .number()
                .min(VALIDATION_RULES.RATING.MIN, ERROR_MESSAGES.RANGE.RATING)
                .max(VALIDATION_RULES.RATING.MAX, ERROR_MESSAGES.RANGE.RATING),
});

export const transactionSchema = z.object({
        amount: z
                .number()
                .min(VALIDATION_RULES.TRANSACTION_AMOUNT.MIN, ERROR_MESSAGES.AMOUNT.MIN_TRANSACTION)
                .min(1, ERROR_MESSAGES.REQUIRED.AMOUNT),
        method: z.string().min(1, ERROR_MESSAGES.REQUIRED.PAYMENT_METHOD),
        type: z.enum(VALIDATION_RULES.TRANSACTION_TYPES, {
                errorMap: () => ({ message: ERROR_MESSAGES.INVALID.TRANSACTION_TYPE }),
        }),
});
