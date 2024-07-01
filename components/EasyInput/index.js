"use client"
import React from 'react'
import { Input } from '@nextui-org/react';
    


function EasyInput({inputLabel="", inputType="text", inputVariant, inputRequired=false, clearButton=false ,customValidationMessage="",isOnlyLetter=false, minLength=3,maxLength=6}) {
    const [value, setValue] = React.useState("");

    const validate = (value) => {
        if (inputType === "text") {
            const regex = isOnlyLetter
                ? new RegExp(`^[A-Z ._%+-\\s]{${minLength},${maxLength}}$`, 'i')
                : new RegExp(`^[A-Z0-9 ._%+-\\s]{${minLength},${maxLength}}$`, 'i');
            return value.match(regex);
        } else if (inputType === "email") {
                const regex = new RegExp(`^[A-Z0-9._%+-]+@[A-Z0-9.-]{3,}$`, 'i');
            return value.match(regex);
        } else {
            const regex = new RegExp(`^[A-Z0-9 ._%+-\\s]{${minLength},${maxLength}}$`, 'i');
            return value.match(regex);
        }
    };



    const isInvalid = React.useMemo(() => {
        if (value === ""){
            return false;
        }

        return validate(value) ? false : true;
    }, [value]);


    return (
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 px-4">
            {
                inputRequired?
                    <Input 
                        value={value}
                        isClearable={clearButton}
                        type={inputType}
                        variant={inputVariant}
                        label={inputLabel}
                        maxLength={maxLength}
                        minLength={minLength}

                        isRequired={inputRequired}
                        isInvalid={isInvalid}
                        color={isInvalid || value==""? "danger" : ""}
                        errorMessage={customValidationMessage===""?"Lütfen geçerli bir "+(inputLabel==""?"içerik":inputLabel)+" giriniz":customValidationMessage}
                        onValueChange={setValue}
                        required

                        
                    />:
                    <Input 
                        value={value}
                        isClearable={clearButton}
                        type={inputType}
                        variant={inputVariant}
                        onValueChange={setValue}
                        label={inputLabel}
                        maxLength={maxLength}
                        minLength={minLength}
                    />
            }
        </div>
        )
}

export default EasyInput