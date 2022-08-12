(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private masterEmail = "juanmesa2097@gmail.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      console.log("Enviando correo a los clientes", template);
    }
  }

  class ProductBloc {
    constructor(
      private productsService: ProductService,
      private mailer: Mailer
    ) {}

    loadProduct(id: number) {
      this.productsService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productsService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["test@sdf.com"], "to-admins");
    }
  }

  class CartBlock {
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productsService = new ProductService();
  const mailer = new Mailer();
  const productBloc = new ProductBloc(productsService, mailer);
  const cartBloc = new CartBlock();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();

  cartBloc.addToCart(10);
})();
