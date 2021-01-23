<template >
    <div style="background-color:  #ebebeb">
        <b-container >
            <pre v-if="loading">Yükleniyor</pre>
            <b-row>
                
                <b-col class="alt" cols="10">
                    <h1 style="color: #C65800; font-size:450%"><b-icon icon="cart4" />SEPETİNİZ</h1>
                    <h5 style="color: #C65800;">Siparişinizi hemen tamamlayabilirseniz yarın kargoda.<b-icon icon="info-circle-fill" /></h5>

                </b-col>
                <b-row v-for="(product,i) in this.$store.state.users.basket" :key="i"  class="alt1">
                    <b-col cols="3">
                        <img class="brdclr" :src="product.urun_resmi.replace('?h=200','?h=1000').replace('&w=200','&w=1000')" alt="" style="width:100%; border-color: #c65800; border-width: 3px;">
                    </b-col>
                    <b-col cols="7">
                        <h1 class="urunTitle">{{product.urun_ismi}}</h1>
                    
                        <h2 class="urunmarka">{{product.marka}}</h2>
                        <div class="row">
                            <b-form-select  class="col-md-7  brdclr" v-model="selected" style="color:#603813" :options="options" ></b-form-select>
                            <b-form-select class="col-md-4  brdclr" v-model="selected1" :options="adet" ></b-form-select>
                            <button class="col-md-1  brdclr" style="font-size:100%; color:#603813" >X</button>
                        </div>
                        
                        <p>{{product.quantity}}x{{product.price}} TL</p>
                    </b-col>
                </b-row>
                <b-row class="alt2" >
                    <b-col  cols="6">
                        <h1 >Kargo Ücreti:<p1 >ÜCRETSİZ</p1> </h1>
                    </b-col>
                    <b-col cols="4">
                        <img  src="../assets/static/image/ucanyazi.png" alt="" height="70px"/>
                    </b-col>
                </b-row>
                <b-row class="alt2">
                    <input type="text" style=" margin-left:1%;border-color:black; font-size:20px; width:30%; border-radius: 5px;" placeholder="Promosyon kodunuz varsa giriniz"/>
                
                    <button class="bttns" style="margin-left:1%;border-radius: 5px; width:10%;height:90%">KULLAN</button>
                    
                </b-row>
                <b-row class="alt2">
                    <b-col cols="6">
                        <textarea name="not" id="not" cols="55%" rows="6" placeholder="Sipariş Notunuz"></textarea>
                    </b-col>
                    <b-col cols="3" style="margin-top:3%">
                        <h1 style="color:#c65800">TOPLAM</h1>
                        <h1 style="color: #603813">{{this.$store.state.users.basket.map(v=>v.price*v.quantity).reduce((a,b)=>a+b).toFixed(2)}} TL</h1>
                    </b-col>
                    <b-col cols="3" style="margin-top:7%; ">
                        <button class="bttns" style="border-radius:10px; width:70%; height:60%">SİPARİŞ VER</button>
                    </b-col>
                    <b-col>
                    <input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>  
                    <i>Siparişimin <i style="color:#c65800">hediye paketi</i> olarak gönderilmesini istiyorum. <i style="color:#c65800">(9.99TL)</i></i>
                    <br>
                    <p style="font-size:70%">Hediye paketi seçili siparişlerde fatura gönderilmez.</p>
                    </b-col>

                </b-row>
                <!-- <b-col class="alt2" cols="10">
                    <div class="row">
                        <textarea  class="col-md-6" name="not" id="not" cols="55%" rows="7"></textarea>
                        <div>
                            <h1>TOPLAM</h1>
                            <h1 v-for="(product,i) in this.$store.state.users.basket" :key="i">{{ücret+product.price}}</h1>
                        </div>
                    </div>
                </b-col> -->


            </b-row>
        </b-container>
    </div>
    
    
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
export default {
    data(){
        return{
            loading:true,
            selected:null,
            selected1:null,
            ucret:0,
            options:[
                {'value':null,text:'Öğütme Boyutu'},
                {value:'French Press',text:'French Press'},
                {value:'Chemex',text:'Chemex'},
                {value:'Metal Filtre',text:'Metal Filtre'},
                {value:'Kağıt Filtre',text:'Kağıt Filtre'},
                {value:'Hario V60',text:'Hario V60'},
                {value:'Aeropress',text:'Aeropress'},
                {value:'Moka Pot',text:'Moka Pot'},
                {value:'Espresso',text:'Espresso'},
                {value:'Soğuk Demleme',text:'Soğuk Demleme'},
                {value:'Çekirdek',text:'Çekirdek'},
                {value:'Syphon',text:'Syphon'}],
            adet:[
                {'value':null,text:'Adet'},
                { value: 1, text: "1 Adet" },
                { value: 2, text: "2 Adet" },
                { value: 3, text: "3 Adet" },
                { value: 4, text: "4 Adet" },
                { value: 5, text: "5 Adet" },
                { value: 6, text: "6 Adet" },
                { value: 7, text: "7 Adet" },
                { value: 8, text: "8 Adet" },
                { value: 9, text: "9 Adet" },
                { value: 10, text: "10 Adet" },
                { value: 11, text: "11 Adet" },
                { value: 12, text: "12 Adet" },
                { value: 13, text: "13 Adet" },
                { value: 14, text: "14 Adet" },
                { value: 15, text: "15 Adet" },
                { value: 16, text: "16 Adet" },
                { value: 17, text: "17 Adet" },
                { value: 18, text: "18 Adet" },
                { value: 19, text: "19 Adet" },
                { value: 20, text: "20 Adet" },
                { value: 21, text: "21 Adet" },
                { value: 22, text: "22 Adet" },
                { value: 23, text: "23 Adet" },
                { value: 24, text: "24 Adet" },
                { value: 25, text: "25 Adet" }
            ]
        }
    },
    methods:{
        
    },

    mounted(){
        try {
            let refa = this.$fireModule.database().ref('/0/products/')
            refa.on('value', snapshot=> {
                this.product = snapshot.val().filter(prod=>prod._id==this.$route.params.id)[0]
                this.loading = false;
            });
            
        } catch (e) {
            console.log(e);
        }
        
    },
    
}
</script>

<style scoped>
    .alt{
        border-bottom: 3px solid #c65800;
        margin-bottom: 3%;
        margin-left: 10%;
        margin-right: 10%;
        padding-bottom: 1%;
        
        
    }
    .alt1{
        margin-bottom: 5%;
        margin-left: 10%;
        margin-right: 10%;
        width: 100%;
        
    }
    .alt2{
        border-top:3px solid #c65800;
        padding-top:1%;
        margin-bottom: 1%;
        margin-left: 10%;
        margin-right: 7%;
        width: 100%;
        
    }
    .brdclr{
        border: 2px solid #603813;
        
        
    }
    .bttns{
        color: white;
        background-color:  #603813;
        border-color: #603813;
    }
</style>