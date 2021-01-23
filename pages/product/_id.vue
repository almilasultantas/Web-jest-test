
<template>
    <b-container>
        <pre v-if="loading">Yükleniyor</pre>
        <b-row v-else class="productDetail">
            <b-col cols="5">
                <img :src="product._source.urun.urun_resmi.replace('?h=250','?h=1000').replace('&w=250','&w=1000')" alt="" style="width:100%;">
            </b-col>
            <b-col cols="7">
                <h1 class="urunTitle">{{product._source.urun.urun_ismi}}</h1>
                
                <h2 class="urunmarka">{{product._source.urun.marka}}</h2>
                
                <div class="comments">
                    <div class="commnetsOff">
                        <div class="commnetsOn" :style="'width:'+(20*product._source.urun.puan)+'%;'"></div>
                    </div>
                    <div class="commnetsCount">({{product._source.urun.yorum_sayisi}})</div>
                </div>
                
                <p class="price"> <span class="oldprice" v-if="product._source.urun.eski_fiyat">{{product._source.urun.eski_fiyat}} TL <div class="lines"></div></span>{{product._source.urun.fiyat}} TL</p>
                
                <b-form-select class="skuSelect" v-model="selected" :options="options"></b-form-select>
                <b-row>
                    <b-col cols="6">
                        <b-form-spinbutton class="adetSelector" v-model="adetvalue" min="1" max="100"></b-form-spinbutton>
                        <div class="adetValue">Adet: <span style="color: #c65800 !important;">{{ adetvalue }}</span></div>
                    </b-col>
                    <b-col cols="6">
                        <b-row>
                            <b-col cols="auto" style="margin-right:0;">
                                <b-icon icon="heart" class="addtofav"></b-icon>
                            </b-col>
                            <b-col>
                                <b-button class="addtobasket" @click="addtobasket()">SEPETE EKLE</b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <button class="buttons2">
                            <img src="../../assets/static/image/araba.png" alt="" style="width:100px; border-color:white" >
                        </button>
                        <button class="buttons2" style="margin-left:1%">
                            <img src="../../assets/static/image/ogutme.png" alt=""  style="width:100px; border-color:white">
                        </button>
                    </b-col>
                </b-row>

            </b-col>

            <b-col cols="12">
                <p class="desc">{{product._source.urun.aciklama}}</p>
            </b-col>
            <SimilarProducts style="padding-left: 10%" />
            <Comments style="width: 200%" />
            <Nuxt />
        </b-row>
    </b-container>
</template>
<script>
import SimilarProduct from "../../components/SimilarProducts";
import Comments from "../../components/Comments";
export default {
    components: {
        SimilarProduct,
        Comments,
    },
    data(){
        return{
            product:{},
            loading:true,
            selected: null,
            adetvalue:1,
            options:[{'value':null,text:'Öğütme Boyutu'},{value:'French Press',text:'French Press'},{value:'Chemex',text:'Chemex'},{value:'Metal Filtre',text:'Metal Filtre'},{value:'Kağıt Filtre',text:'Kağıt Filtre'},{value:'Hario V60',text:'Hario V60'},{value:'Aeropress',text:'Aeropress'},{value:'Moka Pot',text:'Moka Pot'},{value:'Espresso',text:'Espresso'},{value:'Soğuk Demleme',text:'Soğuk Demleme'},{value:'Çekirdek',text:'Çekirdek'},{value:'Syphon',text:'Syphon'}],
        }
    },
    methods:{
        addtobasket(){
            let tobasketdata = {
                'urun_resmi':this.product._source.urun.urun_resmi,
                'urun_ismi':this.product._source.urun.urun_ismi,
                'marka':this.product._source.urun.marka,
                'type':this.selected,
                'price':this.product._source.urun.fiyat,
                'quantity':this.adetvalue
            }
            this.$store
                .dispatch("users/addtobasketst", tobasketdata)
                .then(() => {
                   console.log('sepete eklendi');
                })
                .catch(err => {
                    console.log(err);
                });
        }
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
    }
};
</script>
<style>
.addtofav{
    color: rgb(198, 88, 0);
    margin-top: 25px;
    font-size: 40px;
    padding: 0;
}
.addtobasket{
    background-color: #c65800 !important;
    border: 0;
    width: 100%;
    border-radius: 10px;
    color: white;
    padding: 8px 10px;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 50px;
    letter-spacing: 2px;
    max-width: 300px;
}
.desc{
    margin-top: 30px;
    font-size: 24px;
    font-weight: 300;
}
.productDetail .skuSelect{
    font-size: 24px;
}
.adetValue{
    float: left;
    line-height: 40px;
    margin-left: 10px;
    margin-top: 24px;
    font-size: 32px;
    color: #603813 !important;
}
.adetSelector output{
    display: none;
}
.adetSelector button{
    border-radius: 5px !important   ;
    background-color: #603813 !important;
    color: white;
    padding: 10px;
    margin-right: 10px;
}
.adetSelector{
    width: 90px;
    float: left;
    border: 0;
    margin-top: 24px;
}
.productDetail{
    margin-top: 40px;
}
.productDetail .comments .commnetsOff{
    background-image:url('https://kahhve.com/zeplin/img/star_secilidegil.png');
    background-size: 21px;
    width: 105px;
    height: 14px;
    margin: auto;
    display: inline-block;
}
.productDetail .comments .commnetsOff .commnetsOn{
    background-image:url('https://kahhve.com/zeplin/img/star_secili.png');
    background-size: 21px;
    width: 94px;
    height: 14px;
}
.productDetail .comments .commnetsCount {
    display: inline-block;
    vertical-align: top;
    color: #603813 !important;
    font-size: 12px;
}
.productDetail .urunTitle{
    font-size: 64px;
    line-height: 54px;
    margin: 0;
    color: #c65800 !important;
}
.productDetail .urunmarka{
    font-size: 36px;
    display: inline;
    color: #603813 !important;
}
.productDetail img{
    border: solid 2px #c65800;
}
.productDetail .price .oldprice{
    color: #a2a2a2 !important;
    position: relative;
}
.productDetail .price .oldprice .lines{
    border-top: 5px solid #c65800;
    left: -3px;
    position: absolute;
    transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    -ms-transform-origin: 42% 52%;
    -webkit-transform: rotate(-3deg);
    transform-origin: 42% 52%;
    width: 175px;
    top: 36px;
}

.productDetail .price{
    color: #603813;
    font-size:48px;
    font-weight: normal;
    white-space: nowrap;
}
.buttons2{
    width: 20%;
    height: 110%;
    background-color: #fff;
    border-radius: 10%;
}
</style>