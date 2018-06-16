import React from "react"

export default class ProductList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products: [],
            brands: [],
            loading:  false
        }
    }


    // make two apis calls simulataneous, wait for both to return
    componentDidMount() {
        this.setState({loading: true})

        Promise.all([
            fetch("http://localhost:7070/api/products")
            .then ( (response) => response.json()),
            fetch("http://localhost:7070/api/brands")
            .then ( (response) => response.json())
        ])
        .then (results => {

            let products = results[0]

            let brands = results[1]

            let brandMap = {}
            brands.map (brand => {
                brandMap[brand.id] = brand.name
            })

            let pro = products.map (product => {
                product.brandName = brandMap[product.brandId]
                return product
            })

            this.setState({brands})
            this.setState({products: pro})
            this.setState({loading: false})
        })
        
 
    }


    componentDidMount2() {
        this.setState({loading: true})

        fetch("http://localhost:7070/delayed/api/products")
        .then ( (response) => response.json())
        .then ( products => {
            console.log("got products", products)
            //data formatting, schema
            

            fetch("http://localhost:7070/delayed/api/brands")
            .then ( (response) => response.json())
            .then ( brands => {
                console.log("got brands", brands)
                    //data formatting, schema
                    // manipulation, formatting

                    let brandMap = {}
                    brands.map (brand => {
                        brandMap[brand.id] = brand.name
                    })

                    let pro = products.map (product => {
                        product.brandName = brandMap[product.brandId]
                        return product
                    })

                    this.setState({brands})
                    this.setState({products: pro})
                    this.setState({loading: false})
        
            })

        })
    }

    render() {
        return (
            <div>
                <h2>Product List</h2>

                {this.state.loading && (
                    <h2>Loading ....</h2>
                )}

                <h4>Brands</h4>
                <ul>
                    {
                        this.state.brands.map (brand => (
                            <li key={brand.id}> 
                                {brand.name}
                            </li>
                        ))
                    }
                </ul>
                <h4>Products</h4>
                <ul>
                    {
                        this.state.products.map (product => (
                            <li key={product.id}> 
                                {product.name}-{product.price}-{product.brandName}

                                <button onClick={ () => {}}>
                                  +Cart
                                </button>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        )
    }
}