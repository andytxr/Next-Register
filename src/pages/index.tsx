import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {

  let clients = [
    new Client('Deco', 18, '1'),
    new Client('Jhenny', 18, '2'),
    new Client('Bia', 19, '3'),
    new Client('Julia', 18, '4'),
  ]

  return (
    <div className={`

      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white

    `}>
      <Layout title="Cadastro Simples"> 
        <Table clients={clients}>

        </Table>
      </Layout>
    </div>
  )
}
