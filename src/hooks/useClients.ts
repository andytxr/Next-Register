import { useEffect, useState } from 'react';
import ClientRepo from '../core/ClientRepo';
import ClientCollection from '../backend/db/ClientCollection';
import Client from '../core/Client';

export default function useClients(){

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

  return{
    
    client,
    clients,
    saveClient,
    newClient,
    removedClient,
    selectedClient,
    getAll,
    visible,
    setVisible

  }

}