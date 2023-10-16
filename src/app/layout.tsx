import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PICTURE GALLERY',
  description: 'This is A Picture Gallery Project!',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"className='bg-black text-white' >
      <body className={inter.className}>
        <Navbar />
<div className='flex'>
<div><Sidebar/></div>
<div className='w-full'>{children}</div>
</div>

      </body>
    </html>
  )
}
