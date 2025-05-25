import { useCallback, useEffect, useReducer } from "react";
import data from '../../data.json'

export function useProduct() {
    const [state, dispatch] = useReducer(reducer, {
        products: data.map(product => ({
            ...product,
            quantity: 0
        })),
        total: 0
    });

    return {
        ...state,
        incrimentProduct: (indexProduct) => {
            dispatch({ type: 'INCRIMENT', playload: indexProduct })
        },
        decrimentProduct: (indexProduct) => {
            dispatch({ type: 'DECRIMENT', playload: indexProduct })
        },
        removeProduct: (indexProduct) => {
            dispatch({ type: 'REMOVE_PRODUCT', playload: indexProduct })
        },
        confirmOrder: () => {
            dispatch({ type: 'CONFIRM_ORDER', playload: null })
        }
    };
}

export function reducer(state, action) {
    let products = [];
    let total = 0;

    switch (action.type) {
        case 'INCRIMENT':
            products = state.products.map((product, index) => {
                return index === action.playload ? {
                    ...product,
                    quantity: product.quantity + 1
                } : product
            });
            break;

        case 'DECRIMENT':
            products = state.products.map((product, index) => {
                return index === action.playload ? {
                    ...product,
                    quantity: product.quantity - 1
                } : product
            });
            break;

        case 'REMOVE_PRODUCT':
            products = state.products.map((product, index) => {
                console.log(action.playload)
                return index === action.playload ? {
                    ...product,
                    quantity: 0
                } : product
            });
            break;

        case 'CONFIRM_ORDER':
            products = state.products.map((product, index) => {
                return {
                    ...product,
                    quantity: 0
                }
            });
            break;
    }

    products.forEach(products => {
        total += products.price * products.quantity;
    });

    return {
        products,
        total: total

    }
}