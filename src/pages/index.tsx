import Buttons from '../components/Buttons';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';
import Form from '../components/Form';
import { useState } from 'react';

export default function Home() {

  let [client, setClient] = useState<Client>(Client.voidClient())
  let [visible, setVisible] = useState<"table" | "form">("table");

  let clients = [

    new Client('Deco', 18, '1'),
    new Client('Jhenny', 18, '2'),
    new Client('Bia', 19, '3'),
    new Client('Julia', 18, '4'),

  ]

  function selectedClient(client: Client){

    setClient(client)
    setVisible("form")

  }

  function removedClient(client: Client){}

  function newClient(client: Client){

    setClient(Client.voidClient());
    setVisible("form");

  }

  function saveClient(client: Client){

    setVisible("table");

  }

  return (
    <div className={`

      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white

    `}>
      <Layout title="Cadastro Simples"> 
      {visible === "table" ? (
          <>

          <div className={`
            
              flex justify-end

            `}>
              <Buttons className='mb-4' onClick={newClient}>Novo Cliente</Buttons>

          </div>

            <Table clients={clients} selectedClient={selectedClient} removedClient={removedClient} />

        </>
      ):(

        <Form client={client} clientCanceled={()=>setVisible("table")} clientChanged={saveClient}></Form>

      )}

      </Layout>
    </div>
  )
}

