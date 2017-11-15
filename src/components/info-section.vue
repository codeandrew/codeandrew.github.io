<template lang="html">
  <section class="basic-info">
        <b-container >
          <h2>Basic Title Information</h2>
          <br />
          <br />
            <b-row>
              <info-col v-for="(alias, key) in info"
                        key='key'
                        :title='alias.title'
                        :icon="alias.icon"
                        :description='alias.description'
              />
            </b-row>
        </b-container >
  </section>
</template>

<script>
export default {
  data(){
        return {
            info : [
                {
                    icon : 'fa fa-car',
                    title : 'Instruction car \n loan number one',
                    description : `Before proceeding with the application process,
                    make sure you have the official requirements on
                    hand to upload with your application`,
                },
                {
                    icon : 'fa fa-address-card-o',
                    title : 'Instruction car loan \n number wheels',
                    description : ` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in`,
                },
                {
                    icon : 'fa fa-car',
                    title : 'Easy wheels documents \n get car fast and east',
                    description : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.`,
                }
            ]
        };
    }
}
</script>

<style lang="css">
</style>
