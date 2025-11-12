"use client"

import { useState, useCallback } from "react"

export interface Notification {
  id: string
  type: "success" | "warning" | "info" | "error"
  title: string
  message: string
  timestamp: string
  read: boolean
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = useCallback((type: Notification["type"], title: string, message: string) => {
    const id = Date.now().toString()
    const notification: Notification = {
      id,
      type,
      title,
      message,
      timestamp: new Date().toLocaleTimeString(),
      read: false,
    }

    setNotifications((prev) => [notification, ...prev])

    // Auto-remove after 5 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 5000)

    return id
  }, [])

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  return {
    notifications,
    addNotification,
    markAsRead,
    removeNotification,
  }
}
