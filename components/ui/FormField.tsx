import React from "react";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
// I rmoved FormFiled from the import statement as it was not used in the code


interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    label: string;
    name: Path<T>;
    placeholder: string;
    type?: 'text' | 'email' | 'password' | 'file'
}

const FormField = ({ control, name, label, placeholder, type = "text" }: FormFieldProps<T>) => (
    <Controller name={name} control={control} render={({ field }) => (
        <FormItem>
            <FormLabel className=" label">{label}</FormLabel>
            <FormControl>
                <Input className="input" placeholder={placeholder} type={type} {...field} />
            </FormControl>

            <FormMessage />
        </FormItem>
    )}
    />
)

export default FormField;