import { useState } from 'react';

function useForm<T>(initialValues: T) {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, onSubmit: ()=>void) => {
        event.preventDefault();
        onSubmit();
    };

    return {
        formData,
        handleChange,
        handleSubmit,
    };
}

export default useForm;
