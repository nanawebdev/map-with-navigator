// import { initializeApp } from 'firebase/app'
import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCbRpU0MHyo0z4QZp8MCqEtbPj9Q4p1dCE",
    authDomain: "map-with-navigation.firebaseapp.com",
    databaseURL: "https://map-with-navigation-default-rtdb.firebaseio.com",
    projectId: "map-with-navigation",
    storageBucket: "map-with-navigation.appspot.com",
    messagingSenderId: "1032937827868",
    appId: "1:1032937827868:web:45f12605278fafd11f39d9",
    measurementId: "G-DJE0EJK3ES"
};

export const app = firebase.initializeApp(firebaseConfig)

