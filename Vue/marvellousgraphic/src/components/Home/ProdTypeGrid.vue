<template>
    <div class = "container">
        <div class = "item1">
            <div class = "title-bg">Frames</div>
        </div>
        <div class = "item2">
            <div class = "title-bg">T-Shirts</div>
        </div>
        <div class = "item3">
            <div class = "title-bg">Mugs</div>
        </div>
        <div class = "item4">
            <div class = "title-bg">Gift Items</div>
        </div>
               <div class = "item5">
            <div class = "title-bg">Wedding Photography</div>
        </div>
               <div class = "item6">
            <div class = "title-bg">Certificates</div>
        </div>
               <div class = "item7">
            <div class = "title-bg">Calenders</div>
        </div>
               <div class = "item8">
            <div class = "title-bg">Banners</div>
        </div>
               <div class = "item9">
            <div class = "title-bg">Business Cards</div>
        </div>
    </div>
    <button>More Products</button>
</template>

<script>


export default {

}
</script>

<style scoped>


.container{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-auto-rows: 300px;

    width: 100vw;
    grid-column-gap:20px;
    grid-row-gap:20px;
    justify-content:center;
    margin-bottom: 100px;

}

.title-bg{
    width: 100%;
    margin-top: 25%;
    background-color: rgba(255,255,255,0.8);
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 25px;
    color: white;
    text-shadow: 1px 1px 4px #000;
}

.container>div{
    border: solid 2px #000;
}

.container>div>div{
    border: solid 0px #000;
}

.item1{
    background-image: url('../../assets/homeprodgrid/1.jpg');
    background-size: cover;
}

.item2{
    background-image: url('../../assets/homeprodgrid/2.jpg');
    background-size: cover;
}

.item3{
    background-image: url('../../assets/homeprodgrid/3.jpg');
    background-size: cover;
}

.item4{
    background-image: url('../../assets/homeprodgrid/4.jpg');
    background-size: cover;
}


.item5{
    background-image: url('../../assets/homeprodgrid/5.jpg');
    background-size: cover;
}

.item6{
    background-image: url('../../assets/homeprodgrid/6.jpg');
    background-size: cover;
}

.item7{
    background-image: url('../../assets/homeprodgrid/7.jpg');
    background-size: cover;
}

.item8{
    background-image: url('../../assets/homeprodgrid/8.jpg');
    background-size: cover;
}

.item9{
    background-image: url('../../assets/homeprodgrid/9.jpg');
    background-size: cover;
}


button{
    position: relative;
    width: 220px;
    height:40px;
    padding: 0px;
    margin-left: auto;
    margin-bottom: 200px;

    font-family: 'Jost', sans-serif;
    font-size: 20px;
    font-weight: 500;
    background-color:#CD4F84;
    color: #fff;
    border: 0;
    border-radius: 20px;
    
}


button:hover{
    background: rgba(0,0,0,0.5);
    cursor: pointer;
}
</style>