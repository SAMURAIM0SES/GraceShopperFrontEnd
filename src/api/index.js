export const apiURL = 'https://graceshopperbackend.herokuapp.com/api';

// export const apiURL = 'http://localhost:4000/api';

export const registerUser = async (
  username,
  password,
  first_name,
  last_name,
  mobile,
  email,
  admin
) => {
  try {
    const response = await fetch(`${apiURL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        mobile: mobile,
        email: email,
        admin: admin,
      }),
    });

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result, "i'm from api index!!!");
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${apiURL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result, 'look at this result for token');
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (
  first_name,
  last_name,
  mobile,
  email,
  token,
  user_id
) => {
  try {
    const response = await fetch(`${apiURL}/users/${user_id}/updateuser`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        mobile: mobile,
        email: email,
      }),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export async function getMyOrderDetails(user_id, token) {
  try {
    const response = await fetch(
      `${apiURL}/users/${user_id}/order-history`,

      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result, 'should be my order-history');
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getMyOrders(username, token) {
  try {
    const response = await fetch(
      `${apiURL}/users/${username}/orders`,

      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result, 'should be my orders');
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts() {
  try {
    const response = await fetch(`${apiURL}/catalog/products`);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(productId) {
  try {
    const response = await fetch(
      `${apiURL}/catalog/products/${productId}`,

      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result, 'should be single product by id');
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = async (
  name,
  description,
  price,
  category_id,
  inventory_id,
  token,
  productId
) => {
  try {
    const response = await fetch(`${apiURL}/catalog/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        catefory_id: category_id,
        inventory_id: inventory_id,
      }),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${apiURL}/catalog/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export async function getAllCategories() {
  try {
    const response = await fetch(`${apiURL}/catalog/productCategory`);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategory(categoryId) {
  try {
    const response = await fetch(
      `${apiURL}/catalog/productCategory/${categoryId}`,

      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result, 'should be single category by id');
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function updateCartProducts(productId, cartId, quantity, token) {
  try {
    const response = await fetch(`${apiURL}/cart/cart_products`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId,
        cartId,
        quantity,
      }),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const createShoppingCart = async (user_id, is_purchased, date) => {
  try {
    const response = await fetch(`${apiURL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        is_purchased: is_purchased,
        date: date,
      }),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result, 'The shopping cart was created');
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const createShoppingCartProducts = async (
  product_id,
  cart_id,
  quantity
) => {
  try {
    const response = await fetch(`${apiURL}/cart/cart_products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: product_id,
        cart_id: cart_id,
        quantity: quantity,
      }),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const result = await response.json();
    console.log(result, 'This product was added to the table cart_products');
    return result;
  } catch (error) {
    console.error(error);
  }
};
