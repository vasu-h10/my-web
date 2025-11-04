import React, { useState } from "react";

export default function ProfileForm({ onClose, onRegistered }) {
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", location:"" });

  function handleChange(e){
    const { name, value } = e.target;
    setForm(s => ({ ...s, [name]: value }));
  }

  function handleSubmit(e){
    e.preventDefault();
    const vendors = JSON.parse(localStorage.getItem("vendors") || "[]");
    const newV = { id: Date.now(), ...form, status:"registered" };
    vendors.push(newV);
    localStorage.setItem("vendors", JSON.stringify(vendors));
    if(onRegistered) onRegistered();
    if(onClose) onClose();
    alert("Vendor registered successfully!");
  }

  return (
    <div style={{ position:"absolute", top:60, left:10, background:"#fff", color:"#333", padding:12, borderRadius:10, boxShadow:"0 6px 18px rgba(0,0,0,0.12)", zIndex:40, width:260 }}>
      <h3 style={{margin:"0 0 8px", color:"#0066ff"}}>Complete profile</h3>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} required style={{width:"100%",padding:8,marginBottom:8}}/>
        <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} required style={{width:"100%",padding:8,marginBottom:8}}/>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} type="email" style={{width:"100%",padding:8,marginBottom:8}}/>
        <input name="location" placeholder="City" value={form.location} onChange={handleChange} style={{width:"100%",padding:8,marginBottom:8}}/>
        <button type="submit" style={{width:"100%",padding:10,background:"#0066ff",color:"#fff",border:"none",borderRadius:6}}>Register</button>
      </form>
      <button onClick={onClose} style={{marginTop:8,background:"transparent",border:"none",color:"#666",cursor:"pointer"}}>Close</button>
    </div>
  );
}
