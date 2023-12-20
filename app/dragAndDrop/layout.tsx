"use client"
import { Inter } from 'next/font/google';
import { AppStateProvider } from './state/DragAndDropContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <DndProvider backend={Backend} >
          <AppStateProvider>
            {children}
          </AppStateProvider>
        </DndProvider>
    </div>
  )
}