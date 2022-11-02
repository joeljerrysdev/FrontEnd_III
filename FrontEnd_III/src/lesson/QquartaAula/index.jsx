import './style.scss'
export function QquartaAula(){
        const componentsFinded = [
            {
                id: 1,
                title: 'Vídeo Component',
                image: 'https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939__480.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur.'
            },
            {
                id: 2,
                title: 'Input Component',
                image: 'https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770__480.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur.'
            },
            {
                id: 3,
                title: 'Button Component',
                image: 'https://cdn.pixabay.com/photo/2022/10/06/06/21/halloween-7502086__480.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur.'
            }
        ]
        return(
            <main className='quarta-aula-component'>
                <h1 className='main-title'>Componentes identificados</h1>
                <ul className='components-finded'>
                    {
                        componentsFinded.map(
                            component =>(
                                <li key={component.id}>
                                    <img src={component.image}/>
                                    <h1>{component.title}</h1>
                                    <p>{component.text}</p>
                                </li>
                            )
                        )
                    }
                </ul>
            </main>
    )
}