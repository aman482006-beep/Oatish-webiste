"use client";

import { useState } from "react";

export function Socials() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    // Google Apps Script usually expects form data as URL-encoded, not multipart
    const formData = new FormData(form);
    const urlEncodedData = new URLSearchParams();
    
    // Explicitly iterate because some browsers don't support new URLSearchParams(formData)
    formData.forEach((value, key) => {
      urlEncodedData.append(key, value.toString());
    });

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyiNDErTjVPUosp6mg1d2w52FvOkRd5vk-rUN50rFt3k7mWDoFKalY9-Y_bYRSfu9-9PA/exec", {
        method: "POST",
        body: urlEncodedData,
        mode: "no-cors",
      });

      // With "no-cors", the response is opaque and response.ok is false.
      // We assume success if the fetch promise doesn't reject (e.g., no network failure).
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="socials-section" id="socials">
      <div className="socials-inner">
        <div className="section-label reveal" style={{ justifyContent: "center" }}>Find Me</div>
        <h2 className="socials-headline reveal">Let&apos;s connect<br />in the <em>real world</em></h2>
        <p className="socials-sub reveal">I share finance breakdowns, gym progress, food adventures, and real student life — follow along wherever you spend time.</p>

        <div className="social-buttons">
          <a href="https://www.instagram.com/aman.ja1n/" target="_blank" rel="noopener noreferrer" className="social-btn ig reveal">
            <span className="social-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </span>
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/aman-malu-335769344" target="_blank" rel="noopener noreferrer" className="social-btn li reveal reveal-delay-1">
            <span className="social-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </span>
            <span>LinkedIn</span>
          </a>
          <a href="https://www.youtube.com/channel/UCuE0oW8TukiUeWRwqyoRMLQ" target="_blank" rel="noopener noreferrer" className="social-btn yt reveal reveal-delay-2">
            <span className="social-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            <span>YouTube</span>
          </a>
        </div>

        <div className="contact-form-wrap reveal reveal-delay-3">
          <h3 className="contact-form-title">Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email" 
              placeholder="Your email address" 
              className="contact-input" 
              required 
              disabled={status === "loading"}
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your phone number (optional)" 
              className="contact-input" 
              disabled={status === "loading"}
            />
            <textarea 
              name="message" 
              placeholder="What's on your mind?" 
              className="contact-input" 
              required
              disabled={status === "loading"}
            ></textarea>
            <button type="submit" className="contact-submit" disabled={status === "loading"}>
              <span>{status === "loading" ? "⏳" : "✉"}</span> {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <div style={{ color: "#10b981", marginTop: "1rem", fontSize: "0.875rem", textAlign: "center", fontWeight: 500 }}>
                Message sent successfully!
              </div>
            )}
            {status === "error" && (
              <div style={{ color: "#ef4444", marginTop: "1rem", fontSize: "0.875rem", textAlign: "center", fontWeight: 500 }}>
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
