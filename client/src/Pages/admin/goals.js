import React from 'react'
import AdminSidebar from "../../components/admin/Dashboard/sidebar";
import SearchBar from '../../components/admin/Goals/SearchBar'

function goals() {
  return (
    <div
      style={{
        display: "flex",
        background: "var(--Surface, #F2F5FA)",
        height: "100vh",
      }}
    >
      <AdminSidebar />
      <div
        style={{
          marginLeft: "12.5%",
          width: "100%",
          height: "100%",
          padding: "0% 4%",
        }}
      >
        <SearchBar />
      </div>
    </div>
  )
}

export default goals