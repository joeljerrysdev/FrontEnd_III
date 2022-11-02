import { Component } from 'react'
import './style.scss'
export function TerceiraAula(){
    const componentsFinded = [
        { name: 'Component Card', description: 'teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        { name: 'Component Card 2', description: 'teste 2', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        { name: 'Component Card 3', description: 'teste 3', image: '' },
        { name: 'Component Card 4 ', description: 'teste 4', image: '' },
        { name: 'Component Card 5', description: 'teste 5', image: '' },
    ]
    return(
        <main className='terceira-aula-components'>
            <h1>Lista de componetes encontrado em um sistema</h1>
            <ul className='list-component'>
                {
                    componentsFinded.map( component =>(
                        <li>
                            <img src={component.image}/>
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                        </li>
                    ))
                }
            </ul>
        </main>
    )

}