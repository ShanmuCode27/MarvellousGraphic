<template>
    <div class = "container">
        <h3>Contact Us</h3>
        <div class = "icons">
            <a href="#"><i class="fa fa-google" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-facebook" id = "fb" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-instagram"  id = "insta" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-whatsapp" id = "whatsapp" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-envelope"  id ="mail" aria-hidden="true"></i></a>
        </div>
        <p>Or</p>
        <h4>Send us a message</h4>

        <div class = "form">
            <form action = "../../../getMessage.php" method = "POST">
                <table>
                    <tr>
                        <td>Your Email</td>
                        <td><input type = "email" name = "email" /></td>
                    </tr>
                    <tr>
                        <td>Message</td>
                        <td><input type = "email" name = "email" id = "message" multiline /></td>
                    </tr>
                    <tr>
                        <td><input type = "submit" name = "submit" value = "Send" id = "button" /></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</template>

<style scoped>

.container{
    padding: 50px 10px;
}

.container h3{
    font-family: 'Poppins',sans-serif;
    margin-top: 50px;
    font-size: 55px;
    padding: 40px 0;
}

.container .icons{
    margin-top: 50px;
}

.container .icons a{
    width: 25px;
    padding: 0px 100px;
}

.container .icons a i {
    font-size: 48px;
    color: #000;
}

.container p{
    font-family: 'Jost',sans-serif;
    margin-top: 70px;
    font-size: 35px;
    padding: 20px 0;
}

.container h4{
    font-family: 'Poppins',sans-serif;
    margin-top: 50px;
    font-size: 25px;
    padding: 40px 0;
}

#whatsapp{
    color: green;
}

#insta{
    color: rgb(210, 43, 165);
}

#fb{
    color: rgb(59, 105, 213);
}

#mail{
    color: rgb(129, 101, 47);
}

.form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 0%;

}

#message{
    width: 200px;
    height: 100px;
}

input {
    padding: 10px;
}

table{
    margin-left: 40%;
}

table td{
    padding-top: 40px !important;
}

#button{
    margin: auto;
    width: 100px;
    height: 30px;
    margin-left: 100%;
    background: #90E5F8;
    border-radius: 10px;
    border: solid 0.5px #ddd;
}
</style>