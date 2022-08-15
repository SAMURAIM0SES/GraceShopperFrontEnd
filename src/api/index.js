export const apiURL = "https://graceshopperbackend.herokuapp.com/api"


export const registerUser = async (username,password,first_name,last_name,mobile,telefone) => {
    try{
     const response = await fetch(`${apiURL}/users/register`, {
       method:"POST",
       headers: {
         "Content-Type" : "application/json"
       },
       body: JSON.stringify({
         
           username: username,
           password: password,
           first_name: first_name,
           last_name: last_name,
           mobile: mobile
         
       })
     })
     const result = await response.json()
     console.log(result,"i'm from api index!!!")
     return result
     
   }catch(error){
     console.error(error)
   }}


   export const loginUser = async (username, password) => {
    try {
      const response = await fetch(`${apiURL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
            username: username,
            password: password,
          
        }),
      });
      const result = await response.json()
      console.log(result, "look at this result for token")
      return result
      
    } catch (error) {
      console.error(error);
    }
  };
  

  export const updateUser = async (first_name, last_name, mobile, email, token, user_id) => {
    try{

        const response = await fetch(`${apiURL}/users/${user_id}/updateuser`, 
            {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    
                    first_name: first_name,    
                    last_name: last_name,
                    mobile: mobile,
                    email: email
                   
                    
                })
            })    
        const result = await response.json();
        return result;
    }

    catch (error){   
    console.error(error);
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




