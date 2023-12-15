"use client"
import { Inter } from 'next/font/google'
import { AppStateProvider } from './state/DragAndDropContext'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <AppStateProvider>
          {children}
        </AppStateProvider>
    </div>
  )
}