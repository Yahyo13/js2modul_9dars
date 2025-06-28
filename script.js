let box = document.querySelector(`.b2`)

let data = [
    {
        img: `./1.png`,
        h3: 'Mars rug',
        dp: `100 Coins`,
        p: '24 dona mavjud'
    },


    {
        img: `./2.png`,
        h3: 'Keyboard sticker',
        dp: '100 Coins',
        p: '11 dona mavjud'
    },


    {
        img: `./3.png`,
        h3: 'Smart watch',
        dp: `899 Coins`,
        p: '4 dona mavjud'
    },


    {
        img: `./4.png`,
        h3: 'Wireless keyboard',
        dp: '350 Coins',
        p: '7 dona mavjud'
    },


    {
        img: `./5.png`,
        h3: 'Mouse',
        dp: `359 Coins`,
        p: '24 dona mavjud'
    },




    {
        img: `./6.png`,
        h3: 'AirPods',
        dp: '499 Coins',
        p: '11 dona mavjud'
    },


    {
        img: `./7.png`,
        h3: 'Powerbank',
        dp: '899 Coins',
        p: '5 dona mavjud'
    },


    {
        img: `./8.png`,
        h3: 'USB flash drive',
        dp: '299 Coins',
        p: '21 dona mavjud'
    },


    {
        img: `./9.png`,
        h3: 'Smartphone',
        dp: '3699 Coins',
        p: '2 dona mavjud'
    },


    {
        img: `./10.png`,
        h3: 'Playstation 5',
        dp: '7499 Coins',
        p: 'Ushbu tovarga oldindan buyurtma berish mumkin'
    },
    {
        img: `./11.png`,
        h3: 'Yandex Station',
        dp: '1999',
        p: '4 dona mavjud'
    },
    {
        img: `./12.png`,
        h3: 'Planshet Samsung   ',
        dp: '4999 Coins',
        p: '24 dona mavjud'
    },

]

data.map((item)=>{
    box.innerHTML += `
    
        

       
        
        <div class="di">
         <div class="image">
                    <img src="${item.img}" alt="" >
                </div>
        <h3>${item.h3}</h3>
        <div style="display:flex ; align-items: center; justify-content: center ; line-height:1px">
            <img src="./coin.png" alt="" >
            <p style="font-size: 18px;">${item.dp}</p>
        </div>
        <p style="font-size: 12px;">${item.p}</p>
        </div>
        
       
    
    `
})



{/* <div class = "di">
    
<h3 >${item.h3}</h3>

    <div style="display:flex ; align-items: center; justify-content: center ; line-height:1px">
        <img src="./coin.png" alt="" >
       <p style="font-size: 18px;">${item.dp}</p>
   </div>

 <p style="font-size: 12px;">${item.p}</p>

</div> */}