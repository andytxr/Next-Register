import Buttons from '../components/Buttons';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';
import Form from '../components/Form';
import { useEffect, useState } from 'react';
import ClientRepo from '../core/ClientRepo';
import ClientCollection from '../backend/db/ClientCollection';

export default function Home() {

  let repo: ClientRepo = new ClientCollection()
  let [client, setClient] = useState<Client>(Client.voidClient())
  let [clients, setClients] = useState<Client[]>([])
  let [visible, setVisible] = useState<"table" | "form">("table");

  useEffect(getAll, [])

  function selectedClient(client: Client){

    setClient(client)
    setVisible("form")

  }

  function getAll(){

    repo.getAll().then(clients=>{

      setClients(clients);
      setVisible("table");

    })

  }

  function newClient(client: Client){

    setClient(Client.voidClient());
    setVisible("form");

  }

  async function removedClient(client: Client){

    await repo.remove(client);
    getAll();

  }

  async function saveClient(client: Client){

    await repo.save(client);
    getAll();

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

