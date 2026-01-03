import React, { useEffect, useRef } from "react"
import "./input.css"

interface InputProps {
    initialValue: string 
    updateFunc: (update: string) => void
    variant?: "one-line" | "multi-line"
}

export default function Input(
    {
        initialValue,
        updateFunc,
        variant = "one-line"
    }: InputProps
) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (!textAreaRef.current) {
            return
        }
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [initialValue])

    return (
        <>
            <div
                className="input-container"
            >
                <textarea
                    className={`input ${variant}`}
                    ref={textAreaRef}
                    rows={1}
                    placeholder="Insert Blog Title"
                    value={initialValue}
                    onChange={(e) => updateFunc(e.target.value)}
                />
            </div>
        </>
    )
}