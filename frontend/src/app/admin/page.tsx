'use client'

import AdminPageTemplate from "@/components/AdminPageTemplate"
import SalesGraph from "./_components/dashboard/SalesGraph"
import Summary from "./_components/dashboard/Summary"

const AdminPage: React.FC = () => {
  return (
    <AdminPageTemplate title="Dashboard">
        <div className="flex flex-col gap-5 h-fit">
          <Summary/>
          <div>
            <SalesGraph/>
          </div>
        </div>
    </AdminPageTemplate>    
  )
}

export default AdminPage
