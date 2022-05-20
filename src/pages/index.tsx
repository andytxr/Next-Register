import Buttons from '../components/Buttons';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Form from '../components/Form';
import useClients from '../hooks/useClients';

export default function Home() {

  let { selectedClient, removedClient, saveClient , client, clients, newClient, visible, setVisible} = useClients()

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

