import ClientRepo from '../../core/ClientRepo';
import Client from '../../core/Client';
import {dataBase} from '../config';
import firestore, {addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc} from 'firebase/firestore'

export default class ClientCollection implements ClientRepo{

    #converter = {

        toFirestore: (client: Client) =>{

            return{
                name: client.name,
                age: client.age
            }

        },
        fromFirestore: (snapshot: firestore.QueryDocumentSnapshot, options: firestore.SnapshotOptions) => {

            let infos = snapshot.data(options);
            return new Client(infos.name, infos.age, snapshot.id);

        }

    }

    #collection = collection(dataBase, 'clients').withConverter(this.#converter);
    
    async save(client: Client): Promise<Client>{

        if (client?.id) {

            await setDoc(doc(dataBase, 'clients', client.id).withConverter(this.#converter),client,)

            return client

        } else {

            const docRef = await addDoc(this.#collection,client,)
            const doc = await getDoc(docRef)

            return doc.data()

        }
    }

    async remove(client: Client): Promise<void>{

        return await deleteDoc(doc(dataBase, 'clients', client.id))

    }

    async getAll(client: Client): Promise<Client[]>{

        const clientsCol = this.#collection
        const clientsSnapshot = await getDocs(clientsCol)
        const clientsList = clientsSnapshot?.docs.map((doc) => doc.data()) ?? []

        return clientsList

    }

}
