import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const [form, setForm] = useState({name:'', email:'', password:''});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await API.post('/auth/signup', form);
      alert('Signup successful. Please login.');
      navigate('/login');
    }catch(err){
      console.error(err);
      alert(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div style={{maxWidth:400}}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input required placeholder='Name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /><br/><br/>
        <input required type='email' placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /><br/><br/>
        <input required type='password' placeholder='Password' value={form.password} onChange={e=>setForm({...form,password:e.target.value})} /><br/><br/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}
