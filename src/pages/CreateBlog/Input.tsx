import React, { useEffect, useRef } from "react"

interface InputProps {
    textSize: number
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    minHeight?: string
}
export function Input(
    {
        textSize,
        value,
        setValue,
        minHeight = "auto"
    }: InputProps
) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (!textAreaRef.current) {
            return
        }
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [value])
    return (
        <div
            className="input"
            style={
                {
                    fontSize: textSize,
                }
            }
        >
            <textarea
                ref={textAreaRef}
                rows={1}
                placeholder="Insert Blog Title"
                style={
                    {
                        minHeight: minHeight
                    }
                }
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}