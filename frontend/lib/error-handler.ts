// Error handling utilities for production

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true,
  ) {
    super(message)
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

export const errorHandler = {
  handleError: (error: any) => {
    console.error("[ERROR]", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    })

    if (error instanceof AppError) {
      return {
        statusCode: error.statusCode,
        message: error.message,
      }
    }

    return {
      statusCode: 500,
      message: "Internal Server Error",
    }
  },

  logError: (error: any, context: string) => {
    console.error(`[${context}]`, {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    })
  },
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): boolean => {
  return password.length >= 8
}

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, "")
}
