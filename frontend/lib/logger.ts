// Logging utility for production

export const logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data || "")
  },

  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error || "")
  },

  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, data || "")
  },

  debug: (message: string, data?: any) => {
    if (process.env.NODE_ENV === "development") {
      console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`, data || "")
    }
  },

  logApiCall: (method: string, endpoint: string, statusCode: number, duration: number) => {
    logger.info(`API Call: ${method} ${endpoint} - ${statusCode} (${duration}ms)`)
  },

  logDatabaseOperation: (operation: string, collection: string, duration: number) => {
    logger.info(`DB Operation: ${operation} on ${collection} (${duration}ms)`)
  },
}
