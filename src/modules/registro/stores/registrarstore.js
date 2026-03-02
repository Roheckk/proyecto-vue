import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRegistrarStore = defineStore('registrar', () => {
    const nombre = ref('');
    const email = ref('');
    const guardarRegistro = (nombreFormulario, emailformulario) => {
        nombre.value = nombreFormulario;
        email.value = emailformulario;
    };

    function setNombre(nombre) {
        nombre.value = nombre;
    }
    function setEmail(email) {
        email.value = email;
    }

    return { nombre, email, guardarRegistro };
});