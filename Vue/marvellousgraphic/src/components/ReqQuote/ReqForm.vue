<template>
    <div class="container">
        <h1>Get Quote</h1>
        <form method = "POST" action = "">
                <label>Choose Products</label>
                <select>
                    <option>Item 1</option>
                    <option>Item 2</option>
                    <option>Item 3</option>
                    <option>Item 4</option>
                </select>

                <label>Quantity </label>
                <input type = "number" name = "quantity" placeholder = " Choose Quantity" min = "1" />

                <label>Required Date</label>
                <input type = "date" name = "date"/>

                <label>Email</label>
                <input type = "email" name = "email" placeholder = "Enter Email" />


                <label>Name</label>
                <input type = "text" name = "name" placeholder = "Enter Name or Company" />


                <label>Message</label>
                <textarea name = "message" cols = "10" rows = "6" />

                <button type = "submit" >Send</button>
            
            
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.container{
    margin-top: 50px;
}

h1{
    margin-top: 70px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

form{
    width: 500px;
    margin-left: 30%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
}

form label{
    padding: 20px 0;
    font-family: 'Jost', sans-serif;
    font-weight: 600;
}

form input, select{
    width: 50%;
    height: 30px;
    margin:auto;
    padding: 5px;
}

form textarea{
    padding: 10px;
}

form button{
    margin: 50px;
    padding: 15px 0;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
    font-size: 15px;
}


::placeholder{
    text-align: center;
}

</style>