import Client from '../core/Client';
import { EditIcon, TrashIcon } from './Icons';

interface TableProps{

    clients: Client[];
    selectedClient?: (client: Client) => void
    removedClient?: (client: Client) => void

}

export default function Table(props: TableProps){

    let showActions = props.removedClient || props.selectedClient

    function headerRender(){
        return(

            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {showActions ? <th className='text-center p-4'>Ações</th> : false}
            </tr>

        )
    }

    function dataRender(){

        return props.clients?.map((client, i)=>{

            return (

                <tr key={client.id} className={`

                    ${i%2===0?'bg-purple-200' : 'bg-purple-100'}
                
                `}>
                    <td className='text-left p-4'>{client.id}</td>
                    <td className='text-left p-4'>{client.name}</td>
                    <td className='text-left p-4'>{client.age}</td>
                    {showActions ? iconsRender(client) : false}
                </tr>

            )

        })

    }

    function iconsRender(client: Client){


        return(

            <td className='flex justify-center'>

                {props.selectedClient ? (

                    <button onClick={()=>props.selectedClient?.(client)} className={`
                                    
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover: bg-purple-50

                    `}>
                        {EditIcon}
                    </button>

                ) : false}
               
               {props.removedClient ? (

                    <button onClick={()=>props.removedClient?.(client)} className={`
                                    
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover: bg-purple-50

                    `}>
                        {TrashIcon}
                    </button>

                ) : false}
                
            </td>

        )

    }

    return(

        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`

                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800

            `}>
                {headerRender()}
            </thead>
            <tbody>
                {dataRender()}
            </tbody>
        </table>

    )


}