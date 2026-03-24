"use client"

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"

interface ContactFormData {
    fullName: string;
    email: string;
    subject: string;
    message: string
}

type StatusState = 'success' | 'loading' | 'idle' | 'error'

const ContactUsForm:React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({fullName: '',email: '',subject: '',message: ''})
    const {fullName, email, subject, message} = formData
    const [status, setStatus] = useState<StatusState>("idle");
    const [feedBack, setFeedBack] = useState<string>("");

    const isFormValid = useMemo(() => {
        return Object.values(formData).every(value => value.trim() !== '');
    }, [formData]);

    const handleUpdateInput = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof ContactFormData) => {
        setFormData((previous) => {
            return {
                ...previous,
                [field] : e.target.value
            }
        })
    }

    useEffect(() => {
        if (!feedBack) return 

        const clearMessage = setTimeout(() => {
            setFeedBack("")
        }, 5000)

        return () => clearTimeout(clearMessage)
    },[feedBack])

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        
        setStatus('loading');

        try {
            const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })

        const json = await response.json();

        if (!response.ok) {
            setStatus('error');
            setFeedBack(json.message);
            return;
        }

        if(json.success) {
            setStatus('success');
            setFeedBack(json.message)
            setFormData({fullName: '', email: '', subject: '', message: ''});
        }

        } catch(error) {
            setStatus('error');
            if (error instanceof Error) {
                setFeedBack(error.message);
            } else {
                setFeedBack("Network error. Please check your connection.");
            }
        }
    }

    const isDisabled = !isFormValid || status === "loading"

  return (
    <div className="p-10 bg-background-alternate border border-border-white/5 w-full lg:w-140">
        <form onSubmit={(e: FormEvent) => handleSubmit(e)} className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullname" className="text-text-subdued text-[10px] font-bold">Full Name</label>
                    <input 
                        id="fullname" 
                        type="text" 
                        name="fullName"
                        value={fullName} 
                        className="border border-border-white/5 py-3.5 px-3"
                        placeholder="John Doe" 
                        onChange={(e) => handleUpdateInput(e, 'fullName')}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-text-subdued text-[10px] font-bold">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        name="" 
                        value={email}
                        className="border border-border-white/5 py-3.5 px-3"
                        placeholder="Johndoe@gmail.com"
                        onChange={(e) => handleUpdateInput(e, 'email')}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-text-subdued text-[10px] font-bold">Subject</label>
                <input 
                    id="subject" 
                    type="text" 
                    name="subject" 
                    value={subject}
                    className="border border-border-white/5 py-3.5 px-3"
                    placeholder="Project inquiry"
                    onChange={(e) => handleUpdateInput(e, 'subject')}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-text-subdued text-[10px] font-bold">Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={message}
                    className="border border-border-white/5 py-3.5 px-3 resize-none h-30.5"
                    placeholder="Tell me about the project"
                    onChange={(e) => handleUpdateInput(e, 'message')}
                />
            </div>
            <button 
                type="submit" 
                className={`${isDisabled ? "cursor-not-allowed" : "cursor-pointer"} mt-6 ${isDisabled ? 'bg-gray-600' : 'bg-background-brand'} transition-colors duration-500 text-text-black font-bold text-sm w-full py-4 text-center`}
                disabled={isDisabled}
                >
                  {status === "loading" ? "Sending Message..." : "Send Message"}
            </button>
            {(status === "error" && feedBack) && (
                <p className="text-red-500 text-xs mb-2 text-center">{feedBack}</p>
            )}

            {(status === "success" && feedBack) && (
                <p className="text-green-500 text-xs mb-2 text-center">{feedBack}</p>
            )}
        </form>
    </div>
  )
}

export default ContactUsForm