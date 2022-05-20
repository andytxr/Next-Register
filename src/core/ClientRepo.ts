import Client from './Client';

export default interface ClientRepo{

    save(client: Client): Promise<Client>
    remove(client: Client): Promise<void>
    getAll(): Promise<Client[]>

}