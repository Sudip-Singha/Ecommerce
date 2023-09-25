export const products = [
    {
        id: 'price_1NtnB8SJIyd2RFnnq7i7Lvs5',
        name: 'Earthen Bottle',
        href: '#',
        price: 3200,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 'price_1NtnCkSJIyd2RFnn7p5PHs2d',
        name: 'Nomad Tumbler',
        href: '#',
        price: 2400,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 'price_1NtnDhSJIyd2RFnnO5lrumIK',
        name: 'Focus Paper Refill',
        href: '#',
        price: 4500,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 'price_1NtnFBSJIyd2RFnnmjiYLnnu',
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: 750,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 'price_1NtnGDSJIyd2RFnnIEh121bA',
        name: 'Basic Tee Black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 600,
        color: 'Black',
    },
    {
        id: 'price_1NtokRSJIyd2RFnnUS1jJZkG',
        name: 'Basic Tee Aspen White',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in aspen white.",
        price: 600,
        color: 'Aspen White',
    },
    {
        id: 'price_1NtolNSJIyd2RFnnCADSFRBs',
        name: 'Basic Tee Charcoal',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in charcoal.",
        price: 600,
        color: 'Charcoal',
    },
    {
        id: 'price_1NtomFSJIyd2RFnnFOyzy00V',
        name: 'Basic Tee Iso Dots',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in iso dots.",
        price: 600,
        color: 'Iso Dots',
    },


]

export const getProductData = (id) => {
    const data = products.find(product => product.id === id);
    return data;
}