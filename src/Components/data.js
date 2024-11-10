import video1 from './assets/video1.mp4';
import video2 from './assets/video2.mp4'

export const looks = [
    {
        id: 1,
        media: [
            {
                type: 'image',
                url:'https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg',
                products: [
                    {
                        id: 5,
                        name: 'Nike Shoes',
                        price: 949.99,
                        position: { x: 30, y: 60 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 2,
        media: [
            {
                type: 'video',
                url: video2,
                products: [
                    {
                        id: 1,
                        name: 'Jacket',
                        price: 199.99,
                        // position: { x: 50, y: 30 },
                    },
                    {
                        id: 2,
                        name: 'T-Shirt',
                        price: 29.99,
                        // position: { x: 85, y: 55 },
                    },
                ],
            },
            {
                type: 'image',
                url: "https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg",
                products: [
                    {
                        id: 1,
                        name: 'Jacket',
                        price: 199.99,
                        position: { x: 50, y: 30 },
                    },
                    {
                        id: 2,
                        name: 'T-Shirt',
                        price: 29.99,
                        position: { x: 85, y: 55 },
                    },
                ],
            },
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2017/04/16/01/53/woman-2233820_1280.jpg',
                products: [

                    {
                        id: 3,
                        name: 'Grey Pants',
                        price: 89.99,
                        position: { x: 50, y: 40 },
                    },
                    {
                        id: 4,
                        name: 'Black Shoes',
                        price: 129.99,
                        position: { x: 50, y: 70 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 3,
        media: [

            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_1280.jpg',
                products: [
                    {
                        id: 1,
                        name: 'Nike Shoes',
                        price: 199.99,
                        position: { x: 50, y: 30 },
                    }
                ],
            },
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2021/07/21/04/35/woman-6482214_1280.jpg',
                products: [
                    {
                        id: 1,
                        name: 'Jacket',
                        price: 199.99,
                        position: { x: 70, y: 75 },
                    },
                    {
                        id: 2,
                        name: 'White Shirt',
                        price: 29.99,
                        position: { x: 50, y: 75 },
                    },
                ],
            },
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_1280.jpg',
                products: [
                    {
                        id: 1,
                        name: "Bomber Jacket",
                        price: 199.99,
                        position: { x: 50, y: 30 },
                    },
                ],
            },
            {
                type: 'video',
                url: video2,
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 200,
        saved: false,
    },
    {
        id: 100,
        media: [
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2022/02/04/12/49/woman-6992691_1280.jpg',
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 101,
        media: [
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2020/10/23/16/50/woman-5679284_1280.jpg',
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 102,
        media: [
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg',
                products: [
                    {
                        id: 1,
                        name: 'Leather Jacket',
                        price: 199.99,
                        position: { x: 50, y: 30 },
                    }
                ],
            },
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2021/07/21/04/35/woman-6482214_1280.jpg',
                products: [
                    {
                        id: 1,
                        name: 'Jacket',
                        price: 199.99,
                        position: { x: 70, y: 75 },
                    },
                    {
                        id: 2,
                        name: 'T-Shirt',
                        price: 29.99,
                        position: { x: 50, y: 75 },
                    },
                ],
            },
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_1280.jpg',
                products: [
                    {
                        id: 1,
                        name: 'Jacket',
                        price: 199.99,
                        position: { x: 50, y: 30 },
                    },
                ],
            },
            {
                type: 'video',
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                products: [
                    {
                        id: 5,
                        name: 'Trendy Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
            {
                type: 'video',
                url: video1,
                products: [
                    {
                        id: 5,
                        name: 'Trendy Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 103,
        media: [
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2022/02/04/12/49/woman-6992691_1280.jpg',
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 104,
        media: [
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2020/10/23/16/50/woman-5679284_1280.jpg',
                products: [
                    {
                        id: 5,
                        name: 'Complete Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 105,
        media: [
            {
                type: 'image',
                url: 'https://cdn.pixabay.com/photo/2020/10/17/17/41/girl-5662873_1280.jpg',
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 106,
        media: [
            {
                type: 'image',
                url: 'https://images.pexels.com/photos/9154696/pexels-photo-9154696.jpeg?auto=compress&cs=tinysrgb&w=800',
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 107,
        media: [
            {
                type: 'image',
                url: 'https://images.pexels.com/photos/2907034/pexels-photo-2907034.jpeg?auto=compress&cs=tinysrgb&w=800',
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 108,
        media: [
            {
                type: 'image',
                url: 'https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=800',
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 109,
        media: [
            {
                type: 'video',
                url: video2,
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
    {
        id: 110,
        media: [
            {
                type: 'image',
                url: 'https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=800',
                products: [
                    {
                        id: 5,
                        name: 'Outfit',
                        price: 449.99,
                        position: { x: 50, y: 50 },
                    },
                ],
            },
        ],
        likes: 100,
        saved: false,
    },
]