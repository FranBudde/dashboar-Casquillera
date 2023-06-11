import React from 'react';

import SmallCard from './SmallCard'

import productService from '../services/products'
import userService from '../services/user'


function ContentRowMovies() {
    const [products, setProducts] = React.useState([])
    const [users, setUsers] = React.useState([])
    const [cards, setCards] = React.useState([
        {
            title: 'Total de productos',
            color: 'primary',
            quantity: 0,
            icon: 'fa-film',
            slug: 'products'
        },
        {
            title: 'Total de usuarios',
            color: 'warning',
            quantity: 0,
            icon: 'fa-user',
            slug: 'users'
        },
        // {
        //     title: 'Total de categorias',
        //     color: 'success',
        //     quantity: 0,
        //     icon: 'fa-award',
        //     slug: 'categories'
        // }
    ])

    React.useEffect(() => {
        async function getData() {
            const productsResponse = await productService.get()
            const usersResponse = await userService.get()
            setProducts(productsResponse.data)
            // Cambiar cuando se implemente servicio de usuarios
            setUsers(usersResponse.data)


            setCards(values => {
                return values.map(element => {
                    element.quantity = element.slug === 'products' ? productsResponse.meta.total : element.quantity
                    element.quantity = element.slug === 'users' ? usersResponse.meta.total : element.quantity
                    return element
                })
            })
        }
        getData()
    }, [])


    return (
        <div className="row">
            {cards.map((card, key) =>
                <SmallCard key={key} color={card.color} title={card.title} quantity={card.quantity} icon={card.icon} />
            )}
        </div>
    )
}

export default ContentRowMovies