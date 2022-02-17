const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order['name'];
  const numerotell = order['phoneNumber'];
  const endereco = 'address';
  const rua = order[endereco].street;
  const numero = order[endereco].number;
  const ap = order[endereco].apartment;

  console.log(`Olá ${entregador}, entrega para: ${cliente}, Telefone: ${numerotell}, R. ${rua}, Nº: ${numero}, AP: ${ap}`);
}


const orderModifier = (order) => {
  const cliente = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  const total = order.payment.total = '50';

  console.log(`Olá ${cliente}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$ ${total},00.`);
}

customerInfo(order);
orderModifier(order);