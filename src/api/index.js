export const apiURL = 'https://graceshopperbackend.herokuapp.com/api';

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
        admin: admin
      }),
    });
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
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export async function getAllCategories() {
  try {
    const response = await fetch(`${apiURL}/catalog/productCategory`);
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
    const result = await response.json();
    console.log(result, 'should be single category by id');
    return result;
  } catch (error) {
    console.log(error);
  }
}
