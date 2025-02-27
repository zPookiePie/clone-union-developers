/*import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

const useStorage = (methods:UseFormReturn) => {
    useEffect(() => {
        const storedData = localStorage.getItem("formData")
    
        if(storedData) {
            const formData =JSON.parse(storedData);
    
            Object.keys(formData).forEach((key) => {
                methods.setValue( key, formData[key])
            })
        }

    },[methods])

    useEffect(() => {
        const subcription = methods.watch((value) => {
            localStorage.setItem("formData",JSON.stringify(value))
        })

        return () => subcription.unsubscribe()
    },[methods])
}


export default useStorage;*/



import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "@/components/hooks/ValidationForm";

const useStorage = (methods: UseFormReturn<FormData>) => {
    useEffect(() => {
        const storedData = localStorage.getItem("formData");

        if (storedData) {
            const formData: FormData = JSON.parse(storedData);

            Object.keys(formData).forEach((key) => {
                methods.setValue(key as keyof FormData, formData[key as keyof FormData]);
            });
        }
    }, [methods]);

    useEffect(() => {
        const subscription = methods.watch((value) => {
            localStorage.setItem("formData", JSON.stringify(value));
        });

        return () => subscription.unsubscribe();
    }, [methods]);
};

export default useStorage;
