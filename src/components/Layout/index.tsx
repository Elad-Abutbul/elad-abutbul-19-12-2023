import React from "react"
import { Navigate } from "../Navigate"

interface LayoutProps {
     children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
     return (
          <div>
               <Navigate />
               <div>
                    {children}
               </div>
          </div>
     )
}
