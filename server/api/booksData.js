export default defineEventHandler((event) => {
    const books = [
        {
            id: 1,
            name: 'Harry Potter and the philosophers stone',
            price: 300,
            description: `Harry Potter’s life is miserable. His parents are dead and he’s stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he’s a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.`,
            image: 'https://images.ctfassets.net/usf1vwtuqyxm/2DCs73x6P8seNobQ9zBSbO/1a5dfd6ed5fc0ed9545370470fc3d74c/English_Harry_Potter_1_Epub_9781781100219.jpg?w=914&q=70&fm=webp',
        },
        {
            id: 2,
            name: 'Lord of the Rings',
            price: 100,
            description: "The lands of Middle-earth are threatened by the forces of the Dark Lord Sauron, who only needs to find the missing One Ring to become unstoppable. Through an unlikely chain of events, the Ring has fallen into the possession of Bilbo Baggins, an unassuming hobbit of the Shire. After Bilbo retires, the Ring falls into the possession of his cousin Frodo. Finally realising the true nature of the Ring.",
            image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhGbqQATjNi-cT9rY40z_jZr62A7zIY0GOgsVk2JoU-JOQt0y1T3U_j-jkjPiHL4qDFRtJhFtLoZDVr-eB-eEAwvV1wuLtWWmvtfl_egLir85poaLVeVbjdqCvO0xIbgh0yK7r98PlG2--21c-4g7Cs5QkzNVBmzV7SMklzrga05UgijODiF_DUpiYEMA=s856',
        },
        {
            id: 3,
            name: 'Game of Thrones',
            price: 200,
            description: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne.",
            image: 'https://sm.ign.com/t/ign_in/gallery/a/a-song-of-/a-song-of-ice-and-fire-2024-box-set_h577.600.jpg',
        },
        {
            id: 4,
            name: 'The Hobbit unexpected journey',
            price: 180,
            description: "Bilbo Baggins lives a quiet, peaceful life in his comfortable hole at Bag End. Bilbo lives in a hole because he is a hobbit—one of a race of small, plump people about half the size of humans, with furry toes and a great love of good food and drink. Bilbo is quite content at Bag End, near the bustling hobbit village of Hobbiton, but one day his comfort is shattered by the arrival of the old wizard Gandalf, who persuades Bilbo",
            image: 'https://nuriakenya.com/wp-content/uploads/2023/02/The-Hobbit-nuriakenya-700x1074.jpg',
        },
        {
            id: 5,
            name: 'The Name of the Wind',
            price: 250,
            description: "The book begins with Kvothe, who is now living in anonymity as an innkeeper in a small town called Newarre. A chronicler named Chronicler recognizes Kvothe and convinces him to share his life story, promising to write it down accurately. Kvothe agrees, and thus begins the tale of his extraordinary journey.",
            image: 'https://grimoakpress.com/cdn/shop/files/cover-notw-bw.jpg?v=1707323599&width=823',
        },
        {
            id: 6,
            name: 'The Hobbit',
            description: "Bilbo Baggins lives a quiet, peaceful life in his comfortable hole at Bag End. Bilbo lives in a hole because he is a hobbit—one of a race of small, plump people about half the size of humans, with furry toes and a great love of good food and drink. Bilbo is quite content at Bag End, near the bustling hobbit village of Hobbiton, but one day his comfort is shattered by the arrival of the old wizard Gandalf, who persuades Bilbo",
            price: 180,
            image: 'https://nuriakenya.com/wp-content/uploads/2023/02/The-Hobbit-nuriakenya-700x1074.jpg',
        },
        {
            id: 7,
            name: 'Harry Potter',
            description: 'Harry Potter’s life is miserable. His parents are dead and he’s stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he’s a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.',
            price: 300,
            image: 'https://images.ctfassets.net/usf1vwtuqyxm/2DCs73x6P8seNobQ9zBSbO/1a5dfd6ed5fc0ed9545370470fc3d74c/English_Harry_Potter_1_Epub_9781781100219.jpg?w=914&q=70&fm=webp',
        },
        {
            id: 8,
            name: 'Game of Thrones',
            price: 200,
            description: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne.",
            image: 'https://sm.ign.com/t/ign_in/gallery/a/a-song-of-/a-song-of-ice-and-fire-2024-box-set_h577.600.jpg',
        },
    ];
    return books;
})
