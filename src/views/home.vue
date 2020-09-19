<template>
    <v-app>
        <v-main>
             <v-container class="pa-1">
                    <v-item-group
                      v-model="selected"
                      multiple
                    >
                      <v-row>
                        <v-col
                          v-for="(item, i) in items"
                          :key="i"
                          
                        >
                          <v-item v-slot:default="{ active, toggle }">
                            <v-card :height="imgWidth"
                              :width="imgWidth">
                                  <v-img
                                  :src="  active ? ocultar  :  item  "
                                  
                                  :height="imgWidth"
                                  :width="imgWidth"
                                  
                                  @click="toggle"
                                >
                                </v-img>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-item-group>
                  </v-container>

        </v-main>
    </v-app>
</template>
<script>
export default {
    data(){
        return{
            items: [],
            imgWidth: 100,
            selected: [],
            ocultar2: '',
            ocultar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Messier_81_HST.jpg/1200px-Messier_81_HST.jpg',
        }
    },
    created(){
         this.$vuetify.theme.dark = true
         this.imgWidth = 1000/32

         for (let index = 0; index < 3; index++) {
             
             for (let index = 0; index < 90; index++) {
                  this.items.push(require('../assets/foto'+index+'.jpg'))
             }
           
             
         }
         console.log(this.items)
    }
}
</script>