import "./input.css"

interface InputProps {
    initialValue: string 
    updateFunc: (update: string) => void
    variant?: "one-line" | "multi-line"
    placeHolder?: string
}

export default function Input(
    {
        initialValue,
        updateFunc,
        variant = "one-line",
        placeHolder = "Input Here"
    }: InputProps
) {


    return (
        <>
            <div
                className={`input-container ${variant}`}
            >
                <textarea
                    className="input"
                    rows={1}
                    placeholder={placeHolder}
                    value={initialValue}
                    onChange={(e) => updateFunc(e.target.value)}
                />
            </div>
        </>
    )
}