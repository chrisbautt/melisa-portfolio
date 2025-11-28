'use client';
import {useForm, ValidationError} from '@formspree/react';

export default function Form() {
    const [state, handleSubmit] = useForm("xovyaqly");
    if (state.succeeded) {
        return <p className="border border-[#e1e1e1] md:hover:border-[#a855f7] rounded-[10px] max-w-xl mx-auto p-4 text-center text-lg font-medium">¡Gracias por contactarme! Te responderé lo antes posible.</p>;
    }

    return (
        <>
            <form className="flex flex-col gap-6 max-w-xl mx-auto border border-[#e1e1e1] p-6 md:p-8 rounded-[15px] shadow-[5px_5px_10px] shadow-[#e1e1e1]" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Nombre
                        <input type="text" id="name" name="name" placeholder="Nombre Completo" className="py-2 px-4 border border-[#e1e1e1] rounded-[8px] bg-[#eeeef0] placeholder:text-[#999999] font-normal" />
                    </label>
                    <ValidationError prefix="Name" field="name" errors={state.errors} className='validationError' />
                </div>
                <div>
                    <label htmlFor="email">
                        Correo Electrónico
                        <input type="email" id="email" name="email" placeholder="correo@ejemplo.com" className="py-2 px-4 border border-[#e1e1e1] rounded-[8px] bg-[#eeeef0] placeholder:text-[#999999] font-normal" />
                    </label>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className='validationError' />
                </div>
                <div>
                    <label htmlFor="subject">
                        Asunto
                        <input type="text" id="subject" name="subject" placeholder="Asunto del Proyecto" className="py-2 px-4 border border-[#e1e1e1] rounded-[8px] bg-[#eeeef0] placeholder:text-[#999999] font-normal" />
                    </label>
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className='validationError' />
                </div>
                <div>
                    <label htmlFor="message">
                        Mensaje
                        <textarea id="message" name="message" placeholder="Cuéntame más sobre tu proyecto" className="min-h-[125px] py-2 px-4 border border-[#e1e1e1] rounded-[8px] bg-[#eeeef0] placeholder:text-[#999999] font-normal"></textarea>
                    </label>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className='validationError' />
                </div>
                <input type="submit" value='Enviar Mensaje' className="py-2 px-4 rounded-[8px] border border-[#a855f7] bg-[#a855f7] text-white cursor-pointer md:hover:bg-[#a855f7]/90" />
            </form>
        </>
    );
}
