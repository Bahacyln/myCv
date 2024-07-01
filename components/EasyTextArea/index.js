import React, { useState } from 'react'
import { Textarea } from '@nextui-org/input'

function EasyTextArea({label="",variant="bordered",labelPlacement="inside",isRequired=false, minLength=3, maxLength=200,clearButton=false,customValidationMessage=""}) {

    const [value, setValue] = React.useState("");

    const validate = (value) => {
        const regex = new RegExp(`^[A-Z0-9 ._%+-\\s]{${minLength},${maxLength}}$`, 'i');
        return value.match(regex);
    };



    const isInvalid = React.useMemo(() => {
        if (value===""){
            console.log(label,value,1);
            return false;
        }

        return validate(value) ? false : true;
    });


  return (
    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 px-4">
        {isRequired?<Textarea
            value={value}
            minLength={minLength}
            maxLength={maxLength}
            isInvalid={isInvalid}
            color={isInvalid || value==""? "danger" : ""}
            errorMessage={customValidationMessage===""?"Lütfen geçerli bir "+(label==""?"içerik":label)+" giriniz":customValidationMessage}
            onValueChange={setValue}
            variant={variant}
            label={label}
            labelPlacement={labelPlacement}
            placeholder={isRequired?(label+"(zorunlu)"):(label+"(isteğe bağlı)")}
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            isRequired={isRequired}
            
            required
        />:
        <Textarea
            value={value}
            minLength={minLength}
            maxLength={maxLength}
            isInvalid={isInvalid}
            color={isInvalid || value==""? "danger" : ""}
            errorMessage={customValidationMessage===""?"Lütfen geçerli bir "+(label==""?"içerik":label)+" giriniz":customValidationMessage}
            onValueChange={setValue}
            variant={variant}
            label={label}
            labelPlacement={labelPlacement}
            placeholder={isRequired?(label+"(zorunlu)"):(label+"(isteğe bağlı)")}
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            isRequired={isRequired}
        />}
    </div>
  )
}

export default EasyTextArea