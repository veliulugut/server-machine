import contactBg from "@/assets/img/contact/contact-img.jpg";
import { useState } from "react";

export default function ContactSectionOne(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });
            if (!res.ok) throw new Error("failed");
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            const subject = "İletişim Formu";
            const body = `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`;
            const mailto = `mailto:ebru.culhaa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailto;
            setStatus("mailto");
        }
    };

    return (
        <div className="contact-section">
            <div className="contact-bg" style={{ backgroundImage: `url(${contactBg})`}}>
            </div>
            <div className="contact-form-wrap gray-bg">
                <div className="section-title">
                    <h6>Bizimle İletişime Geçin</h6>
                    <h2>Bilgi için bizimle iletişime geçmekten çekinmeyin</h2>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Ad" value={name} onChange={(e)=>setName(e.target.value)} required/>
                        <input type="email" placeholder="E-posta" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Mesaj" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
                        <input type="submit" value={status === "sending" ? "Gönderiliyor..." : "Gönder"} disabled={status === "sending"}/>
                        {status === "success" && <p>Mesajınız başarıyla gönderildi.</p>}
                        {status === "mailto" && <p>E‑posta istemciniz üzerinden gönderim yapılıyor.</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}
