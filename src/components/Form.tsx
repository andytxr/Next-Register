import { useState } from 'react';

import Input from './Input';
import Client from '../core/Client';
import Buttons from './Buttons';

interface FormProps{

    client: Client
    clientCanceled?: () => void
    clientChanged?: (client: Client) => void
    
}

export default function Form(props: FormProps){

    let id = props.client?.id ?? null
    let [name, setName]= useState(props.client?.name ?? '');
    let [age, setAge] = useState(props.client?.age ?? 0);

    return(

        <div>
            {id ? (

                <Input readOnly text="Código" value={id} className="mb-5"/>

            ) : false}
            <Input text="Nome" value={name} valueChanged={setName} className="mb-5"></Input>
            <Input text="Idade" type="number" value={age} valueChanged={setAge}></Input>
            <div className="flex justify-end mt-7">
                <Buttons color="blue" className="mr-2" onClick={() => props.clientChanged?.(new Client(name, age, id))}>
                    {id ? 'Alterar' : 'Salvar'} 
                </Buttons>
                <Buttons onClick={props.clientCanceled}>
                    Cancelar
                </Buttons>
            </div>
        </div>


    )

}