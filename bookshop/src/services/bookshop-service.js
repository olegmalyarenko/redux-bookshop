export default class BookshopService {
    getBooks() {
        return [
            { id: 1,
              title: "Production-Ready Microservices",
              author: "Susan J. Folwer",
              price: '1698',
              coverImg:'https://balka-book.com/files/2018/02_26/18_40/u_files_store_6_119687.jpg'
        },
        { id: 2,
            title: "Release it!",
            author: "Michael T. Nygard",
            price: '300',
            coverImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7g9E2DRpA7xQo4_snfV7QpSyXTho3uA8CvGbuwaQ1BaSwJ5l'
      }
    ];
    }
}