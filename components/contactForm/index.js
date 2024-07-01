"use client"
import React from 'react'
import EasyInput from '../EasyInput';
import EasyTextArea from '../EasyTextArea';

function actiona(item){
    console.log(item);
}

function ContactForm() {

    
    
  return (
    <form method='POST' action={actiona("post action active")} className="bg-white w-4/12 flex flex-col">
        <div className='flex min-h-40 p-2 py-10'>
            <div className='flex-1'>
                <EasyInput isOnlyLetter={true} inputType='text' inputLabel={"Ad"} inputVariant={"underlined"} inputRequired={true} clearButton={true} ></EasyInput>
            </div>
            <div className='flex-1'>
                <EasyInput isOnlyLetter inputLabel={"Soyad"} inputVariant={"underlined"} inputRequired={true} clearButton={true} ></EasyInput>
            </div>
        </div>
        <div className='flex min-h-40 p-2 py-8'>
            <EasyInput inputLabel={"E-posta"} inputType='email' inputVariant={"underlined"} inputRequired={true} clearButton={true} maxLength={20}></EasyInput>
        </div>
        <div className='flex min-h-40 p-2 py-8'>
            <EasyInput inputLabel={"Konu"} inputVariant={"underlined"} inputRequired={true} clearButton={true} customValidationMessage="karakter uzunluğu 2-20" ></EasyInput>
        </div>
        <div className='flex min-h-40 p-2 py-8'>
            <EasyTextArea label='Açıklama' variant="underlined" labelPlacement="inside" isRequired={true} />
        </div>
        <div className="flex min-h-20 px-6 pb-8 justify-center">
            <button type='submit' className="hover:border-3 hover:border-blue-600 hover:text-black hover:bg-transparent tracking-wider bg-blue-600 text-xl text-white font-bold px-6 py-2 rounded-3xl max-h-12 flex items-center text-center justify-center">Gönder</button>
        </div>
    </form>

  )
}

export default ContactForm