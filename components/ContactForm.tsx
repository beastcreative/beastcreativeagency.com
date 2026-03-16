'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#111',
    border: '1px solid #333',
    color: '#fff',
    padding: '12px 16px',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '14px',
    outline: 'none',
    borderRadius: 0,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <input
          type="text"
          placeholder="First Name"
          required
          value={form.firstName}
          onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          value={form.lastName}
          onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
          style={inputStyle}
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        style={inputStyle}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        style={inputStyle}
      />
      <textarea
        placeholder="Your Message"
        required
        rows={5}
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        style={{ ...inputStyle, resize: 'vertical' }}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          background: '#ff1198',
          color: '#fff',
          padding: '14px 32px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 700,
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          border: 'none',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          borderRadius: 0,
          alignSelf: 'flex-start',
          opacity: status === 'sending' ? 0.7 : 1,
        }}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p style={{ color: '#4ade80', fontFamily: 'Raleway, sans-serif', fontSize: '14px' }}>
          Message sent! We will be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#f87171', fontFamily: 'Raleway, sans-serif', fontSize: '14px' }}>
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
