type FormInputType = {
    title: string;
    section: Section[];
}

type Section = {
    name: string;
    
    type: 'text' | 'email' | 'dropdown' | 'number' | 'textarea';

    // 2 inputs in one row on desktop - these will become single row inputs on mobile
    double?: boolean;

    // dropdown options for dropdown type
    options?: string[];

    required?: boolean;
}

export const formInputs:FormInputType[] = [
    {title: "", section: [
        { name: "First Name", type: "text", required: true },
        { name: "Last Name", type: "text", required: true },
    ]},

    {title: "", section: [
        { name: "Company", type: "text", double: true, required: true,},
    ]},

    {title: "", section: [
        { name: "Company Association", type: "dropdown", double: true, options: [
            "Pump Supplier",
            "Pump Distributor",
            "Engineer",
            "Contractor",
        ] },
    ]},

    {title: "", section: [
        { name: "Email Address", type: "email", required: true, double: true }, 
    ]},

    {title: "", section: [
        { name: "Phone Number", type: "text", double: true },
        { name: "City", type: "text", required: false },
        { name: "State", type: "text", required: true },
    ]},

    {title: "", section: [
        { name: "Comments", type: "textarea" }
    ]},

]