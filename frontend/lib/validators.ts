// Input validation utilities

export const validators = {
  email: (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  },

  password: (password: string): boolean => {
    return password.length >= 8
  },

  phone: (phone: string): boolean => {
    const regex = /^[0-9]{10}$/
    return regex.test(phone)
  },

  cgpa: (cgpa: number): boolean => {
    return cgpa >= 0 && cgpa <= 10
  },

  rollNo: (rollNo: string): boolean => {
    return rollNo.length > 0 && rollNo.length <= 20
  },

  url: (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  },

  fileSize: (sizeInBytes: number, maxSizeInMB: number): boolean => {
    return sizeInBytes <= maxSizeInMB * 1024 * 1024
  },

  fileType: (fileName: string, allowedTypes: string[]): boolean => {
    const extension = fileName.split(".").pop()?.toLowerCase()
    return extension ? allowedTypes.includes(extension) : false
  },
}

export const validateFormData = (data: any, schema: any): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {}

  for (const [key, rules] of Object.entries(schema)) {
    const value = data[key]
    const ruleList = rules as any[]

    for (const rule of ruleList) {
      if (rule.type === "required" && !value) {
        errors[key] = `${key} is required`
        break
      }

      if (rule.type === "email" && value && !validators.email(value)) {
        errors[key] = "Invalid email format"
        break
      }

      if (rule.type === "min" && value && value.length < rule.value) {
        errors[key] = `${key} must be at least ${rule.value} characters`
        break
      }

      if (rule.type === "max" && value && value.length > rule.value) {
        errors[key] = `${key} must not exceed ${rule.value} characters`
        break
      }
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
