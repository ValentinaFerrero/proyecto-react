const products = [
    {id: "1", name: "almohaditas", price: "500", category: "cereales" },
    {id: "2", name: "bolitas de chocolate", price: "550", category: "cereales" },
    {id: "3", name: "azucaritas", price: "400", category: "cereales" },
    {id: "4", name: "ositos de miel", price: "600", category: "cereales" },

    //frutos secos
    {id: "5", name: "almendras", price: "2200", category: "frutos secos" },
    {id: "6", name: "nueces", price: "2500", category: "frutos secos" },
    {id: "7", name: "castañas", price: "1500", category: "frutos secos" },

    //especias
    {id: "8", name: "curcuma", price: "1500", category: "especias" },
    {id: "9", name: "comino", price: "1000", category: "especias" },
    {id: "10", name: "oregano", price: "900", category: "especias" },
];

//getproduct
export const getproduct = (id) => {
    return new Promise  ((resolve, reject) => {
        setTimeout(() => {
            const product = products.find (p => p.id === id );
        if (product){
            resolve (product)
        }else{
            reject ("no existe el producto");
        }
        }, 1000)
    });
};

//getPorducts
export const getProducts = (category) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            const productsFiltered = cateogry 
            ? products.filter((product) => product.category === category)
            : products;
        resolve (productsFiltered);
        }, 1000)
    })
}



