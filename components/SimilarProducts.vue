<template>
    <b-container fluid class="similarwrapper" style="background-color: #EBEBEB;">
        <b-row style="align-content: center; margin-left: 30%; color: #c65800">
            <h1>BENZER ÜRÜNLER</h1>              
        </b-row>
        <b-row>
            <b-col cols="3" class="colon">
                <b-row>
                    <img class="urunimg" src="https://kahhvecom.imgix.net/urunler/448_1565686841_2nX.jpg?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=e9fa9696eb8a47e2a643645eda308d22" alt="">
                </b-row>           
                <b-row style="align-items: center; text-align: center;">
                    <p style="color: #C65800; align-items: center; text-align: center;">Acme</p>
                </b-row>
                <!-- <b-row>
                    <span style="color: gray; padding-left: 90px;  ">Petra</span>
                </b-row> -->
                
                
            </b-col>
            <b-col cols="3" class="colon">
                <img class="urunimg" src="https://kahhvecom.imgix.net/urunler/796_1603712633_TGb.png?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=99033a67784423aa44d6be330195f270" alt="">
                <p style="color: #C65800; align-items: center; text-align: center;">All Day Blend</p>
            </b-col>
            <b-col cols="3" class="colon">
                <img class="urunimg" src="https://kahhvecom.imgix.net/urunler/615_1589354732_SAO.jpg?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=22c536601bce2b9a518389abacb24f5d" alt="">
                <p style="color: #C65800; align-items: center; text-align: center;">Colombia Supremo</p>
            </b-col>
            <b-col cols="3" class="colon">
                <img class="urunimg" src="https://kahhvecom.imgix.net/urunler/795_1603712422_C8e.png?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=e941e7b5242cdd2d242599ea0407070f" alt="">
                <p style="color: #C65800; align-items: center; text-align: center;">Breakfast Blend</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {

}
</script>

<style>
    .similarWrapper{
        background-color: #EBEBEB;
    }
    .urunimg{
        width: 200px;
        height: 200px;
        
        
        
    }
    .colon{
        width: 200px;
        height: 200px;
        
    }
    
</style>