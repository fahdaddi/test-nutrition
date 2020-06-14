import _ from "lodash";
import { Products } from '~/data';

export const state = () => ({
    products: Products
});

export const mutations = {};

export const getters = {};

export const actions = {
    async nuxtServerInit({ commit, dispatch, state }, { app, req, redirect }) {
        //getting data in SSR
    }
};