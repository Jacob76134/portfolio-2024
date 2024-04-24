"use client"

import { useState, useEffect, useRef } from "react";
import { Dropdown, DropdownItem, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { formInputs } from "./form-fields";
import { useRouter } from "next/navigation"
import Lenis from "@studio-freight/lenis";

export default function ContactForm() {
    const router = useRouter();

    const selectRef = useRef<HTMLDivElement | null>(null);
    const [formState, setFormState] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleInputChange = (name: string, value: string | number) => {
        let selectedValue: string | undefined = value.toString(); // Default value for non-dropdown inputs

        // For dropdown inputs, value is the index of the selected option
        // Retrieve the text associated with the selected option
        if (typeof value === 'string' && !isNaN(parseInt(value))) {
            const index = parseInt(value);
            selectedValue = formInputs
                .flatMap(sectionData => sectionData.section)
                .find(input => input.name === name)?.options?.[index];
        }

        setFormState(prevData => ({
            ...prevData,
            [name]: selectedValue
        }));
    };

    useEffect(() => {
        if( selectRef.current ) {
            // Initialize Lenis
            const lenisDropdown = new Lenis({
                lerp: 0.1,
                wrapper: selectRef.current,
                content: selectRef.current,
                wheelEventsTarget: selectRef.current
            });
        
            // Set up a requestAnimationFrame loop to call the raf method of the lenis instance
            function raf(time: any) {
                lenisDropdown.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }
    }, [dropdownOpen]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // console.log(formState);
        console.log('form submitted');

        const formattedData = JSON.stringify(formState);
        
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formattedData,
            });
    
            const responseData = await response.json();
            // console.log(responseData.message);
            
            if (response.ok) {
                console.log('Form submitted successfully:', responseData);
                // Handle success responses, possibly clear form or show a success message
                router.push('/thank-you');
            } else {
                console.error('Form submission error:', responseData);
                // Handle server errors or invalid responses
            }
    
        } catch (error) {
            console.error('Network error:', error);
            // Handle network errors or unexpected issues
        }
    };

    return (
        <div className="space-y-4">

            <form onSubmit={handleSubmit} className="border-t-1 border-gray-300 pt-4">
            
                {/* Loop over form sections */}
                {formInputs.map((sectionData, i) => {
                    const { title, section } = sectionData;
                    
                    return (
                        <div key={i}>
                            <p className="my-8 text-base leading-6 font-bold">{title}</p>

                            <div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {/* Loop over section inputs */}
                                        {section.map((input, i) => {
                                            const {name, type, options, required, double} = input;
                                            const colSpan = type === "textarea" || double ? "col-span-2" : "col-span-1";

                                            return (
                                                <div key={i} className={`${colSpan}`}>

                                                    {/* Inputs */}
                                                    {(type === "text" || type === "number" || type === "email") && (
                                                            <Input 
                                                                label={name}
                                                                labelPlacement="outside"
                                                                variant="bordered"
                                                                type={type}
                                                                placeholder=" "
                                                                isRequired={required}
                                                                onChange={(e) => handleInputChange(name, e.target.value)}
                                                            />
                                                    )}

                                                    {/* Dropdowns */}
                                                    {(type === "dropdown" && options) && (
                                                        <Select 
                                                            label={name}
                                                            labelPlacement="outside"
                                                            variant="bordered"
                                                            placeholder=" "
                                                            isRequired={required}
                                                            onChange={(e) => handleInputChange(name, e.target.value)}
                                                            onOpenChange={(isOpen:boolean) => {isOpen ? setDropdownOpen(true) : setDropdownOpen(false)}}
                                                            scrollRef={selectRef}
                                                        >
                                                            {options?.map((option, i) => {
                                                                return (
                                                                    <SelectItem key={i} value={option.toString()}>{option}</SelectItem>
                                                                )
                                                            })}
                                                        </Select>
                                                    )}

                                                    {/* Textarea */}
                                                    {(type === "textarea") && (
                                                        <Textarea 
                                                            label={name}
                                                            labelPlacement="outside"
                                                            variant="bordered"
                                                            type={type}
                                                            placeholder=" "
                                                            isRequired={required}
                                                            onChange={(e) => handleInputChange(name, e.target.value)}
                                                        />
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                            </div>
                        </div>
                    )
                })}

                <div className="border-b-1 border-gray-300 mt-12 mb-8" />

                <div className="flex justify-end">
                    <button className="btn btn-blue" type="submit">Send</button>
                </div>

            </form>
        </div>
    )
}