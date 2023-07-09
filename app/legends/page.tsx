
import Link from 'next/link';
//import PocketBase from 'pocketbase';

async function getLegends() {

    //const db = new PocketBase('http://127.0.0.1:8090');
    //const data = await db.collection.('legends').getFullList();

    const res = await fetch('http://127.0.0.1:8090/api/collections/legends/records?page=1&perPage=100',
     { cache: 'no-store' }
    );
    const data = await res.json();
    return data?.items as any[];
}


export default async function LegendsPage() {
    const legends = await getLegends();

    return(
        <div>
            <h1>Legends:</h1>
            {legends?.map((legend) => {
                return <Legend key={legend.id} legend={legend} />;
            })}
        </div>
    );

}

function Legend({ legend }: any) {
    const { id, name, rarity, created } = legend || {};

    return (
        <Link href={ `/legends/${id}`}>
            <div>
                <h2>{ name }</h2>
                <h4>{ rarity }</h4>
                <p>{ created }</p>
            </div>
        </Link>
    )
}