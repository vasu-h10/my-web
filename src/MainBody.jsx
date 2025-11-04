import React, { useEffect, useState } from "react";

export default function MainBody(){
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    setVendors(JSON.parse(localStorage.getItem("vendors") || "[]").filter(v=>v.status==="registered"));
  }, []);

  if(!vendors.length) return <div className="main"><p>No registered vendors yet. Please register from the profile icon.</p></div>;

  return (
    <main className="main">
      <div style={{display:"grid",gap:12}}>
        {vendors.map(v => (
          <div key={v.id} style={{padding:12, border:"1px solid #eee", borderRadius:8}}>
            <div style={{fontWeight:700}}>{v.firstName} {v.lastName}</div>
            <div style={{fontSize:12,color:"#666"}}>{v.email} · {v.location}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
