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
            <form ref="form" @submit.prevent="sendEmail">
                <table>
                    <tr>
                        <td>Your Email</td>
                        <td><input type = "email" name = "email" placeholder = "your email here"/></td>
                    </tr>
                    <tr>
                        <td>Message</td>
                        <td><input type = "text" name = "message" id = "message" placeholder="message" multiline /></td>
                    </tr>
                    <tr>
                        <td><input type = "submit" name = "submit" value = "Send" id = "button" /></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</template>

<script>

import emailjs from 'emailjs-com';


export default {

    data() {
        return {
            email: '',
            message: ''
        }
    },
    methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_ruah5zo', 'template_ld3l4gr', this.$refs.form, 'EjBnmCoHomHUCl070',
        {
            email: this.email,
            message: this.message,

        }).then( function (res) {
            alert("Sent successfully ! " + res.status);
        })  

      } catch(error) {
          console.log({error})
      }
      // Reset form field
 
        this.name =  '',
        this.email =  ''
    
  }
}


}
</script>



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
    justify-content: center;

}

#message{
    width: 200px;
    height: 100px;
}

input {
    padding: 10px;
    width: 200px;
    height: 15px;
    border-radius: 10px;
    border: none;
}

#message{
    padding: 0px 10px;
}

input:focus{
    outline-style: solid;
    outline-width: 3px;
    outline-color: #90E5F8;
}

table{
    display: flex;
    flex-direction: column;
    width: 70%;
}
table > tr{
    display: flex;
    justify-content: center;
}

table td{
    width: 100px;
    padding: 40px 20px!important;
}

#button{
    margin: auto;
    width: 200px;
    height: 30px;
    padding: 5px;
    background: #90E5F8;
    border-radius: 10px;
    border: solid 0.5px #ddd;
    font-weight: bold;
    font-weight: 800;
    font-family: 'Jost',sans-serif;
}
</style>